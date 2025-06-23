export function TypographyGuide() {
  const typographyExamples = [
    {
      category: "Marketing Headlines",
      example: "Transform Your Health Journey with Authentic Care",
      specs: "Playfair Display Bold, 42px, Line Height 1.2",
      usage: "Website headers, promotional materials, key call-outs"
    },
    {
      category: "Section Headers",
      example: "Evidence-Based Holistic Solutions",
      specs: "Playfair Display Semi-bold, 28px, Line Height 1.3",
      usage: "Page sections, brochure headers, email subjects"
    },
    {
      category: "Body Copy",
      example: "We believe in addressing the whole person - mind, body, and spirit - recognizing that true health encompasses all aspects of well-being. Our approach combines evidence-based treatments with genuine care for your individual journey.",
      specs: "Roboto Regular, 16px, Line Height 1.6",
      usage: "Website content, brochures, informational materials"
    },
    {
      category: "Testimonials",
      example: "\"Working with Manna Health changed more than just my appearance - it restored my confidence and gave me back my vitality.\"",
      specs: "Roboto Italic, 18px, Line Height 1.5",
      usage: "Client testimonials, success stories, quotes"
    }
  ]

  const accessibilityGuidelines = [
    {
      principle: "Color Contrast",
      requirement: "WCAG AA compliance (4.5:1 ratio minimum)",
      implementation: "Dark text on light backgrounds, sufficient contrast for all text sizes"
    },
    {
      principle: "Font Size",
      requirement: "Minimum 16px for body text",
      implementation: "Never use text smaller than 14px, ensure readability across devices"
    },
    {
      principle: "Line Length",
      requirement: "45-75 characters per line optimal",
      implementation: "Use max-width containers to control line length on larger screens"
    },
    {
      principle: "White Space",
      requirement: "Adequate spacing between elements",
      implementation: "Use consistent margins and padding to improve readability"
    }
  ]

  const fontPairings = [
    {
      primary: "Playfair Display",
      secondary: "Roboto",
      vibe: "Professional & Approachable",
      usage: "Main brand communications, website, professional materials"
    },
    {
      primary: "Playfair Display",
      secondary: "Source Sans Pro",
      vibe: "Clean & Modern",
      usage: "Digital presentations, social media graphics"
    },
    {
      primary: "Playfair Display",
      secondary: "Open Sans",
      vibe: "Friendly & Readable",
      usage: "Educational materials, client handouts"
    }
  ]

  return (
    <div className="p-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Typography System</h2>

        {/* Brand Typography Philosophy */}
        <div className="mb-12 bg-blue-50 rounded-lg p-8">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">Typography Philosophy</h3>
          <p className="text-slate-700 leading-relaxed">
            Our typography reflects our brand values of professionalism, approachability, and trustworthiness. 
            We use elegant serif fonts for headlines to convey expertise and authority, paired with clean sans-serif 
            fonts for body text to ensure maximum readability and accessibility. Every typographic choice supports 
            our mission to make health information clear, accessible, and engaging.
          </p>
        </div>

        {/* Font Families */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Primary Font Families</h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-slate-200 rounded-lg p-8 bg-white">
              <h4 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Playfair Display
              </h4>
              <p className="text-slate-600 mb-4">Primary Serif - Headlines & Display Text</p>
              <div className="space-y-4">
                <div>
                  <p className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Aa Bb Cc Dd Ee
                  </p>
                  <p className="text-sm text-slate-500 mt-2">Available weights: Bold, Semi-bold, Medium, Regular</p>
                </div>
                <div className="bg-slate-50 p-4 rounded">
                  <p className="text-sm font-medium text-slate-700 mb-2">Character & Tone:</p>
                  <p className="text-sm text-slate-600">Elegant, authoritative, trustworthy, sophisticated</p>
                </div>
                <div className="bg-slate-50 p-4 rounded">
                  <p className="text-sm font-medium text-slate-700 mb-2">Best Used For:</p>
                  <p className="text-sm text-slate-600">Headlines, titles, quotes, brand names, call-to-action headers</p>
                </div>
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-8 bg-white">
              <h4 className="text-2xl font-normal mb-4" style={{ fontFamily: "'Roboto', sans-serif" }}>
                Roboto
              </h4>
              <p className="text-slate-600 mb-4">Primary Sans-Serif - Body Text & UI</p>
              <div className="space-y-4">
                <div>
                  <p className="text-3xl" style={{ fontFamily: "'Roboto', sans-serif" }}>
                    Aa Bb Cc Dd Ee
                  </p>
                  <p className="text-sm text-slate-500 mt-2">Available weights: Bold, Medium, Regular, Light</p>
                </div>
                <div className="bg-slate-50 p-4 rounded">
                  <p className="text-sm font-medium text-slate-700 mb-2">Character & Tone:</p>
                  <p className="text-sm text-slate-600">Clean, readable, modern, approachable, professional</p>
                </div>
                <div className="bg-slate-50 p-4 rounded">
                  <p className="text-sm font-medium text-slate-700 mb-2">Best Used For:</p>
                  <p className="text-sm text-slate-600">Body text, captions, navigation, buttons, forms, small text</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Typography Scale */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Typography Scale & Hierarchy</h3>

          <div className="space-y-8 bg-slate-50 rounded-lg p-8">
            <div className="border-b border-slate-200 pb-6">
              <h1 className="text-5xl font-bold text-slate-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Hero Headline
              </h1>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-500">
                <p>Font: Playfair Display Bold</p>
                <p>Size: 48px (3rem) / Line Height: 1.1</p>
                <p>Usage: Main page headers, hero sections</p>
                <p>Letter Spacing: -0.5px</p>
              </div>
            </div>

            <div className="border-b border-slate-200 pb-6">
              <h2 className="text-4xl font-semibold text-slate-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Page Headline
              </h2>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-500">
                <p>Font: Playfair Display Semi-bold</p>
                <p>Size: 36px (2.25rem) / Line Height: 1.2</p>
                <p>Usage: Page titles, major sections</p>
                <p>Letter Spacing: -0.25px</p>
              </div>
            </div>

            <div className="border-b border-slate-200 pb-6">
              <h3 className="text-2xl font-medium text-slate-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Section Headline
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-500">
                <p>Font: Playfair Display Medium</p>
                <p>Size: 24px (1.5rem) / Line Height: 1.3</p>
                <p>Usage: Content sections, card headers</p>
                <p>Letter Spacing: 0px</p>
              </div>
            </div>

            <div className="border-b border-slate-200 pb-6">
              <h4 className="text-xl font-medium text-slate-900 mb-2" style={{ fontFamily: "'Roboto', sans-serif" }}>
                Subsection Title
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-500">
                <p>Font: Roboto Medium</p>
                <p>Size: 20px (1.25rem) / Line Height: 1.4</p>
                <p>Usage: Subsections, list headers</p>
                <p>Letter Spacing: 0px</p>
              </div>
            </div>

            <div className="border-b border-slate-200 pb-6">
              <p className="text-lg text-slate-700 mb-2" style={{ fontFamily: "'Roboto', sans-serif" }}>
                Large Body Text - Used for introductory paragraphs and important content that needs emphasis while maintaining readability.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-500">
                <p>Font: Roboto Regular</p>
                <p>Size: 18px (1.125rem) / Line Height: 1.6</p>
                <p>Usage: Lead paragraphs, important text</p>
                <p>Letter Spacing: 0px</p>
              </div>
            </div>

            <div className="border-b border-slate-200 pb-6">
              <p className="text-base text-slate-700 mb-2" style={{ fontFamily: "'Roboto', sans-serif" }}>
                Standard Body Text - This is the workhorse of our typography system, used for most content including articles, descriptions, and general information. It should be comfortable for extended reading while maintaining the professional appearance that reflects our brand values.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-500">
                <p>Font: Roboto Regular</p>
                <p>Size: 16px (1rem) / Line Height: 1.6</p>
                <p>Usage: Main body text, paragraphs</p>
                <p>Letter Spacing: 0px</p>
              </div>
            </div>

            <div>
              <p className="text-sm text-slate-600 mb-2" style={{ fontFamily: "'Roboto', sans-serif" }}>
                Small Text - Used for captions, disclaimers, footnotes, and secondary information that supports the main content.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-500">
                <p>Font: Roboto Regular</p>
                <p>Size: 14px (0.875rem) / Line Height: 1.5</p>
                <p>Usage: Captions, small text, labels</p>
                <p>Letter Spacing: 0px</p>
              </div>
            </div>
          </div>
        </div>

        {/* Typography in Context */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Typography in Context</h3>
          <div className="space-y-6">
            {typographyExamples.map((example, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-lg p-6">
                <div className="mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {example.category}
                  </span>
                </div>
                <div className="mb-4">
                  {example.category === "Marketing Headlines" && (
                    <h2 className="text-3xl font-bold text-slate-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {example.example}
                    </h2>
                  )}
                  {example.category === "Section Headers" && (
                    <h3 className="text-2xl font-semibold text-slate-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {example.example}
                    </h3>
                  )}
                  {example.category === "Body Copy" && (
                    <p className="text-base text-slate-700" style={{ fontFamily: "'Roboto', sans-serif" }}>
                      {example.example}
                    </p>
                  )}
                  {example.category === "Testimonials" && (
                    <p className="text-lg italic text-slate-700" style={{ fontFamily: "'Roboto', sans-serif" }}>
                      {example.example}
                    </p>
                  )}
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-500">
                  <p><strong>Specifications:</strong> {example.specs}</p>
                  <p><strong>Usage:</strong> {example.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Font Pairing Guidelines */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Font Pairing Guidelines</h3>
          <div className="grid md:grid-cols-1 gap-6">
            {fontPairings.map((pairing, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-lg p-6">
                <div className="grid md:grid-cols-3 gap-6 items-center">
                  <div>
                    <h4 className="text-lg font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {pairing.primary}
                    </h4>
                    <p className="text-base" style={{ fontFamily: "'Roboto', sans-serif" }}>
                      + {pairing.secondary}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-700 mb-1">Vibe</p>
                    <p className="text-sm text-slate-600">{pairing.vibe}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-700 mb-1">Best For</p>
                    <p className="text-sm text-slate-600">{pairing.usage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Accessibility Guidelines */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Accessibility & Readability</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {accessibilityGuidelines.map((guideline, index) => (
              <div key={index} className="bg-green-50 border border-green-100 rounded-lg p-6">
                <h4 className="font-semibold text-green-900 mb-2">{guideline.principle}</h4>
                <p className="text-green-800 text-sm mb-3"><strong>Requirement:</strong> {guideline.requirement}</p>
                <p className="text-green-700 text-sm"><strong>Implementation:</strong> {guideline.implementation}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-white border border-slate-200 rounded-lg p-8">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Technical Specifications</h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-slate-700 mb-4">Web Implementation</h4>
              <div className="space-y-3 text-sm">
                <div className="bg-slate-50 p-3 rounded">
                  <p className="font-mono text-slate-800">font-family: 'Playfair Display', Georgia, serif;</p>
                  <p className="text-slate-600 mt-1">Headlines and display text</p>
                </div>
                <div className="bg-slate-50 p-3 rounded">
                  <p className="font-mono text-slate-800">font-family: 'Roboto', -apple-system, sans-serif;</p>
                  <p className="text-slate-600 mt-1">Body text and UI elements</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-slate-700 mb-4">Print Specifications</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• <strong>Headlines:</strong> Playfair Display, 24-36pt</li>
                <li>• <strong>Body Text:</strong> Roboto or Times New Roman, 11-12pt</li>
                <li>• <strong>Line Spacing:</strong> 1.4-1.6x font size</li>
                <li>• <strong>Margins:</strong> Minimum 0.75" on all sides</li>
                <li>• <strong>Paragraph Spacing:</strong> 6-12pt after</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200">
            <h4 className="font-semibold text-slate-700 mb-4">Font Loading & Fallbacks</h4>
            <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
              <p className="text-yellow-800 text-sm">
                <strong>Important:</strong> Always include system fallback fonts to ensure readability even if custom fonts fail to load. 
                Use font-display: swap; for better performance and user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
