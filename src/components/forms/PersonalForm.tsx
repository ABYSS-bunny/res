import { useFormContext } from 'react-hook-form'
import { SectionCard } from '../common/SectionCard'
import { emailPattern, requiredMessage } from '../../utils/validation'
import type { ResumeData } from '../../types/resume'

const inputClass =
  'w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-slate-500'

export const PersonalForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ResumeData>()

  return (
    <SectionCard title="Personal Information" description="Basic details for your resume header">
      <div className="grid gap-3 md:grid-cols-2">
        <div>
          <input
            {...register('personal.fullName', { required: requiredMessage })}
            placeholder="Full name"
            className={inputClass}
          />
          {errors.personal?.fullName ? (
            <p className="mt-1 text-xs text-red-600">{errors.personal.fullName.message}</p>
          ) : null}
        </div>
        <input
          {...register('personal.role', { required: requiredMessage })}
          placeholder="Role (e.g. Frontend Developer)"
          className={inputClass}
        />
        <div>
          <input
            {...register('personal.email', {
              required: requiredMessage,
              pattern: emailPattern,
            })}
            placeholder="Email"
            className={inputClass}
          />
          {errors.personal?.email ? (
            <p className="mt-1 text-xs text-red-600">{errors.personal.email.message}</p>
          ) : null}
        </div>
        <input {...register('personal.phone')} placeholder="Phone number" className={inputClass} />
        <input {...register('personal.location')} placeholder="Location" className={inputClass} />
        <input {...register('personal.linkedIn')} placeholder="LinkedIn" className={inputClass} />
        <input {...register('personal.github')} placeholder="GitHub" className={inputClass} />
        <input {...register('personal.portfolio')} placeholder="Portfolio" className={inputClass} />
      </div>
      <textarea
        {...register('personal.summary', { required: requiredMessage })}
        placeholder="Short professional summary"
        rows={4}
        className={inputClass}
      />
    </SectionCard>
  )
}
