import { useFieldArray, useFormContext } from 'react-hook-form'
import { SectionCard } from '../common/SectionCard'
import type { ResumeData } from '../../types/resume'

const inputClass =
  'w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-slate-500'

export const ProjectsForm = () => {
  const { control, register } = useFormContext<ResumeData>()
  const { fields, append, remove } = useFieldArray({ control, name: 'projects' })

  return (
    <SectionCard title="Projects">
      {fields.map((field, index) => (
        <div key={field.id} className="space-y-2 rounded-lg border border-slate-200 p-3">
          <input {...register(`projects.${index}.name`)} placeholder="Project name" className={inputClass} />
          <input
            {...register(`projects.${index}.techStack`)}
            placeholder="Tech stack (React, Node.js, etc.)"
            className={inputClass}
          />
          <input {...register(`projects.${index}.link`)} placeholder="Project link" className={inputClass} />
          <textarea
            {...register(`projects.${index}.highlights`)}
            rows={3}
            placeholder="What you built, your impact, and key features"
            className={inputClass}
          />
          <button
            type="button"
            onClick={() => remove(index)}
            className="text-xs font-medium text-red-600"
          >
            Remove project
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={() =>
          append({
            id: crypto.randomUUID(),
            name: '',
            techStack: '',
            link: '',
            highlights: '',
          })
        }
        className="rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700"
      >
        + Add project
      </button>
    </SectionCard>
  )
}
