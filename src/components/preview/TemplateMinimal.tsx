import type { ResumeData } from '../../types/resume'
import type { ReactNode } from 'react'

type TemplateProps = {
  data: ResumeData
}

const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="space-y-1">
    <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{title}</h2>
    {children}
  </section>
)

export const TemplateMinimal = ({ data }: TemplateProps) => {
  const { personal, education, experience, projects, skills, certifications } = data

  return (
    <div className="space-y-4 text-[12px] text-slate-800">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold text-slate-900">{personal.fullName || 'Your Name'}</h1>
        <p>{personal.role}</p>
        <p className="text-slate-500">
          {[personal.email, personal.phone, personal.location].filter(Boolean).join(' • ')}
        </p>
      </header>

      {personal.summary ? (
        <Section title="Summary">
          <p>{personal.summary}</p>
        </Section>
      ) : null}

      <Section title="Experience">
        {experience
          .filter((item) => item.company || item.role)
          .map((item) => (
            <article key={item.id} className="pb-1">
              <p className="font-medium">
                {item.role} at {item.company}
              </p>
              <p className="text-slate-500">
                {item.startDate} - {item.endDate}
              </p>
              <p>{item.highlights}</p>
            </article>
          ))}
      </Section>

      <Section title="Projects">
        {projects
          .filter((item) => item.name)
          .map((item) => (
            <article key={item.id} className="pb-1">
              <p className="font-medium">{item.name}</p>
              <p>{item.highlights}</p>
            </article>
          ))}
      </Section>

      <Section title="Education">
        {education
          .filter((item) => item.institution || item.degree)
          .map((item) => (
            <p key={item.id}>
              {item.degree} - {item.institution}
            </p>
          ))}
      </Section>

      {skills.length > 0 ? (
        <Section title="Skills">
          <p>{skills.join(', ')}</p>
        </Section>
      ) : null}

      {certifications.some((item) => item.title) ? (
        <Section title="Certifications">
          {certifications
            .filter((item) => item.title)
            .map((item) => (
              <p key={item.id}>
                {item.title} ({item.year})
              </p>
            ))}
        </Section>
      ) : null}
    </div>
  )
}
