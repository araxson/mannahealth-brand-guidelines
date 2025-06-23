import * as React from "react"
import { SectionHeader } from "./section-header"
import { ValueCard } from "./value-card"
import { PersonaCard } from "./persona-card"
import { type BrandPositioning, type CustomerPersona, type CoreValue, type BrandStory } from "@/types/brand"

interface BrandFoundationProps {
  originStory: string
  promise: string
  ethicalLines: string
  missionStatement: string
  visionStatement: string
  coreValues: CoreValue[]
  customerPersona: CustomerPersona
  transformation: string[]
  trustedSources: string[]
  antiAudience: string
  characterArchetype: string[]
  brandPositioning: BrandPositioning
  brandStory: BrandStory
}

export function BrandFoundation({
  originStory,
  promise,
  ethicalLines,
  missionStatement,
  visionStatement,
  coreValues,
  customerPersona,
  transformation,
  trustedSources,
  antiAudience,
  characterArchetype,
  brandPositioning,
  brandStory
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
        {/* Brand Story */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Brand Story</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-red-900 mb-3">The Challenge</h3>
              <p className="text-slate-700 text-sm leading-relaxed">{brandStory.challenge}</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Our Solution</h3>
              <p className="text-slate-700 text-sm leading-relaxed">{brandStory.solution}</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-900 mb-3">The Outcome</h3>
              <p className="text-slate-700 text-sm leading-relaxed">{brandStory.outcome}</p>
            </div>
          </div>
        </div>

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

        {/* Mission & Vision */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-purple-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">Mission Statement</h3>
              <p className="text-slate-700 leading-relaxed">{missionStatement}</p>
            </div>
            <div className="bg-indigo-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-900 mb-4">Vision Statement</h3>
              <p className="text-slate-700 leading-relaxed">{visionStatement}</p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Values & Ethics */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Ethics & Standards</h2>
          <div className="bg-slate-50 p-8 rounded-lg mb-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Ethical Foundation</h3>
            <p className="text-slate-700 leading-relaxed">{ethicalLines}</p>
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mb-6">Brand Positioning Framework</h3>
          <div className="grid md:grid-cols-1 gap-4">
            {brandPositioning.thisNotThat.map((value, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <p className="text-slate-700 font-medium">{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Target Audience */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Target Audience</h2>
          
          <div className="bg-blue-50 p-8 rounded-lg mb-8">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Primary Persona</h3>
            <p className="text-slate-700 mb-6 text-lg">{customerPersona.description}</p>
            
            <h4 className="font-semibold text-slate-900 mb-3">A Day in Their Life</h4>
            <p className="text-slate-700 mb-6">{customerPersona.dayInLife}</p>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h4 className="font-semibold text-blue-900 mb-4">Demographics</h4>
                <div className="space-y-2 text-sm">
                  <p><strong>Age:</strong> {customerPersona.demographics.ageRange}</p>
                  <p><strong>Income:</strong> {customerPersona.demographics.income}</p>
                  <p><strong>Education:</strong> {customerPersona.demographics.education}</p>
                  <p><strong>Location:</strong> {customerPersona.demographics.location}</p>
                  <p><strong>Family:</strong> {customerPersona.demographics.familyStatus}</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-900 mb-4">Psychographics</h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-xs text-slate-600 uppercase tracking-wide">Values</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {customerPersona.psychographics.values.map((value, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">{value}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-xs text-slate-600 uppercase tracking-wide">Interests</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {customerPersona.psychographics.interests.map((interest, idx) => (
                        <span key={idx} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">{interest}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-xs text-slate-600 uppercase tracking-wide">Pain Points</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {customerPersona.psychographics.painPoints.map((pain, idx) => (
                        <span key={idx} className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">{pain}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-xs text-slate-600 uppercase tracking-wide">Goals</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {customerPersona.psychographics.goals.map((goal, idx) => (
                        <span key={idx} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">{goal}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {customerPersona.additionalPersonas.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Additional Personas</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {customerPersona.additionalPersonas.map((persona, index) => (
                  <div key={index} className="bg-slate-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-slate-900 mb-2">{persona.type}</h4>
                    <p className="text-slate-700 text-sm">{persona.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
            <h3 className="text-xl font-semibold text-red-900 mb-2">Anti-Audience</h3>
            <p className="text-red-700">{antiAudience}</p>
          </div>
        </div>

        {/* Customer Transformation */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Customer Transformation</h2>
          <p className="text-slate-600 mb-6 text-lg">
            The journey our clients experience when working with Manna Health:
          </p>
          <div className="space-y-4">
            {transformation.map((story, index) => (
              <div key={index} className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-400">
                <p className="text-green-800 leading-relaxed">{story}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Character */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Brand Character & Archetype</h2>
          <p className="text-slate-600 mb-6">
            How we embody our brand personality in every interaction:
          </p>
          <div className="grid md:grid-cols-1 gap-4">
            {characterArchetype.map((archetype, index) => (
              <div key={index} className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
                <p className="text-purple-800 leading-relaxed">{archetype}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trusted Sources */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Trusted Sources & Influences</h2>
          <p className="text-slate-600 mb-6">
            The voices and experts that align with our values and approach to health and wellness:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {trustedSources.map((source, index) => (
              <div key={index} className="bg-blue-100 text-blue-900 p-4 rounded-lg border border-blue-200">
                <p className="font-medium">{source}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
