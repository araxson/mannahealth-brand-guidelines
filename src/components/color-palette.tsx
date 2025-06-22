export function ColorPalette() {
  const primaryColors = [
    { name: "Brand Blue", hex: "#1E40AF", rgb: "30, 64, 175", cmyk: "83, 63, 0, 31" },
    { name: "Brand Green", hex: "#059669", rgb: "5, 150, 105", cmyk: "97, 0, 30, 41" },
  ]

  const secondaryColors = [
    { name: "Accent Orange", hex: "#F59E0B", rgb: "245, 158, 11", cmyk: "0, 36, 95, 4" },
    { name: "Accent Purple", hex: "#7C3AED", rgb: "124, 58, 237", cmyk: "48, 76, 0, 7" },
  ]

  const neutralColors = [
    { name: "Dark Gray", hex: "#1F2937", rgb: "31, 41, 55", cmyk: "44, 25, 0, 78" },
    { name: "Medium Gray", hex: "#6B7280", rgb: "107, 114, 128", cmyk: "16, 11, 0, 50" },
    { name: "Light Gray", hex: "#F3F4F6", rgb: "243, 244, 246", cmyk: "1, 1, 0, 4" },
    { name: "Pure White", hex: "#FFFFFF", rgb: "255, 255, 255", cmyk: "0, 0, 0, 0" },
  ]

  const ColorSwatch = ({ color }: { color: any }) => (
    <div className="border border-slate-200 rounded-lg overflow-hidden">
      <div className="h-24 w-full" style={{ backgroundColor: color.hex }}></div>
      <div className="p-4 space-y-2">
        <h4 className="font-semibold text-slate-900">{color.name}</h4>
        <div className="space-y-1 text-xs text-slate-600">
          <p>
            <strong>HEX:</strong> {color.hex}
          </p>
          <p>
            <strong>RGB:</strong> {color.rgb}
          </p>
          <p>
            <strong>CMYK:</strong> {color.cmyk}
          </p>
        </div>
      </div>
    </div>
  )

  return (
    <div className="p-12 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Color Palette</h2>

        <div className="space-y-12">
          {/* Primary Colors */}
          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-6">Primary Colors</h3>
            <p className="text-slate-600 mb-6">
              These are the main colors that represent your brand. Use them for logos, headers, and key elements.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {primaryColors.map((color, index) => (
                <ColorSwatch key={index} color={color} />
              ))}
            </div>
          </div>

          {/* Secondary Colors */}
          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-6">Secondary Colors</h3>
            <p className="text-slate-600 mb-6">
              Use these accent colors for call-to-action buttons, highlights, and supporting graphics.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {secondaryColors.map((color, index) => (
                <ColorSwatch key={index} color={color} />
              ))}
            </div>
          </div>

          {/* Neutral Colors */}
          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-6">Neutral Colors</h3>
            <p className="text-slate-600 mb-6">
              These colors are used for text, backgrounds, and creating visual hierarchy.
            </p>
            <div className="grid md:grid-cols-4 gap-4">
              {neutralColors.map((color, index) => (
                <ColorSwatch key={index} color={color} />
              ))}
            </div>
          </div>

          {/* Usage Guidelines */}
          <div className="bg-white rounded-lg p-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Color Usage Guidelines</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-emerald-700 mb-2">Best Practices</h4>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li>• Use primary colors for brand elements</li>
                  <li>• Limit accent colors to 20% of design</li>
                  <li>• Ensure sufficient contrast for accessibility</li>
                  <li>• Test colors in both print and digital formats</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Avoid</h4>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li>• Using too many colors in one design</li>
                  <li>• Modifying brand colors without approval</li>
                  <li>• Poor contrast combinations</li>
                  <li>• Using colors outside this palette</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
