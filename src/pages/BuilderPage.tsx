import { useEffect, useMemo, useRef, useState } from 'react'
import { FormProvider, useForm, useWatch } from 'react-hook-form'
import type { ResumeData, ResumeTemplate } from '../types/resume'
import { useResumeStore } from '../store/resumeStore'
import { PersonalForm } from '../components/forms/PersonalForm'
import { EducationForm } from '../components/forms/EducationForm'
import { ExperienceForm } from '../components/forms/ExperienceForm'
import { ProjectsForm } from '../components/forms/ProjectsForm'
import { SkillsForm } from '../components/forms/SkillsForm'
import { CertificationsForm } from '../components/forms/CertificationsForm'
import { ActionButtons } from '../components/common/ActionButtons'
import { ResumePreview } from '../components/preview/ResumePreview'
import { exportResumePdf } from '../utils/pdfExport'

const tabs = [
  { id: 'form', label: 'Form' },
  { id: 'preview', label: 'Preview' },
] as const

export const BuilderPage = () => {
  const { resumeData, setResumeData, setTemplate, resetResume, loadSampleData } = useResumeStore()
  const methods = useForm<ResumeData>({
    values: resumeData,
    mode: 'onChange',
  })
  const watchedValues = useWatch({ control: methods.control })
  const previewRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]['id']>('form')

  useEffect(() => {
    if (!watchedValues.personal) {
      return
    }
    setResumeData(watchedValues as ResumeData)
  }, [setResumeData, watchedValues])

  const filename = useMemo(
    () => `${resumeData.personal.fullName || 'resume'}-resume.pdf`.toLowerCase().replace(/\s+/g, '-'),
    [resumeData.personal.fullName],
  )

  const handleLoadSample = () => {
    loadSampleData()
  }

  const handleReset = () => {
    resetResume()
  }

  const handleExport = () => {
    exportResumePdf(previewRef.current, filename)
  }

  const handleTemplateChange = (template: ResumeTemplate) => {
    setTemplate(template)
  }

  return (
    <FormProvider {...methods}>
      <main className="mx-auto flex min-h-screen w-full max-w-[1400px] flex-col gap-4 p-4">
        <header className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <h1 className="text-xl font-bold text-slate-900 md:text-2xl">ResumeLift Builder</h1>
          <p className="mt-1 text-sm text-slate-600">
            Build a professional resume with live preview and one-click PDF export.
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <label className="text-sm font-medium text-slate-700" htmlFor="template-select">
              Template:
            </label>
            <select
              id="template-select"
              value={resumeData.template}
              onChange={(event) => handleTemplateChange(event.target.value as ResumeTemplate)}
              className="rounded-md border border-slate-300 px-3 py-2 text-sm"
            >
              <option value="classic">Classic</option>
              <option value="modern">Modern</option>
              <option value="minimal">Minimal</option>
            </select>
            <ActionButtons onLoadSample={handleLoadSample} onReset={handleReset} onExport={handleExport} />
          </div>
        </header>

        <div className="flex gap-2 md:hidden">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 rounded-md px-3 py-2 text-sm font-medium ${
                activeTab === tab.id
                  ? 'bg-slate-900 text-white'
                  : 'border border-slate-300 bg-white text-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <section className={`space-y-4 ${activeTab === 'preview' ? 'hidden md:block' : ''}`}>
            <PersonalForm />
            <EducationForm />
            <ExperienceForm />
            <ProjectsForm />
            <SkillsForm />
            <CertificationsForm />
          </section>

          <section className={`${activeTab === 'form' ? 'hidden md:block' : ''}`}>
            <ResumePreview resumeData={resumeData} previewRef={previewRef} />
          </section>
        </div>
      </main>
    </FormProvider>
  )
}
