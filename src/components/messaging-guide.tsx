import * as React from "react"

interface MessagingGuideProps {
  brandLexicon: string[]
}

export function MessagingGuide({ brandLexicon }: MessagingGuideProps) {
  const messagingFrameworks = [
    {
      context: "First-time Website Visitors",
      primaryMessage: "Discover holistic health and beauty solutions that honor your body's natural healing capacity while embracing modern science.",
      supportingPoints: [
        "Evidence-based treatments with heart",
        "Personalized approach to your wellness journey",
        "Expertise you can trust, care you can feel"
      ]
    },
    {
      context: "Hair Restoration Clients",
      primaryMessage: "Restore not just your hair, but your confidence and vitality with proven treatments that address root causes.",
      supportingPoints: [
        "Complete hair restoration that changes lives",
        "Natural and medical approaches combined",
        "Personalized treatment plans for lasting results"
      ]
    },
    {
      context: "Skin Care Clients",
      primaryMessage: "Achieve luminous, healthy skin that reflects your inner vitality through our holistic facial treatments.",
      supportingPoints: [
        "Address both skin health and stress relief",
        "Glowing skin from the inside out",
        "Sustainable beauty practices for long-term results"
      ]
    },
    {
      context: "Health-Conscious Families",
      primaryMessage: "Empower your family's wellness journey with authentic guidance that respects your values and delivers real results.",
      supportingPoints: [
        "Education and support for informed decisions",
        "Solutions that fit your real life",
        "Wellness that honors body and spirit"
      ]
    }
  ]

  const valuePropositions = [
    {
      category: "Expertise & Trust",
      proposition: "Unlike corporate wellness brands focused on profits, every recommendation comes from genuine concern for your well-being.",
      proof: "Licensed professional with unwavering ethical standards"
    },
    {
      category: "Holistic Approach",
      proposition: "We address the whole person - mind, body, and spirit - not just symptoms.",
      proof: "Evidence-based treatments that honor natural healing capacity"
    },
    {
      category: "Personalized Care",
      proposition: "Your unique journey deserves unique solutions tailored to your specific needs and values.",
      proof: "Customized treatment plans and ongoing support"
    },
    {
      category: "Sustainable Results",
      proposition: "Real, lasting transformation through education, support, and proven methodologies.",
      proof: "Root-cause solutions, not quick fixes"
    }
  ]

  const communicationGuidelines = [
    {
      scenario: "When discussing treatments",
      do: "Focus on benefits and outcomes, use evidence-based language, acknowledge individual needs",
      dont: "Make unrealistic promises, use fear-based marketing, pressure for unnecessary services",
      example: "Our hair restoration approach combines proven medical treatments with nutritional support to address the root causes of hair loss."
    },
    {
      scenario: "When addressing concerns",
      do: "Listen actively, validate feelings, provide clear information, offer support",
      dont: "Dismiss worries, oversimplify complex issues, push for immediate decisions",
      example: "I understand your concerns about trying new treatments. Let's discuss the research behind this approach and how we can start with small steps."
    },
    {
      scenario: "When sharing success stories",
      do: "Focus on transformation journey, respect privacy, highlight genuine outcomes",
      dont: "Exaggerate results, breach confidentiality, use before/after photos without permission",
      example: "Many clients tell us that restoring their hair gave them back more than just their appearance - it restored their confidence and vitality."
    }
  ]

  return (
    <div className="p-12 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Key Messaging Framework</h2>

        {/* Brand Lexicon */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Brand Lexicon</h3>
          <div className="bg-white rounded-lg p-8">
            <p className="text-slate-600 mb-6">
              These key words and phrases define our brand's language and should be used consistently across all communications. Each term carries specific meaning and intention:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {brandLexicon.map((word, index) => (
                <div key={index} className="bg-purple-50 border border-purple-100 p-4 rounded-lg">
                  <p className="text-purple-800 font-medium">{word.split(' - ')[0]}</p>
                  {word.includes(' - ') && (
                    <p className="text-slate-600 text-sm mt-1">{word.split(' - ')[1]}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Context-Specific Messaging */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Context-Specific Messaging</h3>
          <div className="space-y-6">
            {messagingFrameworks.map((framework, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-slate-200">
                <div className="mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {framework.context}
                  </span>
                </div>
                <h4 className="font-semibold text-slate-900 mb-3">Primary Message</h4>
                <p className="text-slate-700 mb-4 italic">"{framework.primaryMessage}"</p>
                <h5 className="font-medium text-slate-800 mb-2">Supporting Points:</h5>
                <ul className="space-y-1">
                  {framework.supportingPoints.map((point, idx) => (
                    <li key={idx} className="text-slate-600 text-sm flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Value Propositions */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Core Value Propositions</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {valuePropositions.map((vp, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-3">{vp.category}</h4>
                <p className="text-slate-700 mb-3">{vp.proposition}</p>
                <div className="bg-green-50 border border-green-100 p-3 rounded">
                  <p className="text-green-800 text-sm font-medium">Proof Point:</p>
                  <p className="text-green-700 text-sm">{vp.proof}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Communication Guidelines */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Communication Guidelines</h3>
          <div className="space-y-6">
            {communicationGuidelines.map((guideline, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-slate-200">
                <div className="mb-4">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    {guideline.scenario}
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div className="bg-green-50 border border-green-100 p-4 rounded">
                    <h5 className="font-medium text-green-900 mb-2">✓ Do</h5>
                    <p className="text-green-800 text-sm">{guideline.do}</p>
                  </div>
                  <div className="bg-red-50 border border-red-100 p-4 rounded">
                    <h5 className="font-medium text-red-900 mb-2">✗ Don't</h5>
                    <p className="text-red-800 text-sm">{guideline.dont}</p>
                  </div>
                </div>
                <div className="bg-blue-50 border border-blue-100 p-4 rounded">
                  <h5 className="font-medium text-blue-900 mb-2">Example</h5>
                  <p className="text-blue-800 text-sm italic">"{guideline.example}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Message Hierarchy */}
        <div className="bg-white rounded-lg p-8">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Message Hierarchy</h3>

          <div className="space-y-8">
            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="font-semibold text-slate-900 mb-2">Primary Brand Promise</h4>
              <p className="text-slate-700 text-lg italic mb-2">
                "To provide effective, proven and simple solutions to help their holistic health and beauty."
              </p>
              <p className="text-slate-600 text-sm">
                This is our core commitment - what we promise every client, every time.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h4 className="font-semibold text-slate-900 mb-3">Supporting Messages</h4>
              <ul className="space-y-2">
                <li className="text-slate-700">• Complete hair restoration that changes lives, not just appearance</li>
                <li className="text-slate-700">• Glowing skin and relaxed state of mind from our holistic facial treatments</li>
                <li className="text-slate-700">• Evidence-based solutions that honor your values and deliver real results</li>
                <li className="text-slate-700">• Education and support that empowers you to make informed health decisions</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h4 className="font-semibold text-slate-900 mb-3">Key Differentiators</h4>
              <ul className="space-y-2">
                <li className="text-slate-700">• <strong>Genuine Care:</strong> "I care. I genuinely care." - Unlike profit-driven wellness brands</li>
                <li className="text-slate-700">• <strong>Holistic Integration:</strong> Combining evidence-based treatments with natural healing wisdom</li>
                <li className="text-slate-700">• <strong>Root-Cause Focus:</strong> Addressing underlying issues for lasting transformation</li>
                <li className="text-slate-700">• <strong>Values Alignment:</strong> Health solutions that respect your family-first mindset and personal beliefs</li>
              </ul>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h4 className="font-semibold text-slate-900 mb-3">Proof Points</h4>
              <ul className="space-y-2">
                <li className="text-slate-700">• Licensed professional with unwavering ethical standards</li>
                <li className="text-slate-700">• Personalized treatment plans based on individual needs and goals</li>
                <li className="text-slate-700">• Evidence-based treatments with proven track records</li>
                <li className="text-slate-700">• Ongoing education and support throughout your wellness journey</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
