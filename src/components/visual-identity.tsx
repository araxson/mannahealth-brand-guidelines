import * as React from "react"
import { SectionHeader } from "./section-header"
import { LogoUsage } from "./logo-usage"
import { ColorPalette } from "./color-palette"
import { TypographyGuide } from "./typography-guide"
import { ImageryGuide } from "./imagery-guide"

interface VisualIdentityProps {
  brandInspiration: string[]
}

export function VisualIdentity({ brandInspiration }: VisualIdentityProps) {
  return (
    <div className="bg-white print:break-before-page">
      <SectionHeader
        number="02"
        title="Visual Identity"
        subtitle="The 'Look' - How your brand appears visually"
        color="bg-emerald-600"
      />

      <div className="space-y-16">
        <div className="p-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Brand Inspiration</h2>
            <div className="bg-emerald-50 rounded-lg p-8">
              <p className="text-sm text-slate-600 mb-4">
                These brands inspire our visual direction and aesthetic choices:
              </p>
              <div className="flex flex-wrap gap-3">
                {brandInspiration.map((brand, index) => (
                  <div key={index} className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full font-medium">
                    {brand}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <LogoUsage />
        <ColorPalette />
        <TypographyGuide />
        <ImageryGuide />
      </div>
    </div>
  )
}
