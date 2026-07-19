/**
 * Shared design tokens, inspired by Apple visionOS: spatial glass material,
 * a light edge on top (specular highlight), depth through blur and elevation,
 * and vibrancy typography (white at 90 / 60 / 35).
 */

/** visionOS glass material for large panels and windows. */
export const glass = 'rounded-3xl bg-slate-400/10 backdrop-blur-xl border border-white/10 border-t-white/20 shadow-xl shadow-slate-950/40'

/** Glass material for smaller, interactive cards. Lifts on hover. */
export const glassCard =
    'rounded-3xl bg-slate-400/10 backdrop-blur-xl border border-white/10 border-t-white/20 shadow-xl shadow-slate-950/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-950/60 hover:border-white/20 hover:border-t-white/30'

/** Photo frame: same material language, tighter. */
export const glassFrame = 'border-2 border-white/10 border-t-white/25 border-l-white/15'

/** Pill-shaped glass button, visionOS style. */
export const pillButton =
    'rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 border-t-white/20 px-4 py-1.5 text-sm font-medium text-slate-50/90 transition-colors'

/** Small mono label above a section title. */
export const sectionLabel = 'font-mono text-sm text-slate-400'

/** Large section title with vibrancy. */
export const sectionTitle = 'text-5xl pb-2 font-bold text-slate-50/70'
