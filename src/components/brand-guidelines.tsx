import * as React from "react"
import { brandGuidelines } from "@/data/brand/guidelines"
import { CoverPage } from "./cover-page"
import { TableOfContents } from "./table-of-contents"
import { BrandFoundation } from "./brand-foundation"
import { VisualIdentity } from "./visual-identity"
import { VerbalIdentity } from "./verbal-identity"
import { SectionsTaskList } from "./sections-task-list"
import { ClientFeedbackList } from "./client-feedback-list"

export function BrandGuidelines() {
  return (
    <div className="print:text-black">
      <CoverPage companyName={brandGuidelines.companyName} />
      <TableOfContents />
      <BrandFoundation 
        originStory={brandGuidelines.originStory}
        promise={brandGuidelines.promise}
        ethicalLines={brandGuidelines.ethicalLines}
        missionStatement={brandGuidelines.missionStatement}
        visionStatement={brandGuidelines.visionStatement}
        coreValues={brandGuidelines.coreValues}
        customerPersona={brandGuidelines.customerPersona}
        transformation={brandGuidelines.transformation}
        trustedSources={brandGuidelines.trustedSources}
        antiAudience={brandGuidelines.antiAudience}
        characterArchetype={brandGuidelines.characterArchetype}
        brandPositioning={brandGuidelines.brandPositioning}
        brandStory={brandGuidelines.brandStory}
      />
      <VisualIdentity brandInspiration={brandGuidelines.brandInspiration} />
      <VerbalIdentity 
        brandLexicon={brandGuidelines.brandLexicon}
        voiceSpectrum={brandGuidelines.voiceSpectrum}
      />
      {/* Client Feedback List below Verbal Identity */}
      <ClientFeedbackList />
      {/* Sections Task List at the end */}
      <SectionsTaskList />
    </div>
  )
}
