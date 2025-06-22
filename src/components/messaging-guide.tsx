import * as React from "react"

interface MessagingGuideProps {
  brandLexicon: string[]
}

export function MessagingGuide({ brandLexicon }: MessagingGuideProps) {
  return (
    <div className="p-12 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Key Messaging</h2>

        {/* Brand Lexicon */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Brand Lexicon</h3>
          <div className="bg-white rounded-lg p-8">
            <p className="text-sm text-slate-600 mb-4">
              These key words and phrases define our brand's language and should be used consistently across all communications:
            </p>
            <div className="flex flex-wrap gap-3">
              {brandLexicon.map((word, index) => (
                <div key={index} className="bg-purple-50 text-purple-800 px-4 py-2 rounded-full font-medium">
                  {word}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Message Hierarchy */}
        <div className="bg-white rounded-lg p-8">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Message Hierarchy</h3>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-slate-700 mb-2">Primary Message</h4>
              <p className="text-slate-600">Providing effective, proven and simple solutions for holistic health and beauty.</p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-700 mb-2">Supporting Messages</h4>
              <ul className="space-y-1 text-slate-600">
                <li>• Complete hair restoration that changes lives</li>
                <li>• Glowing skin and relaxed state of mind from our facials</li>
                <li>• Holistic health and aesthetic solutions</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-700 mb-2">Differentiators</h4>
              <ul className="space-y-1 text-slate-600">
                <li>• Genuine care for our clients' wellbeing</li>
                <li>• Focus on root-cause solutions</li>
                <li>• Balance of natural and modern approaches</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
