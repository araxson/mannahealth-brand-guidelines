import Image from "next/image"
import { CheckCircle, XCircle } from "lucide-react"

export function LogoUsage() {
  const doExamples = [
    "Use on clean, uncluttered backgrounds",
    "Maintain minimum clear space",
    "Use approved color variations only",
    "Ensure minimum size requirements",
  ]

  const dontExamples = [
    "Don't stretch or distort the logo",
    "Don't change colors or add effects",
    "Don't place on busy backgrounds",
    "Don't rotate or modify the design",
  ]

  return (
    <div className="p-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Logo Usage</h2>

        {/* Logo Variations */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Logo Variations</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-8 border border-slate-200 rounded-lg">
              <div className="w-32 h-16 mx-auto mb-4 flex items-center justify-center">
                <Image src="/manna-logo-small.png" alt="Primary Logo" width={128} height={64} />
              </div>
              <p className="text-sm text-slate-600">Primary Logo</p>
            </div>

            <div className="text-center p-8 border border-slate-200 rounded-lg">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Image src="/manna-logo-small.png" alt="Icon Mark" width={64} height={64} style={{objectFit:'contain', borderRadius:'50%'}} />
              </div>
              <p className="text-sm text-slate-600">Icon Mark</p>
            </div>

            <div className="text-center p-8 border border-slate-200 rounded-lg bg-slate-900">
              <div className="w-32 h-16 mx-auto mb-4 flex items-center justify-center bg-white rounded">
                <Image src="/manna-logo-small.png" alt="Reverse Logo" width={128} height={64} />
              </div>
              <p className="text-sm text-white">Reverse Logo</p>
            </div>
          </div>
        </div>

        {/* Clear Space */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Clear Space & Minimum Size</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-slate-200 rounded-lg p-8">
              <div className="relative">
                <div className="w-32 h-16 mx-auto flex items-center justify-center">
                  <Image src="/manna-logo-small.png" alt="Logo Clear Space" width={128} height={64} />
                </div>
                <div className="absolute inset-0 border-2 border-dashed border-emerald-500 -m-8"></div>
              </div>
              <p className="text-sm text-slate-600 mt-4 text-center">Minimum clear space = X (height of logo)</p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-700 mb-2">Minimum Sizes</h4>
                <div className="space-y-2 text-sm text-slate-600">
                  <p>
                    <strong>Print:</strong> 1 inch wide
                  </p>
                  <p>
                    <strong>Web:</strong> 120px wide
                  </p>
                  <p>
                    <strong>Social Media:</strong> 200px wide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Do's and Don'ts */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-emerald-700 mb-6 flex items-center">
              <CheckCircle className="w-6 h-6 mr-2" />
              Do's
            </h3>
            <div className="space-y-3">
              {doExamples.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-red-700 mb-6 flex items-center">
              <XCircle className="w-6 h-6 mr-2" />
              Don'ts
            </h3>
            <div className="space-y-3">
              {dontExamples.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
