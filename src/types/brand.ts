export interface CustomerPersona {
  description: string
  dayInLife: string
  demographics: {
    ageRange: string
    income: string
    education: string
    location: string
    familyStatus: string
  }
  psychographics: {
    values: string[]
    interests: string[]
    painPoints: string[]
    goals: string[]
  }
  additionalPersonas: {
    type: string
    description: string
  }[]
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

export interface CoreValue {
  title: string
  description: string
}

export interface BrandStory {
  challenge: string
  solution: string
  outcome: string
}

export interface BrandGuidelines {
  companyName: string
  originStory: string
  promise: string
  ethicalLines: string
  missionStatement: string
  visionStatement: string
  coreValues: CoreValue[]
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
  brandStory: BrandStory
} 