import type { RefObject } from 'react'
import type { ResumeData } from '../../types/resume'
import { TemplateClassic } from './TemplateClassic'
import { TemplateModern } from './TemplateModern'
import { TemplateMinimal } from './TemplateMinimal'

type ResumePreviewProps = {
  resumeData: ResumeData
  previewRef: RefObject<HTMLDivElement | null>
}

export const ResumePreview = ({ resumeData, previewRef }: ResumePreviewProps) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-base font-semibold text-slate-900">Live Preview</h2>
        <p className="text-xs text-slate-500">A4 format</p>
      </div>
      <div className="overflow-x-auto rounded border border-slate-200 bg-slate-50 p-3">
        <div
          id="resume-preview"
          ref={previewRef}
          className="mx-auto min-h-[1123px] w-[794px] max-w-full bg-white p-8 shadow"
        >
          {resumeData.template === 'classic' ? <TemplateClassic data={resumeData} /> : null}
          {resumeData.template === 'modern' ? <TemplateModern data={resumeData} /> : null}
          {resumeData.template === 'minimal' ? <TemplateMinimal data={resumeData} /> : null}
        </div>
      </div>
    </div>
  )
}
