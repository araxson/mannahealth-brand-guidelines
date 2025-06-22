import { CheckCircle, XCircle } from "lucide-react"

export function ImageryGuide() {
  return (
    <div className="p-12 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Imagery & Photography Style</h2>

        {/* Style Description */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Visual Style</h3>
          <div className="bg-white rounded-lg p-8">
            <p className="text-slate-700 leading-relaxed mb-6">
              Our imagery should feel authentic, professional, and approachable. We prefer natural lighting, real people
              in genuine moments, and clean compositions that support our brand message.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-full h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-3 flex items-center justify-center">
                  <span className="text-blue-700 font-medium">Bright & Clean</span>
                </div>
                <p className="text-sm text-slate-600">Natural lighting with clean backgrounds</p>
              </div>

              <div className="text-center">
                <div className="w-full h-32 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-lg mb-3 flex items-center justify-center">
                  <span className="text-emerald-700 font-medium">Authentic</span>
                </div>
                <p className="text-sm text-slate-600">Real people in genuine moments</p>
              </div>

              <div className="text-center">
                <div className="w-full h-32 bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg mb-3 flex items-center justify-center">
                  <span className="text-amber-700 font-medium">Professional</span>
                </div>
                <p className="text-sm text-slate-600">High-quality, well-composed shots</p>
              </div>
            </div>
          </div>
        </div>

        {/* Do's and Don'ts */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-8">
            <h3 className="text-xl font-semibold text-emerald-700 mb-6 flex items-center">
              <CheckCircle className="w-6 h-6 mr-2" />
              Do's
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-700">Use natural lighting</p>
                  <p className="text-sm text-slate-600">Soft, natural light creates warmth and authenticity</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-700">Show real customers</p>
                  <p className="text-sm text-slate-600">Authentic people create emotional connection</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-700">Keep compositions clean</p>
                  <p className="text-sm text-slate-600">Uncluttered backgrounds focus attention</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-700">Maintain consistent style</p>
                  <p className="text-sm text-slate-600">Cohesive look across all materials</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8">
            <h3 className="text-xl font-semibold text-red-700 mb-6 flex items-center">
              <XCircle className="w-6 h-6 mr-2" />
              Don'ts
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-700">Avoid generic stock photos</p>
                  <p className="text-sm text-slate-600">Overly posed or cliché imagery feels inauthentic</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-700">Don't use heavy filters</p>
                  <p className="text-sm text-slate-600">Over-processing can look unprofessional</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-700">Avoid cluttered backgrounds</p>
                  <p className="text-sm text-slate-600">Busy backgrounds distract from the message</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-700">Don't mix different styles</p>
                  <p className="text-sm text-slate-600">Inconsistent imagery weakens brand recognition</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
