export function TableOfContents() {
  const sections = [
    { title: "Introduction & Purpose", page: 3 },
    {
      title: "Part 1: Brand Foundation",
      page: 4,
      subsections: [
        { title: "Mission & Vision", page: 4 },
        { title: "Brand Values", page: 5 },
        { title: "Target Audience", page: 6 },
        { title: "Brand Personality", page: 7 },
      ],
    },
    {
      title: "Part 2: Visual Identity",
      page: 8,
      subsections: [
        { title: "Logo Usage", page: 8 },
        { title: "Color Palette", page: 10 },
        { title: "Typography", page: 12 },
        { title: "Imagery Style", page: 14 },
        { title: "Iconography", page: 15 },
      ],
    },
    {
      title: "Part 3: Verbal Identity",
      page: 16,
      subsections: [
        { title: "Brand Voice & Tone", page: 16 },
        { title: "Key Messaging", page: 17 },
        { title: "Grammar & Style Guide", page: 18 },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white p-12 print:break-after-page">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Table of Contents</h1>
          <div className="w-16 h-1 bg-amber-400"></div>
        </div>

        <div className="space-y-6">
          {sections.map((section, index) => (
            <div key={index} className="border-b border-slate-200 pb-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold text-slate-900">{section.title}</h2>
                <span className="text-lg font-medium text-amber-600">{section.page}</span>
              </div>

              {section.subsections && (
                <div className="ml-6 space-y-2">
                  {section.subsections.map((subsection, subIndex) => (
                    <div key={subIndex} className="flex justify-between items-center">
                      <span className="text-slate-600">{subsection.title}</span>
                      <span className="text-slate-500">{subsection.page}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-slate-50 rounded-lg">
          <h3 className="text-lg font-semibold text-slate-900 mb-2">How to Use This Guide</h3>
          <p className="text-slate-600 leading-relaxed">
            This guide is the official resource for understanding and using your brand. Following these guidelines will
            help maintain a consistent, recognizable, and professional image across all communications.
          </p>
        </div>
      </div>
    </div>
  )
}
