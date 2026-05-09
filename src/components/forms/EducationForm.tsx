import { useFieldArray, useFormContext } from 'react-hook-form'
import { SectionCard } from '../common/SectionCard'
import type { ResumeData } from '../../types/resume'

const inputClass =
  'w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-slate-500'

export const EducationForm = () => {
  const { control, register } = useFormContext<ResumeData>()
  const { fields, append, remove } = useFieldArray({ control, name: 'education' })

  return (
    <SectionCard title="Education">
      {fields.map((field, index) => (
        <div key={field.id} className="space-y-2 rounded-lg border border-slate-200 p-3">
          <input
            {...register(`education.${index}.institution`)}
            placeholder="College / University"
            className={inputClass}
          />
          <input {...register(`education.${index}.degree`)} placeholder="Degree" className={inputClass} />
          <div className="grid gap-2 sm:grid-cols-3">
            <input {...register(`education.${index}.startDate`)} placeholder="Start year" className={inputClass} />
            <input {...register(`education.${index}.endDate`)} placeholder="End year" className={inputClass} />
            <input {...register(`education.${index}.score`)} placeholder="CGPA / Percentage" className={inputClass} />
          </div>
          <button
            type="button"
            onClick={() => remove(index)}
            className="text-xs font-medium text-red-600"
          >
            Remove education
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={() =>
          append({
            id: crypto.randomUUID(),
            institution: '',
            degree: '',
            startDate: '',
            endDate: '',
            score: '',
          })
        }
        className="rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700"
      >
        + Add education
      </button>
    </SectionCard>
  )
}
