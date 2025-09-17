// src/theme.js
const sharedTokens = {
    space1: '4px',
    space2: '8px',
    space3: '12px',
    space4: '16px',
    radius: '12px',
    transition: 'transform 180ms cubic-bezier(.2,.9,.3,1), opacity 180ms ease, box-shadow 180ms ease',
};

export const lightTheme = {
    ...sharedTokens,
    bg: '#ffffff',
    card: '#ffffff',
    text: '#0f1720',
    muted: '#6b7280',
    primary: '#2563eb',
    shadow: '0 4px 14px rgba(15,23,42,0.06)',
    shadowElev: '0 12px 24px rgba(15,23,42,0.12)',
};

export const darkTheme = {
    ...sharedTokens,
    bg: '#0b0f14',
    card: '#0f1720',
    text: '#e6eef8',
    muted: '#9aa4b2',
    primary: '#2563eb',
    shadow: '0 6px 18px rgba(0,0,0,0.6)',
    shadowElev: '0 18px 36px rgba(0,0,0,0.7)',
};