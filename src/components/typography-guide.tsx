export function TypographyGuide() {
  return (
    <div className="p-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Typography</h2>

        {/* Font Families */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Font Families</h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-slate-200 rounded-lg p-8">
              <h4 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Playfair Display
              </h4>
              <p className="text-slate-600 mb-4">Primary Typeface - Headlines & Titles</p>
              <div className="space-y-2">
                <p className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Aa Bb Cc
                </p>
                <p className="text-sm text-slate-500">Bold, Semi-bold, Medium, Regular</p>
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-8">
              <h4 className="text-2xl font-normal mb-4" style={{ fontFamily: "'Roboto', sans-serif" }}>
                Roboto
              </h4>
              <p className="text-slate-600 mb-4">Secondary Typeface - Body Text</p>
              <div className="space-y-2">
                <p className="text-3xl" style={{ fontFamily: "'Roboto', sans-serif" }}>
                  Aa Bb Cc
                </p>
                <p className="text-sm text-slate-500">Regular, Medium</p>
              </div>
            </div>
          </div>
        </div>

        {/* Typography Hierarchy */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Typography Hierarchy</h3>

          <div className="space-y-8 bg-slate-50 rounded-lg p-8">
            <div>
              <h1 className="text-5xl font-bold text-slate-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Main Headline</h1>
              <p className="text-sm text-slate-500">Playfair Display Bold, 48px / 3rem</p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-slate-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Section Headline</h2>
              <p className="text-sm text-slate-500">Playfair Display Semi-bold, 32px / 2rem</p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-slate-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Subsection Title</h3>
              <p className="text-sm text-slate-500">Playfair Display Medium, 20px / 1.25rem</p>
            </div>

            <div>
              <p className="text-base text-slate-700 mb-2" style={{ fontFamily: "'Roboto', sans-serif" }}>
                Body text should be readable and comfortable for extended reading. This is the standard paragraph text
                used throughout your materials.
              </p>
              <p className="text-sm text-slate-500">Roboto Regular, 16px / 1rem</p>
            </div>

            <div>
              <p className="text-sm text-slate-600 mb-2" style={{ fontFamily: "'Roboto', sans-serif" }}>
                Small text for captions, footnotes, and secondary information.
              </p>
              <p className="text-sm text-slate-500">Roboto Regular, 14px / 0.875rem</p>
            </div>
          </div>
        </div>

        {/* Usage Guidelines */}
        <div className="bg-white border border-slate-200 rounded-lg p-8">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Typography Guidelines</h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-slate-700 mb-3">Line Height & Spacing</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Headlines: 1.2x line height</li>
                <li>• Body text: 1.6x line height</li>
                <li>• Paragraph spacing: 1.5rem</li>
                <li>• Letter spacing: Default (0)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-700 mb-3">Web Fallbacks</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Primary: Inter, Arial, sans-serif</li>
                <li>• Secondary: system-ui, Arial, sans-serif</li>
                <li>• Always include web-safe fallbacks</li>
                <li>• Test across different devices</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
