/**
 * Shared design tokens, inspired by Apple visionOS: spatial glass material,
 * a light edge on top (specular highlight), depth through blur and elevation,
 * and vibrancy typography (white at 90 / 60 / 35).
 */

/**
 * Text roles. Brightness follows importance: primary (the H1) is the
 * brightest text on the page. Meta shares the muted color and steps back
 * through size alone: slate-500 fell below 4.5:1 on the dark sky at 12px.
 * Values are re-mapped from the existing palette, no new colors.
 */
export const textPrimary = 'text-ink'
export const textHeading = 'text-ink/90'
export const textBody = 'text-ink-body'
export const textMuted = 'text-ink-muted'
export const textMeta = 'text-ink-muted'

/** Data voice: numbers, prices, dates, capacities. Never prose. */
export const textData = 'font-mono'

/**
 * Surface stages. Radius encodes the stage: the higher, the softer.
 * Stage 0 is the page background.
 */
export const surface1 = 'rounded-xl bg-white/[0.04] border border-white/[0.06]'
export const surface2 = 'rounded-2xl bg-white/[0.08] border border-white/10 border-t-white/15'
export const surface3 = 'rounded-3xl bg-navy-900/60 bg-linear-to-b from-white/10 to-transparent backdrop-blur-xl border border-white/15 border-t-white/30'

/** visionOS glass material for large panels, used on the legal pages and the dock. */
export const glass = 'rounded-3xl bg-slate-400/10 backdrop-blur-xl border border-white/10 border-t-white/20 shadow-xl shadow-slate-950/40'

/**
 * The floating toolbar: glass like the dock, but with a dark fill, because it
 * stays on top while scrolling and hovers over bright photos where a light
 * glass would swallow the white links. The blur sits on a pseudo-element,
 * not on the pill itself: a backdrop filter would make the pill the
 * containing block of the mobile menu, which is fixed to the viewport.
 */
export const toolbar =
    'relative isolate rounded-full bg-navy-950/60 border border-white/10 border-t-white/20 shadow-xl shadow-slate-950/40 before:absolute before:inset-0 before:-z-10 before:rounded-full before:backdrop-blur-xl'

/** Pill-shaped glass button, visionOS style. */
export const pillButton =
    'rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 border-t-white/20 px-4 py-1.5 text-sm font-medium text-slate-50/90 transition-colors'

/**
 * Tile: the Apple product-page surface. No border, a slightly lighter fill,
 * one soft radius. Content and imagery carry the contrast.
 */
export const tile = 'rounded-3xl bg-navy-900/75 sheen'

/** Primary button: filled in ink, like the one action on a product page. */
export const buttonPrimary = 'inline-flex items-center rounded-full bg-ink text-navy-950 px-5 py-2.5 text-sm font-semibold hover:bg-white transition-colors'
