export function StyleGuide() {
  const grammarRules = [
    { rule: "Oxford Comma", example: "health, beauty, and wellness", usage: "Always use for clarity" },
    { rule: "Numbers", example: "10 years of experience (not ten years)", usage: "Use numerals for 10 and above" },
    { rule: "Headlines", example: "Transform Your Health Journey Today", usage: "Title case for all headlines" },
    { rule: "Email", example: "email (not e-mail)", usage: "Single word, lowercase" },
    { rule: "Website", example: "website (not web site)", usage: "Single word, lowercase" },
    { rule: "Contractions", example: "we're here to help, you'll love the results", usage: "Use to create warmth and approachability" },
    { rule: "Hyphens", example: "evidence-based care, well-being", usage: "Use for compound adjectives" },
    { rule: "Quotation Marks", example: "Our clients say: \"Life-changing results.\"", usage: "Use for direct quotes only" },
    { rule: "Ampersands", example: "Health & Beauty (in logos only)", usage: "Spell out 'and' in body text" },
    { rule: "Percentages", example: "95% of clients see improvement", usage: "Use % symbol with statistics" },
  ]

  const contentTypes = [
    {
      type: "Website Copy",
      tone: "Professional yet approachable",
      style: "Informative, benefit-focused, action-oriented",
      example: "Discover the personalized health solutions that help you feel confident and vibrant. Our evidence-based treatments address your unique needs while honoring your body's natural healing capacity.",
      guidelines: [
        "Lead with benefits, not features",
        "Use second person (you, your)",
        "Include clear calls-to-action",
        "Address pain points empathetically"
      ]
    },
    {
      type: "Social Media",
      tone: "Friendly and engaging",
      style: "Conversational, inspiring, community-focused",
      example: "✨ Self-care Sunday reminder: You deserve to feel amazing in your own skin. What's one thing you're doing today to nourish your body and soul? #MannaHealth #SelfCare #Wellness",
      guidelines: [
        "Use emojis sparingly and meaningfully",
        "Ask questions to encourage engagement",
        "Share behind-the-scenes moments",
        "Celebrate client successes (with permission)"
      ]
    },
    {
      type: "Educational Content",
      tone: "Expert yet accessible",
      style: "Clear, informative, science-based",
      example: "Hair loss affects 80% of men and 50% of women by age 50. Understanding the root causes—from hormonal changes to nutritional deficiencies—is the first step toward effective treatment.",
      guidelines: [
        "Cite credible sources when making claims",
        "Break complex topics into digestible sections",
        "Use analogies to explain medical concepts",
        "Include actionable takeaways"
      ]
    },
    {
      type: "Client Communications",
      tone: "Caring and professional",
      style: "Personal, supportive, clear instructions",
      example: "Thank you for trusting us with your wellness journey. Here's what to expect after your treatment and how to care for yourself during the healing process.",
      guidelines: [
        "Use client's preferred name",
        "Provide clear, step-by-step instructions",
        "Anticipate and address concerns",
        "End with encouragement and support"
      ]
    }
  ]

  const wordChoices = [
    {
      category: "Preferred Terms",
      words: [
        { word: "client", reason: "More personal than 'patient' or 'customer'" },
        { word: "wellness journey", reason: "Emphasizes ongoing process" },
        { word: "transformation", reason: "Implies positive, meaningful change" },
        { word: "evidence-based", reason: "Shows scientific foundation" },
        { word: "holistic", reason: "Reflects whole-person approach" },
        { word: "personalized", reason: "Emphasizes individual care" },
        { word: "natural healing capacity", reason: "Honors body's innate wisdom" },
        { word: "vitality", reason: "Positive, energetic concept" }
      ]
    },
    {
      category: "Terms to Avoid",
      words: [
        { word: "cheap/affordable", reason: "Use 'accessible' or 'competitive pricing'" },
        { word: "quick fix", reason: "Use 'effective solution' or 'proven approach'" },
        { word: "miracle/magic", reason: "Use 'remarkable' or 'effective'" },
        { word: "anti-aging", reason: "Use 'age-gracefully' or 'timeless beauty'" },
        { word: "flaws/defects", reason: "Use 'concerns' or 'areas of focus'" },
        { word: "problems", reason: "Use 'challenges' or 'concerns'" },
        { word: "fix/repair", reason: "Use 'restore' or 'enhance'" },
        { word: "guarantee", reason: "Use 'confident' or 'committed to results'" }
      ]
    }
  ]

  const writingFormulas = [
    {
      name: "PAS Formula",
      description: "Problem, Agitation, Solution",
      usage: "For addressing client pain points",
      example: "Struggling with hair loss that affects your confidence? (Problem) Watching it get worse each day while feeling helpless? (Agitation) Our comprehensive hair restoration approach addresses root causes for lasting results. (Solution)"
    },
    {
      name: "BAB Formula",
      description: "Before, After, Bridge",
      usage: "For transformation stories",
      example: "Before: Tired, stressed skin reflecting life's demands. (Before) After: Luminous, healthy glow that radiates from within. (After) The bridge? Our holistic facial treatments that address both skin health and stress relief. (Bridge)"
    },
    {
      name: "AIDA Formula",
      description: "Attention, Interest, Desire, Action",
      usage: "For marketing copy",
      example: "Transform Your Health Journey (Attention) with evidence-based treatments that honor your body's natural healing capacity (Interest). Experience the confidence that comes with optimal wellness (Desire). Schedule your consultation today. (Action)"
    }
  ]

  return (
    <div className="p-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Writing Style & Grammar Guide</h2>

        {/* Brand Writing Philosophy */}
        <div className="mb-12 bg-blue-50 rounded-lg p-8">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">Writing Philosophy</h3>
          <p className="text-slate-700 leading-relaxed">
            Our writing reflects our commitment to authentic care and professional expertise. Every word should 
            build trust, provide value, and honor the dignity of those seeking wellness. We write with empathy 
            for the challenges our clients face while maintaining confidence in our ability to help them achieve 
            their goals. Our tone is professional yet warm, evidence-based yet accessible, hopeful yet realistic.
          </p>
        </div>

        {/* Writing Style Principles */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Core Writing Principles</h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-purple-50 rounded-lg p-8">
              <h4 className="font-semibold text-purple-900 mb-4">Essential Characteristics</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <p className="font-medium text-purple-800">Clear & Concise</p>
                    <p className="text-sm text-purple-700">Respect your reader's time. Get to the point without unnecessary words.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <p className="font-medium text-purple-800">Active Voice</p>
                    <p className="text-sm text-purple-700">"We help you achieve..." not "You will be helped by us..."</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <p className="font-medium text-purple-800">Empathetic</p>
                    <p className="text-sm text-purple-700">Acknowledge challenges while focusing on hope and solutions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <p className="font-medium text-purple-800">Evidence-Based</p>
                    <p className="text-sm text-purple-700">Support claims with research, testimonials, or professional expertise.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-8">
              <h4 className="font-semibold text-slate-900 mb-4">Voice Examples</h4>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-emerald-700 mb-1">✓ Authentic Care</p>
                  <p className="text-sm text-slate-600 italic">
                    "We understand how hair loss affects your confidence. Let's work together to restore not just your hair, but your sense of self."
                  </p>
                </div>
                <div>
                  <p className="font-medium text-emerald-700 mb-1">✓ Professional Expertise</p>
                  <p className="text-sm text-slate-600 italic">
                    "Our evidence-based approach combines the latest research with time-tested natural healing principles."
                  </p>
                </div>
                <div>
                  <p className="font-medium text-red-700 mb-1">✗ Avoid Generic Claims</p>
                  <p className="text-sm text-slate-600 italic">
                    "We're the best choice for all your health and beauty needs."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Type Guidelines */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Content Type Guidelines</h3>
          <div className="space-y-6">
            {contentTypes.map((content, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-lg p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">{content.type}</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <p className="font-medium text-slate-700">Tone:</p>
                        <p className="text-slate-600">{content.tone}</p>
                      </div>
                      <div>
                        <p className="font-medium text-slate-700">Style:</p>
                        <p className="text-slate-600">{content.style}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium text-slate-800 mb-2">Example:</h5>
                    <p className="text-sm text-slate-600 italic bg-slate-50 p-3 rounded">{content.example}</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-slate-800 mb-2">Guidelines:</h5>
                    <ul className="space-y-1 text-sm text-slate-600">
                      {content.guidelines.map((guideline, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="w-1 h-1 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{guideline}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Word Choice Guidelines */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Word Choice Guidelines</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {wordChoices.map((category, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-lg p-6">
                <h4 className={`font-semibold mb-4 ${
                  category.category === "Preferred Terms" ? "text-green-800" : "text-red-800"
                }`}>
                  {category.category}
                </h4>
                <div className="space-y-3">
                  {category.words.map((item, idx) => (
                    <div key={idx} className={`p-3 rounded ${
                      category.category === "Preferred Terms" ? "bg-green-50" : "bg-red-50"
                    }`}>
                      <p className={`font-medium text-sm ${
                        category.category === "Preferred Terms" ? "text-green-800" : "text-red-800"
                      }`}>
                        {item.word}
                      </p>
                      <p className={`text-xs ${
                        category.category === "Preferred Terms" ? "text-green-700" : "text-red-700"
                      }`}>
                        {item.reason}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Writing Formulas */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Proven Writing Formulas</h3>
          <div className="space-y-6">
            {writingFormulas.map((formula, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-lg p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">{formula.name}</h4>
                    <p className="text-sm text-slate-600 mb-3">{formula.description}</p>
                    <div className="bg-blue-50 p-3 rounded">
                      <p className="text-blue-800 text-xs font-medium">Best For:</p>
                      <p className="text-blue-700 text-xs">{formula.usage}</p>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h5 className="font-medium text-slate-800 mb-2">Example Application:</h5>
                    <p className="text-sm text-slate-600 bg-slate-50 p-4 rounded leading-relaxed">
                      {formula.example}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grammar Rules */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Grammar & Formatting Standards</h3>

          <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
            <div className="grid grid-cols-3 bg-slate-50 p-4 font-semibold text-slate-700 text-sm">
              <div>Rule</div>
              <div>Example</div>
              <div>Usage Guidelines</div>
            </div>

            {grammarRules.map((item, index) => (
              <div key={index} className="grid grid-cols-3 p-4 border-t border-slate-100 text-sm hover:bg-slate-50">
                <div className="font-medium text-slate-900">{item.rule}</div>
                <div className="text-slate-600 font-mono text-xs bg-slate-50 px-2 py-1 rounded">{item.example}</div>
                <div className="text-slate-600">{item.usage}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Review Process */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Content Review Process</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 mb-4">1. Content Creation</h4>
              <ul className="space-y-2 text-sm text-blue-800">
                <li>• Research target audience needs</li>
                <li>• Define primary message and goal</li>
                <li>• Choose appropriate tone and style</li>
                <li>• Write first draft following brand voice</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-semibold text-green-900 mb-4">2. Review & Edit</h4>
              <ul className="space-y-2 text-sm text-green-800">
                <li>• Check alignment with brand values</li>
                <li>• Verify grammar and style rules</li>
                <li>• Ensure empathetic, helpful tone</li>
                <li>• Confirm factual accuracy</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6">
              <h4 className="font-semibold text-purple-900 mb-4">3. Final Check</h4>
              <ul className="space-y-2 text-sm text-purple-800">
                <li>• Test call-to-action clarity</li>
                <li>• Verify client privacy compliance</li>
                <li>• Check for accessibility standards</li>
                <li>• Approve for publication</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Content Quality Checklist */}
        <div className="bg-slate-50 rounded-lg p-8">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Content Quality Checklist</h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-slate-700 mb-4">Brand Alignment</h4>
              <div className="space-y-3 text-sm">
                <label className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1 rounded" />
                  <span className="text-slate-600">Voice reflects authentic care and professional expertise</span>
                </label>
                <label className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1 rounded" />
                  <span className="text-slate-600">Tone appropriate for audience and context</span>
                </label>
                <label className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1 rounded" />
                  <span className="text-slate-600">Key brand messages and values included</span>
                </label>
                <label className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1 rounded" />
                  <span className="text-slate-600">Preferred terminology used consistently</span>
                </label>
                <label className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1 rounded" />
                  <span className="text-slate-600">Content supports overall brand positioning</span>
                </label>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-slate-700 mb-4">Quality Standards</h4>
              <div className="space-y-3 text-sm">
                <label className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1 rounded" />
                  <span className="text-slate-600">Grammar and punctuation rules followed</span>
                </label>
                <label className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1 rounded" />
                  <span className="text-slate-600">Clear, concise, and scannable format</span>
                </label>
                <label className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1 rounded" />
                  <span className="text-slate-600">Actionable and valuable for the reader</span>
                </label>
                <label className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1 rounded" />
                  <span className="text-slate-600">Claims supported by evidence or expertise</span>
                </label>
                <label className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1 rounded" />
                  <span className="text-slate-600">Call-to-action is clear and compelling</span>
                </label>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
            <p className="text-yellow-800 text-sm">
              <strong>Remember:</strong> Every piece of content represents our commitment to authentic care and professional excellence. 
              When in doubt, ask: "Does this help our clients feel understood, supported, and confident in their wellness journey?"
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
