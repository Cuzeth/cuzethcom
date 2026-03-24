'use client';

import { useState, useEffect, useCallback } from 'react';
import styles from './pwgen.module.css';

const SPECIAL_CHARACTERS = '!?$&*';

const SCRABBLE_SCORES: Record<string, number> = {
  a: 1, b: 3, c: 3, d: 2, e: 1, f: 4, g: 2, h: 4, i: 1, j: 8,
  k: 5, l: 1, m: 3, n: 1, o: 1, p: 3, q: 10, r: 1, s: 1, t: 1,
  u: 1, v: 4, w: 4, x: 8, y: 4, z: 10,
};

const LEET_MAP: Record<string, string> = {
  a: '4', b: '8', e: '3', i: '1', l: '1', o: '0', s: '5', t: '7', g: '9',
};

function secureRandom(): number {
  return crypto.getRandomValues(new Uint32Array(1))[0] / (0xffffffff + 1);
}

function secureChoice<T>(arr: T[]): T {
  return arr[Math.floor(secureRandom() * arr.length)];
}

function secureRandInt(min: number, max: number): number {
  return Math.floor(secureRandom() * (max - min + 1)) + min;
}

function wordScore(word: string): number {
  return [...word.toLowerCase()].reduce((sum, ch) => sum + (SCRABBLE_SCORES[ch] ?? 0), 0);
}

function numberScore(n: number): number {
  const s = String(n);
  if (/(\d)\1{2,}/.test(s)) return 1;
  if (/012|123|234|345|456|567|678|789/.test(s)) return 1;
  return 2;
}

function selectTopN<T>(items: T[], scoreFn: (item: T) => number, n = 1027): T {
  const sorted = [...items].sort((a, b) => scoreFn(a) - scoreFn(b));
  return secureChoice(sorted.slice(0, Math.min(n, sorted.length)));
}

function leetify(word: string, probability: number): string {
  return [...word.toLowerCase()]
    .map((ch) => (LEET_MAP[ch] && secureRandom() < probability ? LEET_MAP[ch] : ch))
    .join('');
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

interface WordLists {
  commonWords: string[];
  thirteenLetter: string[];
  eightLetter: string[];
  common13: string[];
  common8: string[];
}

export default function PasswordGenerator() {
  const [wordLists, setWordLists] = useState<WordLists | null>(null);
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState('');
  const [useCommon, setUseCommon] = useState(true);
  const [useLeet, setUseLeet] = useState(false);
  const [leetAmount, setLeetAmount] = useState(30);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    Promise.all([
      fetch('/data/pwgen/common-words.txt').then((r) => r.text()),
      fetch('/data/pwgen/thirteen-letter.txt').then((r) => r.text()),
      fetch('/data/pwgen/eight-letter.txt').then((r) => r.text()),
    ]).then(([common, thirteen, eight]) => {
      const commonWords = common.split('\n').filter(Boolean);
      const thirteenLetter = thirteen.split('\n').filter(Boolean);
      const eightLetter = eight.split('\n').filter(Boolean);
      setWordLists({
        commonWords,
        thirteenLetter,
        eightLetter,
        common13: commonWords.filter((w) => w.length === 13),
        common8: commonWords.filter((w) => w.length === 8),
      });
      setLoading(false);
    });
  }, []);

  const generate = useCallback(() => {
    if (!wordLists) return;

    let word13: string;
    let word8: string;

    if (useCommon) {
      word13 = selectTopN(wordLists.common13, wordScore);
      word8 = capitalize(selectTopN(wordLists.common8, wordScore));
    } else {
      word13 = secureChoice(wordLists.thirteenLetter);
      word8 = capitalize(secureChoice(wordLists.eightLetter));
    }

    const possibleNumbers = Array.from({ length: 1000 }, () => secureRandInt(100000, 999999));
    const number = selectTopN(possibleNumbers, numberScore);

    if (useLeet) {
      word13 = leetify(word13, leetAmount / 100);
      word8 = capitalize(leetify(word8, leetAmount / 100));
    }

    const special = secureChoice([...SPECIAL_CHARACTERS]);

    setPassword(`${word13}${number}${special}${word8}`);
    setCopied(false);
  }, [wordLists, useCommon, useLeet, leetAmount]);

  useEffect(() => {
    if (wordLists) generate();
  }, [wordLists, generate]);

  const copyToClipboard = async () => {
    if (!password) return;
    await navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading) {
    return <div className={styles.loading}>Loading word lists&hellip;</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.result} onClick={copyToClipboard} title="Click to copy">
        <span className={styles.password}>{password}</span>
        <span className={styles.copyHint}>{copied ? 'Copied!' : 'Click to copy'}</span>
      </div>

      <button className={styles.generateBtn} onClick={generate}>
        Generate
      </button>

      <div className={styles.controls}>
        <label className={styles.toggle}>
          <span>Use Common Words</span>
          <input type="checkbox" checked={useCommon} onChange={(e) => setUseCommon(e.target.checked)} />
          <span className={styles.slider} />
        </label>

        <label className={styles.toggle}>
          <span>Leetify</span>
          <input type="checkbox" checked={useLeet} onChange={(e) => setUseLeet(e.target.checked)} />
          <span className={styles.slider} />
        </label>

        {useLeet && (
          <div className={styles.rangeGroup}>
            <label>
              Leetify Amount: {leetAmount}%
            </label>
            <input
              type="range"
              min={0}
              max={100}
              value={leetAmount}
              onChange={(e) => setLeetAmount(Number(e.target.value))}
              className={styles.range}
            />
          </div>
        )}
      </div>
    </div>
  );
}
