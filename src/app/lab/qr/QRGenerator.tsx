'use client';

import { useState, useCallback, useEffect } from 'react';
import QRCode from 'qrcode';
import styles from './qr.module.css';

type TabType = 'text' | 'wifi' | 'email' | 'phone';

const TABS: { key: TabType; label: string }[] = [
  { key: 'text', label: 'Text' },
  { key: 'wifi', label: 'WiFi' },
  { key: 'email', label: 'Email' },
  { key: 'phone', label: 'Phone' },
];

export default function QRGenerator() {
  const [activeTab, setActiveTab] = useState<TabType>('text');
  const [qrDataUrl, setQrDataUrl] = useState<string | null>(null);
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Text
  const [text, setText] = useState('');

  // WiFi
  const [wifiSSID, setWifiSSID] = useState('');
  const [wifiSecurity, setWifiSecurity] = useState('WPA');
  const [wifiPassword, setWifiPassword] = useState('');
  const [wifiHidden, setWifiHidden] = useState(false);

  // Email
  const [emailTo, setEmailTo] = useState('');
  const [emailSubject, setEmailSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');

  // Phone
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneMessage, setPhoneMessage] = useState('');

  const buildQRData = useCallback((): string | null => {
    switch (activeTab) {
      case 'text': {
        const val = text.trim();
        if (!val) { setError('Please enter some text or a URL'); return null; }
        return val;
      }
      case 'wifi': {
        const ssid = wifiSSID.trim();
        if (!ssid) { setError('Please enter a network name (SSID)'); return null; }
        if (wifiSecurity !== 'nopass' && !wifiPassword) {
          setError('Please enter a password for the secured network');
          return null;
        }
        return `WIFI:T:${wifiSecurity};S:${ssid};P:${wifiPassword};H:${wifiHidden ? 'true' : 'false'};;`;
      }
      case 'email': {
        const to = emailTo.trim();
        if (!to) { setError('Please enter an email address'); return null; }
        const params = new URLSearchParams();
        if (emailSubject.trim()) params.append('subject', emailSubject.trim());
        if (emailBody.trim()) params.append('body', emailBody.trim());
        const qs = params.toString();
        return `mailto:${to}${qs ? '?' + qs : ''}`;
      }
      case 'phone': {
        const num = phoneNumber.trim();
        if (!num) { setError('Please enter a phone number'); return null; }
        const msg = phoneMessage.trim();
        return msg ? `smsto:${num}:${msg}` : `tel:${num}`;
      }
      default:
        return null;
    }
  }, [activeTab, text, wifiSSID, wifiSecurity, wifiPassword, wifiHidden, emailTo, emailSubject, emailBody, phoneNumber, phoneMessage]);

  const generate = useCallback(async () => {
    setError(null);
    const data = buildQRData();
    if (!data) return;

    setGenerating(true);
    try {
      const url = await QRCode.toDataURL(data, {
        width: 300,
        margin: 2,
        color: { dark: '#2d3748', light: '#ffffff' },
        errorCorrectionLevel: 'M',
      });
      setQrDataUrl(url);
    } catch {
      setError('Error generating QR code');
    } finally {
      setGenerating(false);
    }
  }, [buildQRData]);

  const download = useCallback(() => {
    if (!qrDataUrl) return;
    const link = document.createElement('a');
    link.download = `qrcode-${activeTab}.png`;
    link.href = qrDataUrl;
    link.click();
  }, [qrDataUrl, activeTab]);

  // Ctrl/Cmd + Enter shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
        e.preventDefault();
        generate();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [generate]);

  return (
    <div className={styles.container}>
      {/* Tabs */}
      <div className={styles.tabs}>
        {TABS.map(({ key, label }) => (
          <button
            key={key}
            className={`${styles.tab} ${activeTab === key ? styles.tabActive : ''}`}
            onClick={() => { setActiveTab(key); setError(null); }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Forms */}
      <div className={styles.form}>
        {activeTab === 'text' && (
          <>
            <label className={styles.label}>Text or URL</label>
            <textarea
              className={styles.textarea}
              placeholder="Enter text or URL..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </>
        )}

        {activeTab === 'wifi' && (
          <>
            <label className={styles.label}>Network Name (SSID)</label>
            <input
              className={styles.input}
              placeholder="e.g. MyWiFi"
              value={wifiSSID}
              onChange={(e) => setWifiSSID(e.target.value)}
            />
            <label className={styles.label}>Security</label>
            <select
              className={styles.select}
              value={wifiSecurity}
              onChange={(e) => {
                setWifiSecurity(e.target.value);
                if (e.target.value === 'nopass') setWifiPassword('');
              }}
            >
              <option value="WPA">WPA/WPA2</option>
              <option value="WEP">WEP</option>
              <option value="nopass">None</option>
            </select>
            <label className={styles.label}>Password</label>
            <input
              className={styles.input}
              type="password"
              placeholder="Network password"
              value={wifiPassword}
              onChange={(e) => setWifiPassword(e.target.value)}
              disabled={wifiSecurity === 'nopass'}
            />
            <label className={styles.checkRow}>
              <input
                type="checkbox"
                checked={wifiHidden}
                onChange={(e) => setWifiHidden(e.target.checked)}
              />
              Hidden network
            </label>
          </>
        )}

        {activeTab === 'email' && (
          <>
            <label className={styles.label}>Email Address</label>
            <input
              className={styles.input}
              type="email"
              placeholder="recipient@example.com"
              value={emailTo}
              onChange={(e) => setEmailTo(e.target.value)}
            />
            <label className={styles.label}>Subject</label>
            <input
              className={styles.input}
              placeholder="Email subject"
              value={emailSubject}
              onChange={(e) => setEmailSubject(e.target.value)}
            />
            <label className={styles.label}>Message</label>
            <textarea
              className={styles.textarea}
              placeholder="Email body..."
              value={emailBody}
              onChange={(e) => setEmailBody(e.target.value)}
            />
          </>
        )}

        {activeTab === 'phone' && (
          <>
            <label className={styles.label}>Phone Number</label>
            <input
              className={styles.input}
              type="tel"
              placeholder="+1 234 567 8900"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <label className={styles.label}>SMS Message (optional)</label>
            <textarea
              className={styles.textarea}
              placeholder="Leave blank for call, or enter a message for SMS..."
              value={phoneMessage}
              onChange={(e) => setPhoneMessage(e.target.value)}
            />
          </>
        )}
      </div>

      {/* Generate */}
      <button
        className={styles.generateBtn}
        onClick={generate}
        disabled={generating}
      >
        {generating ? 'Generating...' : 'Generate QR Code'}
      </button>

      {error && <p className={styles.error}>{error}</p>}

      {/* Output */}
      {qrDataUrl && (
        <div className={styles.output}>
          <img
            src={qrDataUrl}
            alt="Generated QR code"
            width={300}
            height={300}
            className={styles.qrImage}
          />
          <button className={styles.downloadBtn} onClick={download}>
            Download PNG
          </button>
        </div>
      )}

      <p className={styles.hint}>Ctrl+Enter to generate</p>
    </div>
  );
}
