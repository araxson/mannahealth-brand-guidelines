import { CheckCircle, XCircle, Camera, Palette, Users, Heart } from "lucide-react"

export function ImageryGuide() {
  const imageCategories = [
    {
      category: "Portrait Photography",
      description: "Authentic portraits that showcase confidence, health, and vitality",
      characteristics: [
        "Natural, genuine expressions",
        "Soft, diffused lighting",
        "Clean, uncluttered backgrounds",
        "Focus on eyes and authentic emotion"
      ],
      usage: "Website headers, testimonials, about pages, social media"
    },
    {
      category: "Lifestyle Photography",
      description: "Real moments that reflect our clients' journey to wellness",
      characteristics: [
        "Candid, unposed moments",
        "Natural environments",
        "Family and personal interactions",
        "Activities that promote well-being"
      ],
      usage: "Blog content, social media, marketing materials"
    },
    {
      category: "Treatment Photography",
      description: "Professional, clean images of our treatments and environment",
      characteristics: [
        "Clean, clinical aesthetic",
        "Professional lighting",
        "Focus on care and precision",
        "Calm, serene atmosphere"
      ],
      usage: "Service pages, educational content, facility showcases"
    },
    {
      category: "Before/After Documentation",
      description: "Respectful, professional documentation of client transformation",
      characteristics: [
        "Consistent lighting and angles",
        "Neutral backgrounds",
        "Professional, medical-style documentation",
        "Privacy and dignity maintained"
      ],
      usage: "Case studies, testimonials (with consent), educational materials"
    }
  ]

  const colorMood = [
    {
      mood: "Warm & Inviting",
      colors: ["Soft peachy tones", "Warm beiges", "Gentle golds"],
      feeling: "Comfort, care, warmth",
      usage: "Welcome areas, consultation content"
    },
    {
      mood: "Clean & Clinical",
      colors: ["Crisp whites", "Soft grays", "Cool blues"],
      feeling: "Professional, trustworthy, precise",
      usage: "Treatment documentation, medical content"
    },
    {
      mood: "Natural & Organic",
      colors: ["Sage greens", "Earth tones", "Natural wood"],
      feeling: "Holistic, natural, balanced",
      usage: "Lifestyle content, wellness imagery"
    },
    {
      mood: "Vibrant & Energetic",
      colors: ["Fresh greens", "Sky blues", "Warm whites"],
      feeling: "Vitality, health, renewal",
      usage: "Success stories, transformation content"
    }
  ]

  const technicalSpecs = [
    {
      aspect: "Resolution",
      web: "72-150 DPI, optimized for web",
      print: "300 DPI minimum for high-quality print",
      social: "Platform-specific dimensions"
    },
    {
      aspect: "File Formats",
      web: "JPEG (optimized), WebP for modern browsers",
      print: "TIFF or high-quality JPEG",
      social: "JPEG, PNG with transparency if needed"
    },
    {
      aspect: "Color Profile",
      web: "sRGB color space",
      print: "CMYK or Adobe RGB",
      social: "sRGB for consistency"
    },
    {
      aspect: "Compression",
      web: "Optimized for fast loading",
      print: "Minimal compression",
      social: "Platform-optimized compression"
    }
  ]

  return (
    <div className="p-12 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Photography & Imagery Guidelines</h2>

        {/* Brand Photography Philosophy */}
        <div className="mb-12 bg-white rounded-lg p-8">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Photography Philosophy</h3>
          <p className="text-slate-700 leading-relaxed mb-6">
            Our imagery tells the story of authentic transformation, genuine care, and professional expertise. Every photograph should reflect our brand values of integrity, holistic wellness, and personal connection. We capture real moments, real people, and real results while maintaining the highest standards of professionalism and respect for our clients' privacy and dignity.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Authentic</h4>
              <p className="text-sm text-slate-600">Real people, genuine emotions, unscripted moments</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Camera className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Professional</h4>
              <p className="text-sm text-slate-600">High-quality, well-composed, technically excellent</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Inclusive</h4>
              <p className="text-sm text-slate-600">Diverse representation, all ages, backgrounds</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Palette className="w-8 h-8 text-amber-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Consistent</h4>
              <p className="text-sm text-slate-600">Unified style, cohesive brand experience</p>
            </div>
          </div>
        </div>

        {/* Image Categories */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Photography Categories</h3>
          <div className="space-y-6">
            {imageCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-slate-200">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">{category.category}</h4>
                    <p className="text-slate-700 text-sm mb-4">{category.description}</p>
                    <div className="bg-blue-50 p-3 rounded">
                      <p className="text-blue-800 text-xs font-medium">Best Used For:</p>
                      <p className="text-blue-700 text-xs">{category.usage}</p>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h5 className="font-medium text-slate-800 mb-3">Key Characteristics:</h5>
                    <div className="grid md:grid-cols-2 gap-3">
                      {category.characteristics.map((char, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <p className="text-slate-600 text-sm">{char}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Color Mood & Aesthetic */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Color Mood & Aesthetic Direction</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {colorMood.map((mood, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-3">{mood.mood}</h4>
                <div className="mb-4">
                  <h5 className="text-sm font-medium text-slate-700 mb-2">Color Palette:</h5>
                  <div className="flex flex-wrap gap-2">
                    {mood.colors.map((color, idx) => (
                      <span key={idx} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <h5 className="text-sm font-medium text-slate-700 mb-1">Emotional Feeling:</h5>
                  <p className="text-slate-600 text-sm">{mood.feeling}</p>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <h5 className="text-green-800 text-xs font-medium mb-1">Best Used For:</h5>
                  <p className="text-green-700 text-xs">{mood.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Technical Specifications</h3>
          <div className="bg-white rounded-lg overflow-hidden border border-slate-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-slate-900">Specification</th>
                    <th className="px-6 py-4 text-left font-semibold text-slate-900">Web Use</th>
                    <th className="px-6 py-4 text-left font-semibold text-slate-900">Print Use</th>
                    <th className="px-6 py-4 text-left font-semibold text-slate-900">Social Media</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {technicalSpecs.map((spec, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 font-medium text-slate-900">{spec.aspect}</td>
                      <td className="px-6 py-4 text-slate-700 text-sm">{spec.web}</td>
                      <td className="px-6 py-4 text-slate-700 text-sm">{spec.print}</td>
                      <td className="px-6 py-4 text-slate-700 text-sm">{spec.social}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Style Guidelines */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Visual Style Guidelines</h3>
          <div className="bg-white rounded-lg p-8">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-full h-32 bg-gradient-to-br from-blue-100 via-blue-50 to-white rounded-lg mb-3 flex items-center justify-center border border-blue-200">
                  <span className="text-blue-700 font-medium">Soft & Luminous</span>
                </div>
                <p className="text-sm text-slate-600">Natural lighting with gentle shadows, avoiding harsh contrasts</p>
              </div>

              <div className="text-center">
                <div className="w-full h-32 bg-gradient-to-br from-green-100 via-green-50 to-white rounded-lg mb-3 flex items-center justify-center border border-green-200">
                  <span className="text-green-700 font-medium">Authentic Moments</span>
                </div>
                <p className="text-sm text-slate-600">Genuine expressions and natural interactions, not overly posed</p>
              </div>

              <div className="text-center">
                <div className="w-full h-32 bg-gradient-to-br from-purple-100 via-purple-50 to-white rounded-lg mb-3 flex items-center justify-center border border-purple-200">
                  <span className="text-purple-700 font-medium">Clean Composition</span>
                </div>
                <p className="text-sm text-slate-600">Uncluttered backgrounds that don't compete with the subject</p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 mb-3">Lighting Guidelines</h4>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h5 className="font-medium text-blue-800 mb-2">Preferred Lighting:</h5>
                  <ul className="space-y-1 text-blue-700">
                    <li>• Natural window light (north-facing preferred)</li>
                    <li>• Soft, diffused artificial lighting</li>
                    <li>• Golden hour for outdoor shots</li>
                    <li>• Even, shadow-free lighting for clinical photography</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-blue-800 mb-2">Avoid:</h5>
                  <ul className="space-y-1 text-blue-700">
                    <li>• Harsh direct sunlight</li>
                    <li>• Fluorescent lighting</li>
                    <li>• Heavy shadows under eyes</li>
                    <li>• Mixed color temperature lighting</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Do's and Don'ts */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-8">
            <h3 className="text-xl font-semibold text-emerald-700 mb-6 flex items-center">
              <CheckCircle className="w-6 h-6 mr-2" />
              Photography Do's
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-700">Capture authentic emotions</p>
                  <p className="text-sm text-slate-600">Focus on genuine moments of joy, confidence, and transformation</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-700">Use consistent editing style</p>
                  <p className="text-sm text-slate-600">Maintain cohesive look with subtle, natural post-processing</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-700">Respect client privacy</p>
                  <p className="text-sm text-slate-600">Always obtain proper consent before using client images</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-700">Show diverse representation</p>
                  <p className="text-sm text-slate-600">Include people of different ages, backgrounds, and life stages</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-700">Focus on wellness journey</p>
                  <p className="text-sm text-slate-600">Capture the process of transformation, not just end results</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-700">Maintain professional standards</p>
                  <p className="text-sm text-slate-600">High technical quality in focus, exposure, and composition</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8">
            <h3 className="text-xl font-semibold text-red-700 mb-6 flex items-center">
              <XCircle className="w-6 h-6 mr-2" />
              Photography Don'ts
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-700">Avoid overly retouched images</p>
                  <p className="text-sm text-slate-600">Heavy editing destroys authenticity and can be misleading</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-700">Don't use generic stock photos</p>
                  <p className="text-sm text-slate-600">Cliché imagery undermines our authentic, personal approach</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-700">Avoid sensationalized before/after shots</p>
                  <p className="text-sm text-slate-600">Focus on overall wellness transformation, not dramatic comparisons</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-700">Don't compromise client dignity</p>
                  <p className="text-sm text-slate-600">Always maintain respect and professionalism in all imagery</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-700">Avoid inconsistent style mixing</p>
                  <p className="text-sm text-slate-600">Different photography styles confuse brand recognition</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-700">Don't use images without proper rights</p>
                  <p className="text-sm text-slate-600">Always ensure legal rights to use any photography</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Guidelines */}
        <div className="mt-12 bg-white rounded-lg p-8">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Content & Subject Guidelines</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-slate-800 mb-4">Ideal Subject Matter:</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Genuine client interactions and consultations</li>
                <li>• Professional treatment environments</li>
                <li>• Natural lifestyle moments showing wellness</li>
                <li>• Educational and informative content</li>
                <li>• Behind-the-scenes glimpses of care and preparation</li>
                <li>• Products and treatments in professional settings</li>
                <li>• Team members demonstrating expertise and care</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-800 mb-4">Image Requirements by Platform:</h4>
              <div className="space-y-3 text-sm">
                <div className="bg-slate-50 p-3 rounded">
                  <p className="font-medium text-slate-700">Website Hero Images:</p>
                  <p className="text-slate-600">1920x1080px minimum, high-quality, professional portraits or lifestyle shots</p>
                </div>
                <div className="bg-slate-50 p-3 rounded">
                  <p className="font-medium text-slate-700">Social Media:</p>
                  <p className="text-slate-600">Platform-specific dimensions, engaging and authentic content</p>
                </div>
                <div className="bg-slate-50 p-3 rounded">
                  <p className="font-medium text-slate-700">Print Materials:</p>
                  <p className="text-slate-600">300 DPI minimum, CMYK color space for professional printing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
