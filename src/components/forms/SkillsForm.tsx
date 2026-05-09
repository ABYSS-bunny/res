import { useFormContext } from 'react-hook-form'
import { SectionCard } from '../common/SectionCard'
import type { ResumeData } from '../../types/resume'

const inputClass =
  'w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-slate-500'

export const SkillsForm = () => {
  const { setValue, watch } = useFormContext<ResumeData>()
  const skills = watch('skills')

  return (
    <SectionCard title="Skills" description="Add comma separated skills">
      <input
        value={skills.join(', ')}
        onChange={(event) => {
          const nextSkills = event.target.value
            .split(',')
            .map((skill) => skill.trim())
            .filter(Boolean)
          setValue('skills', nextSkills)
        }}
        placeholder="React, TypeScript, Node.js, SQL"
        className={inputClass}
      />
    </SectionCard>
  )
}
