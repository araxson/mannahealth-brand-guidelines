import * as React from "react"
import { type VoiceSpectrum } from "@/types/brand"

interface VoiceGuideProps {
  voiceSpectrum: VoiceSpectrum
}

export function VoiceGuide({ voiceSpectrum }: VoiceGuideProps) {
  const voiceAttributes = [
    {
      label: "Casual vs Professional",
      value: voiceSpectrum.casual,
      maxValue: 5,
      description: `Leans ${voiceSpectrum.casual > 3 ? 'more casual' : 'more professional'}`
    },
    {
      label: "Professional vs Friendly",
      value: voiceSpectrum.professional,
      maxValue: 5,
      description: `Leans ${voiceSpectrum.professional > 3 ? 'more professional' : 'more friendly'}`
    },
    {
      label: "Friendly vs Authoritative",
      value: voiceSpectrum.friendly,
      maxValue: 5,
      description: `Leans ${voiceSpectrum.friendly > 3 ? 'more friendly' : 'more authoritative'}`
    }
  ]

  return (
    <div className="p-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Brand Voice & Tone</h2>

        {/* Voice Spectrum */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Voice Spectrum</h3>
          <div className="space-y-8">
            {voiceAttributes.map((attr, index) => (
              <div key={index} className="bg-purple-50 rounded-lg p-6">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-purple-900">{attr.label}</h4>
                  <span className="text-sm text-purple-700">{attr.description}</span>
                </div>
                <div className="h-2 bg-purple-200 rounded-full">
                  <div 
                    className="h-full bg-purple-600 rounded-full" 
                    style={{ width: `${(attr.value / attr.maxValue) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Voice Guidelines */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Do's</h3>
            <ul className="space-y-3 text-slate-700">
              <li>• Keep communication clear and direct</li>
              <li>• Adapt tone based on context while maintaining brand voice</li>
              <li>• Use empathy and understanding in customer interactions</li>
              <li>• Be authentic and genuine in all communications</li>
            </ul>
          </div>

          <div className="bg-red-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-red-900 mb-4">Don'ts</h3>
            <ul className="space-y-3 text-red-700">
              <li>• Use jargon or overly complex language</li>
              <li>• Be inconsistent with brand voice across channels</li>
              <li>• Sound robotic or impersonal</li>
              <li>• Ignore the context of the communication</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
