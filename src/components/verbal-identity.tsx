import * as React from "react"
import { SectionHeader } from "./section-header"
import { VoiceGuide } from "./voice-guide"
import { MessagingGuide } from "./messaging-guide"
import { StyleGuide } from "./style-guide"
import { type VoiceSpectrum } from "@/types/brand"

interface VerbalIdentityProps {
  brandLexicon: string[]
  voiceSpectrum: VoiceSpectrum
}

export function VerbalIdentity({ brandLexicon, voiceSpectrum }: VerbalIdentityProps) {
  return (
    <div className="bg-white print:break-before-page">
      <SectionHeader
        number="03"
        title="Verbal Identity"
        subtitle="The 'Voice' - How your brand communicates"
        color="bg-purple-600"
      />

      <div className="space-y-16">
        <VoiceGuide voiceSpectrum={voiceSpectrum} />
        <MessagingGuide brandLexicon={brandLexicon} />
        <StyleGuide />
      </div>
    </div>
  )
}
