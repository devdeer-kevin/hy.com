/**
 * Shared design tokens, inspired by Apple visionOS: spatial glass material,
 * a light edge on top (specular highlight), depth through blur and elevation,
 * and vibrancy typography (white at 90 / 60 / 35).
 */

/**
 * Text roles. Brightness follows importance: primary (the H1) is the
 * brightest text on the page, meta the quietest. Values are re-mapped from
 * the existing palette, no new colors.
 */
export const textPrimary = 'text-ink'
export const textHeading = 'text-ink/90'
export const textBody = 'text-ink-body'
export const textMuted = 'text-ink-muted'
export const textMeta = 'text-slate-500'

/** Data voice: numbers, prices, dates, capacities. Never prose. */
export const textData = 'font-mono'

/**
 * Surface stages. Radius encodes the stage: the higher, the softer.
 * Stage 0 is the page background.
 */
export const surface1 = 'rounded-xl bg-white/[0.04] border border-white/[0.06]'
export const surface2 = 'rounded-2xl bg-white/[0.08] border border-white/10 border-t-white/15'
export const surface3 = 'rounded-3xl bg-navy-900/60 bg-linear-to-b from-white/10 to-transparent backdrop-blur-xl border border-white/15 border-t-white/30'

/** visionOS glass material for large panels and windows. */
export const glass = 'rounded-3xl bg-slate-400/10 backdrop-blur-xl border border-white/10 border-t-white/20 shadow-xl shadow-slate-950/40'

/** Glass material for smaller, interactive cards. Lifts on hover. */
export const glassCard =
    'rounded-3xl bg-slate-400/10 backdrop-blur-xl border border-white/10 border-t-white/20 shadow-xl shadow-slate-950/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-950/60 hover:border-white/20 hover:border-t-white/30'

/**
 * Primary card: the offers. Largest radius, brightest surface, clearest
 * edge. Radius encodes hierarchy, so no other surface uses this radius plus
 * this brightness.
 */
export const cardPrimary = 'rounded-3xl bg-white/10 border border-white/15 border-t-white/30'

/** Secondary card: proof and supporting content. Quieter surface, smaller radius. */
export const cardSecondary = 'rounded-2xl bg-white/5 border border-white/10'

/**
 * Accent surface: the one full visionOS glass moment on a page. Layered
 * light from the top edge, blur behind the pane, depth through brightness
 * instead of drop shadows. Use exactly once per page.
 */
export const glassAccent = 'rounded-3xl bg-slate-400/15 bg-linear-to-b from-white/10 to-transparent backdrop-blur-xl border border-white/15 border-t-white/30'

/** Photo frame: same material language, tighter. */
export const glassFrame = 'border-2 border-white/10 border-t-white/25 border-l-white/15'

/** Pill-shaped glass button, visionOS style. */
export const pillButton =
    'rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 border-t-white/20 px-4 py-1.5 text-sm font-medium text-slate-50/90 transition-colors'

/** Quiet subline under a section title, plain body type. Mono is reserved for data. */
export const sectionLabel = `text-md ${textMuted}`

/** Large section title with vibrancy. */
export const sectionTitle = `text-h2 font-bold ${textHeading}`

/**
 * Tile: the Apple product-page surface. No border, a slightly lighter fill,
 * one soft radius. Content and imagery carry the contrast.
 */
export const tile = 'rounded-3xl bg-white/[0.06]'

/** Primary button: filled in ink, like the one action on a product page. */
export const buttonPrimary = 'inline-flex items-center rounded-full bg-ink text-navy-950 px-5 py-2.5 text-sm font-semibold hover:bg-white transition-colors'
