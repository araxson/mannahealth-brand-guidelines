export function StyleGuide() {
  const grammarRules = [
    { rule: "Oxford Comma", example: "red, white, and blue", usage: "Always use" },
    { rule: "Numbers", example: "10 customers (not ten customers)", usage: "Use numerals for 10+" },
    { rule: "Headlines", example: "This Is Title Case", usage: "Title case for headlines" },
    { rule: "Email", example: "email (not e-mail)", usage: "Single word, lowercase" },
    { rule: "Website", example: "website (not web site)", usage: "Single word, lowercase" },
    { rule: "Contractions", example: "we're, you'll, don't", usage: "Use in casual contexts" },
  ]

  return (
    <div className="p-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Grammar & Style Guide</h2>

        {/* Writing Style */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Writing Style Principles</h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-purple-50 rounded-lg p-8">
              <h4 className="font-semibold text-purple-900 mb-4">Our Writing Style</h4>
              <ul className="space-y-3 text-purple-800">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    <strong>Clear & Concise:</strong> Get to the point quickly
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    <strong>Active Voice:</strong> "We help you" not "You are helped by us"
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    <strong>Conversational:</strong> Write like you're talking to a friend
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    <strong>Positive:</strong> Focus on benefits and solutions
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-lg p-8">
              <h4 className="font-semibold text-slate-900 mb-4">Sentence Structure</h4>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-emerald-700 mb-1">✓ Good Example</p>
                  <p className="text-sm text-slate-600 italic">
                    "We'll help you create a brand that connects with your customers."
                  </p>
                </div>
                <div>
                  <p className="font-medium text-red-700 mb-1">✗ Avoid</p>
                  <p className="text-sm text-slate-600 italic">
                    "A brand that connects with customers will be created by us for you."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grammar Rules */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Grammar & Formatting Rules</h3>

          <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
            <div className="grid grid-cols-3 bg-slate-50 p-4 font-semibold text-slate-700 text-sm">
              <div>Rule</div>
              <div>Example</div>
              <div>Usage</div>
            </div>

            {grammarRules.map((item, index) => (
              <div key={index} className="grid grid-cols-3 p-4 border-t border-slate-100 text-sm">
                <div className="font-medium text-slate-900">{item.rule}</div>
                <div className="text-slate-600 font-mono text-xs bg-slate-50 px-2 py-1 rounded">{item.example}</div>
                <div className="text-slate-600">{item.usage}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Checklist */}
        <div className="bg-slate-50 rounded-lg p-8">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Content Review Checklist</h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-slate-700 mb-3">Before Publishing</h4>
              <div className="space-y-2 text-sm text-slate-600">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span>Voice matches brand personality</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span>Tone appropriate for context</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span>Grammar rules followed</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span>Key messages included</span>
                </label>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-slate-700 mb-3">Quality Check</h4>
              <div className="space-y-2 text-sm text-slate-600">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span>Clear and concise</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span>Spelling and punctuation correct</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span>Avoids jargon and buzzwords</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span>Calls-to-action are clear</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
