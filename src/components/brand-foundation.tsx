import * as React from "react"
import { SectionHeader } from "./section-header"
import { ValueCard } from "./value-card"
import { PersonaCard } from "./persona-card"
import { type BrandPositioning, type CustomerPersona } from "@/types/brand"

interface BrandFoundationProps {
  originStory: string
  promise: string
  ethicalLines: string
  customerPersona: CustomerPersona
  transformation: string[]
  trustedSources: string[]
  antiAudience: string
  characterArchetype: string[]
  brandPositioning: BrandPositioning
}

export function BrandFoundation({
  originStory,
  promise,
  ethicalLines,
  customerPersona,
  transformation,
  trustedSources,
  antiAudience,
  characterArchetype,
  brandPositioning
}: BrandFoundationProps) {
  return (
    <div className="bg-white print:break-before-page">
      <SectionHeader
        number="01"
        title="Brand Foundation"
        subtitle="The 'Why' - Who you are and what you stand for"
        color="bg-blue-600"
      />

      <div className="p-12 space-y-16">
        {/* Origin Story & Promise */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Origin Story & Promise</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Origin Story</h3>
              <p className="text-slate-700 leading-relaxed">{originStory}</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Brand Promise</h3>
              <p className="text-slate-700 leading-relaxed">{promise}</p>
            </div>
          </div>
        </div>

        {/* Brand Values & Ethics */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Brand Values & Ethics</h2>
          <div className="bg-slate-50 p-8 rounded-lg mb-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Ethical Lines</h3>
            <p className="text-slate-700 leading-relaxed">{ethicalLines}</p>
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mb-4">Brand Positioning</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {brandPositioning.thisNotThat.map((value, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg">
                <p className="text-slate-700">{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Target Audience */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Target Audience</h2>
          
          <div className="bg-blue-50 p-8 rounded-lg mb-8">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Primary Persona</h3>
            <p className="text-slate-700 mb-4">{customerPersona.description}</p>
            <h4 className="font-semibold text-slate-900 mb-2">A Day in Their Life</h4>
            <p className="text-slate-700">{customerPersona.dayInLife}</p>
          </div>

          {customerPersona.additionalPersonas.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Additional Personas</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {customerPersona.additionalPersonas.map((persona, index) => (
                  <div key={index} className="bg-slate-50 p-6 rounded-lg">
                    <p className="text-slate-700">{persona}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 bg-red-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-red-900 mb-2">Anti-Audience</h3>
            <p className="text-red-700">{antiAudience}</p>
          </div>
        </div>

        {/* Customer Transformation */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Customer Transformation</h2>
          <div className="space-y-4">
            {transformation.map((story, index) => (
              <div key={index} className="bg-green-50 p-6 rounded-lg">
                <p className="text-green-800">{story}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Character */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Brand Character</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {characterArchetype.map((archetype, index) => (
              <div key={index} className="bg-purple-50 p-6 rounded-lg">
                <p className="text-purple-800">{archetype}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trusted Sources */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Trusted Sources</h2>
          <div className="flex flex-wrap gap-4">
            {trustedSources.map((source, index) => (
              <div key={index} className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full font-medium">
                {source}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
