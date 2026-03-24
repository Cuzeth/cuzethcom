'use client';

import { useState, useRef, useCallback, type DragEvent, type ChangeEvent, type KeyboardEvent } from 'react';
import styles from './coverquad.module.css';

// --- Types ---

interface SlotData {
  img: HTMLImageElement;
  objectUrl: string;
  label: string;
}

type SlotState = SlotData | null;

type ExportSize = 3000 | 2000 | 1000;

// --- Component ---

export default function CoverQuad() {
  const [slots, setSlots] = useState<[SlotState, SlotState, SlotState, SlotState]>([null, null, null, null]);
  const [exportSize, setExportSize] = useState<ExportSize>(3000);

  const fileInputRefs = useRef<(HTMLInputElement | null)[]>([null, null, null, null]);

  const allFilled = slots.every(Boolean);

  // --- Image loading ---
  const loadImageFromFile = useCallback((file: File): Promise<{ img: HTMLImageElement; objectUrl: string }> => {
    return new Promise((resolve, reject) => {
      const objectUrl = URL.createObjectURL(file);
      const img = new Image();
      img.onload = () => resolve({ img, objectUrl });
      img.onerror = () => {
        URL.revokeObjectURL(objectUrl);
        reject(new Error('Failed to load image'));
      };
      img.src = objectUrl;
    });
  }, []);

  const setSlot = useCallback((index: number, data: SlotData | null) => {
    setSlots((prev) => {
      const next = [...prev] as [SlotState, SlotState, SlotState, SlotState];
      const old = prev[index];
      if (old) URL.revokeObjectURL(old.objectUrl);
      next[index] = data;
      return next;
    });
  }, []);

  // --- Slot interactions ---
  const handleSlotClick = (index: number) => {
    fileInputRefs.current[index]?.click();
  };

  const handleClear = (index: number) => {
    setSlot(index, null);
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const { img, objectUrl } = await loadImageFromFile(file);
      setSlot(index, { img, objectUrl, label: file.name });
    } catch {
      // silently fail
    }
    e.target.value = '';
  };

  // --- Drag and drop ---
  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = async (e: DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (!file || !file.type.startsWith('image/')) return;
    try {
      const { img, objectUrl } = await loadImageFromFile(file);
      setSlot(index, { img, objectUrl, label: file.name });
    } catch {
      // silently fail
    }
  };

  // --- Export ---
  const handleExport = () => {
    if (!allFilled) return;

    const size = exportSize;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const half = size / 2;
    const positions: [number, number][] = [
      [0, 0],
      [half, 0],
      [0, half],
      [half, half],
    ];

    positions.forEach(([dx, dy], i) => {
      const slotData = slots[i];
      if (!slotData) return;
      const { img } = slotData;
      const w = img.naturalWidth;
      const h = img.naturalHeight;
      const side = Math.min(w, h);
      const sx = (w - side) / 2;
      const sy = (h - side) / 2;
      ctx.drawImage(img, sx, sy, side, side, dx, dy, half, half);
    });

    canvas.toBlob((blob) => {
      if (!blob) return;
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'coverquad.png';
      a.click();
      URL.revokeObjectURL(a.href);
    }, 'image/png');
  };

  // --- Render ---
  return (
    <div className={styles.wrapper}>
      {/* Grid */}
      <div className={styles.grid}>
        {slots.map((slot, i) => (
          <div
            key={i}
            className={`${styles.slot} ${slot ? styles.filled : ''}`}
            onClick={() => handleSlotClick(i)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, i)}
          >
            <div className={styles.slotEmpty}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </div>
            {slot && (
              // eslint-disable-next-line @next/next/no-img-element
              <img className={styles.slotImg} src={slot.img.src} alt={slot.label} />
            )}
            {slot && (
              <button
                className={styles.slotClear}
                title="Clear"
                onClick={(e) => {
                  e.stopPropagation();
                  handleClear(i);
                }}
              >
                &times;
              </button>
            )}
            <input
              ref={(el) => { fileInputRefs.current[i] = el; }}
              type="file"
              accept="image/*"
              hidden
              onChange={(e) => handleFileChange(e, i)}
            />
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className={styles.controls}>
        <select
          className={styles.select}
          value={exportSize}
          onChange={(e) => setExportSize(Number(e.target.value) as ExportSize)}
        >
          <option value={3000}>3000px (Full)</option>
          <option value={2000}>2000px (Medium)</option>
          <option value={1000}>1000px (Small)</option>
        </select>
        <button
          className={styles.btnExport}
          disabled={!allFilled}
          onClick={handleExport}
        >
          Export PNG
        </button>
      </div>
    </div>
  );
}
