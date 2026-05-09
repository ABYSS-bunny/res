import { useFieldArray, useFormContext } from 'react-hook-form'
import { SectionCard } from '../common/SectionCard'
import type { ResumeData } from '../../types/resume'

const inputClass =
  'w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-slate-500'

export const CertificationsForm = () => {
  const { control, register } = useFormContext<ResumeData>()
  const { fields, append, remove } = useFieldArray({ control, name: 'certifications' })

  return (
    <SectionCard title="Certifications / Achievements">
      {fields.map((field, index) => (
        <div key={field.id} className="grid gap-2 rounded-lg border border-slate-200 p-3 sm:grid-cols-2">
          <input
            {...register(`certifications.${index}.title`)}
            placeholder="Certification title"
            className={inputClass}
          />
          <input {...register(`certifications.${index}.issuer`)} placeholder="Issuer" className={inputClass} />
          <input {...register(`certifications.${index}.year`)} placeholder="Year" className={inputClass} />
          <input {...register(`certifications.${index}.link`)} placeholder="Credential link" className={inputClass} />
          <button
            type="button"
            onClick={() => remove(index)}
            className="text-left text-xs font-medium text-red-600 sm:col-span-2"
          >
            Remove certification
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={() =>
          append({
            id: crypto.randomUUID(),
            title: '',
            issuer: '',
            year: '',
            link: '',
          })
        }
        className="rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700"
      >
        + Add certification
      </button>
    </SectionCard>
  )
}
