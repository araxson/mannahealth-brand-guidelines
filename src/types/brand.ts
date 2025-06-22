export interface CustomerPersona {
  description: string
  dayInLife: string
  additionalPersonas: string[]
}

export interface BrandPositioning {
  thisNotThat: string[]
}

export interface VoiceSpectrum {
  casual: number
  professional: number
  friendly: number
  authoritative: number
}

export interface BrandGuidelines {
  companyName: string
  originStory: string
  promise: string
  ethicalLines: string
  customerPersona: CustomerPersona
  transformation: string[]
  trustedSources: string[]
  antiAudience: string
  characterArchetype: string[]
  brandPositioning: BrandPositioning
  brandLexicon: string[]
  voiceSpectrum: VoiceSpectrum
  brandInspiration: string[]
  differentiator: string
  futureVision: string
  dreamCollaboration: string
} 