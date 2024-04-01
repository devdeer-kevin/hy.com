import { ArrowLeftIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'
import Link from 'next/link'
import React from 'react' // Add missing import for React

export const metadata: Metadata = {
    title: 'Spatial Web Redesign',
    description: 'From Skeuomorphism to Spatial Computing: The Evolution of Web Design in the Age of AR and VR',
    robots: 'index, follow',
}

export default function BlogLandingPage(): React.ReactElement {
    return (
        <div className="flex flex-col justify-center items-center py-8 lg:py-8 px-4 sm:px-8 max-w-7xl lg:gap-16 gap-12">
            <div className="flex flex-col bg-gray-950 bg-opacity-30 backdrop-blur-lg lg:p-16 py-16 px-8 rounded-2xl border-2 border-t-gray-200/30 border-l-gray-200/30 border-r-gray-300/20 border-b-gray-300/20 shadow-2xl">
                <div className="absolute left-6 top-6">
                    <Link href="/blog">
                        <ArrowLeftIcon className="h-6 w-6 text-slate-50 hover:opacity-80 transition" />
                    </Link>
                </div>
                <div className="flex flex-col max-h-[500px] overflow-y-auto px-2">
                    <div>
                        <h1 className="text-4xl pb-2 font-bold text-slate-50">Spatial Web Redesign</h1>
                        <h3 className="text-2xl pb-2 font-normal text-slate-50">From Skeuomorphism to Spatial Computing: The Evolution of Web Design in the Age of AR and VR</h3>
                    </div>
                    <div className="text-md leading-7 font-sans text-slate-50 font-normal">
                        <p className="text-slate-50">
                            The journey of web design has seen a fascinating evolution, from the early days of skeuomorphic design, where digital elements mimicked their real-world
                            counterparts, to the clean lines of flat design. Now, with the advent of Apple&apos;s Vision OS, we&apos;re on the cusp of another revolutionary shift
                            towards immersive, spatial computing. This new paradigm combines the best aspects of skeuomorphic design and flat design, taking web experiences to a
                            whole new level of interactivity and immersion.
                        </p>
                        <p className="text-slate-50">
                            Skeuomorphic design helped users transition into the digital age by making new interfaces feel familiar, using textures, shadows, and gradients to
                            emulate the physical world. However, as digital literacy grew, the need for such realistic cues diminished, giving way to flat design&apos;s simplicity
                            and efficiency. This minimalist approach favored clarity and usability but often at the expense of depth and realism. Vision OS heralds a new era,
                            blending the intuitive aspects of skeuomorphic design with the simplicity of flat design, but in a completely new dimension. By leveraging augmented
                            reality (AR) and virtual reality (VR), designers are encouraged to think beyond two dimensions. This integration allows for interfaces that are not just
                            visually engaging but also interact with the user&apos;s environment, offering experiences that are both immersive and intuitive.
                        </p>
                        <p className="text-slate-50">
                            As AR and VR technologies become more accessible, primarily through the adoption of headsets, these design principles are expected to deepen. The fusion
                            of digital content with the physical world through spatial computing promises to make web experiences not merely seen but felt, transforming user
                            engagement on a fundamental level. This evolution also challenges web designers to reconsider user interaction, pushing the boundaries of what&apos;s
                            possible on the web. By designing for a world where digital experiences are seamlessly integrated with the physical, we&apos;re moving towards a future
                            where web design is not just about how things look but how they exist within our lived experiences.
                        </p>
                        <p className="text-slate-50">
                            In summary, the shift towards spatial computing and immersive technologies like AR and VR, as facilitated by platforms like Vision OS, represents the
                            next frontier in web design. This move not only revives the best aspects of skeuomorphic design by making digital experiences feel more tangible and
                            intuitive but also maintains the clarity and accessibility that flat design brought to the digital landscape.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
