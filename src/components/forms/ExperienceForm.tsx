import { useFieldArray, useFormContext } from 'react-hook-form'
import { SectionCard } from '../common/SectionCard'
import type { ResumeData } from '../../types/resume'

const inputClass =
  'w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-slate-500'

export const ExperienceForm = () => {
  const { control, register } = useFormContext<ResumeData>()
  const { fields, append, remove } = useFieldArray({ control, name: 'experience' })

  return (
    <SectionCard title="Experience / Internship">
      {fields.map((field, index) => (
        <div key={field.id} className="space-y-2 rounded-lg border border-slate-200 p-3">
          <div className="grid gap-2 sm:grid-cols-2">
            <input {...register(`experience.${index}.company`)} placeholder="Company" className={inputClass} />
            <input {...register(`experience.${index}.role`)} placeholder="Role" className={inputClass} />
            <input {...register(`experience.${index}.startDate`)} placeholder="Start date" className={inputClass} />
            <input {...register(`experience.${index}.endDate`)} placeholder="End date" className={inputClass} />
          </div>
          <input {...register(`experience.${index}.location`)} placeholder="Location" className={inputClass} />
          <textarea
            {...register(`experience.${index}.highlights`)}
            rows={3}
            placeholder="Describe achievements, impact, and responsibilities"
            className={inputClass}
          />
          <button
            type="button"
            onClick={() => remove(index)}
            className="text-xs font-medium text-red-600"
          >
            Remove experience
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={() =>
          append({
            id: crypto.randomUUID(),
            company: '',
            role: '',
            startDate: '',
            endDate: '',
            location: '',
            highlights: '',
          })
        }
        className="rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700"
      >
        + Add experience
      </button>
    </SectionCard>
  )
}
