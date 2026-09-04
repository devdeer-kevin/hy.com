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
export const textPrimary = 'text-slate-50'
export const textHeading = 'text-slate-50/90'
export const textBody = 'text-slate-300'
export const textMuted = 'text-slate-400'
export const textMeta = 'text-slate-500'

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

/** Small mono label above a section title. */
export const sectionLabel = `font-mono text-sm ${textMuted}`

/** Large section title with vibrancy. */
export const sectionTitle = `text-5xl pb-2 font-bold ${textHeading}`
