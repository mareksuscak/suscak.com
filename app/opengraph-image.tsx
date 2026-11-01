import { ImageResponse } from 'next/og';

export const alt = 'Marek Suscak — Software Engineering';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 96px',
        background: '#ffffff',
        color: 'rgba(0, 0, 0, 0.8)',
      }}
    >
      <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -2 }}>Oh hi! 👋</div>
      <div style={{ marginTop: 24, fontSize: 56, fontWeight: 700 }}>Marek Suscak</div>
      <div style={{ marginTop: 16, fontSize: 36, color: 'rgba(0, 0, 0, 0.55)' }}>
        Software engineering, experiments and computer systems
      </div>
    </div>,
    size,
  );
}
