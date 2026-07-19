import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const alt = 'Kevin Heyland, Partner & Head of Operations at DEVDEER'
export const size = {
    width: 1200,
    height: 630,
}
export const contentType = 'image/png'

/**
 * Renders the Open Graph image: a floating glass card on a soft ambient gradient.
 */
export default async function Image() {
    const fontDir = join(process.cwd(), 'node_modules', 'geist', 'dist', 'fonts')
    const [geistBold, geistRegular, geistMonoRegular] = await Promise.all([
        readFile(join(fontDir, 'geist-sans', 'Geist-Bold.ttf')),
        readFile(join(fontDir, 'geist-sans', 'Geist-Regular.ttf')),
        readFile(join(fontDir, 'geist-mono', 'GeistMono-Regular.ttf')),
    ])

    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #020617 0%, #0f172a 55%, #1e1b4b 100%)',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: -200,
                        right: -100,
                        width: 600,
                        height: 600,
                        borderRadius: 9999,
                        background: 'radial-gradient(closest-side, rgba(99, 102, 241, 0.25), transparent)',
                    }}
                />
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 18,
                        padding: '64px 80px',
                        borderRadius: 48,
                        background: 'rgba(148, 163, 184, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        borderTop: '1px solid rgba(255, 255, 255, 0.25)',
                        boxShadow: '0 40px 80px rgba(2, 6, 23, 0.6)',
                    }}
                >
                    <div style={{ fontFamily: 'Geist', fontSize: 92, fontWeight: 700, color: 'rgba(248, 250, 252, 0.92)', letterSpacing: -3 }}>Kevin Heyland</div>
                    <div style={{ fontFamily: 'GeistRegular', fontSize: 32, color: '#cbd5e1', maxWidth: 900 }}>
                        Partner &amp; Head of Operations at DEVDEER. Cloud architectures by day, free tools for Magdeburg after hours.
                    </div>
                    <div style={{ fontFamily: 'GeistMono', fontSize: 22, color: 'rgba(148, 163, 184, 0.7)', marginTop: 12 }}>kevinheyland.com</div>
                </div>
            </div>
        ),
        {
            ...size,
            fonts: [
                {
                    name: 'Geist',
                    data: geistBold,
                    style: 'normal',
                    weight: 700,
                },
                {
                    name: 'GeistRegular',
                    data: geistRegular,
                    style: 'normal',
                    weight: 400,
                },
                {
                    name: 'GeistMono',
                    data: geistMonoRegular,
                    style: 'normal',
                    weight: 400,
                },
            ],
        }
    )
}
