import * as React from "react"
import Image from "next/image"

interface CoverPageProps {
  companyName: string
}

export function CoverPage({ companyName }: CoverPageProps) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-900 to-slate-700 text-white print:bg-slate-900 print:break-after-page">
      <div className="text-center space-y-8 max-w-2xl px-8">
        <div className="space-y-4">
          <Image src="/manna-logo-small.png" alt="Manna Logo" width={96} height={96} className="mx-auto mb-4" />
          <h1 className="text-6xl font-bold tracking-tight">{companyName}</h1>
          <h2 className="text-4xl font-bold tracking-tight">Brand Guidelines</h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-light text-slate-200">The Essential Brand Guidelines for Your Business</h2>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 space-y-4">
            <h3 className="text-xl font-semibold text-amber-400">What's Inside</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-slate-900 font-bold">1</span>
                </div>
                <p className="font-medium">The Foundation</p>
                <p className="text-slate-300">Who you are</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-slate-900 font-bold">2</span>
                </div>
                <p className="font-medium">The Visuals</p>
                <p className="text-slate-300">What you look like</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-slate-900 font-bold">3</span>
                </div>
                <p className="font-medium">The Voice</p>
                <p className="text-slate-300">How you sound</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-sm text-slate-300">
          <p>Version 1.0 • {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  )
}
