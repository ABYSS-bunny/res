import type { ResumeData } from '../../types/resume'

type TemplateProps = {
  data: ResumeData
}

export const TemplateClassic = ({ data }: TemplateProps) => {
  const { personal, education, experience, projects, skills, certifications } = data

  return (
    <div className="space-y-4 text-[12px] leading-relaxed text-slate-800">
      <header className="border-b border-slate-300 pb-3">
        <h1 className="text-2xl font-bold text-slate-900">{personal.fullName || 'Your Name'}</h1>
        <p className="text-sm font-medium">{personal.role || 'Your Role'}</p>
        <p className="mt-1 text-xs">
          {[personal.email, personal.phone, personal.location].filter(Boolean).join(' | ')}
        </p>
        <p className="text-xs">
          {[personal.linkedIn, personal.github, personal.portfolio].filter(Boolean).join(' | ')}
        </p>
      </header>

      {personal.summary ? (
        <section>
          <h2 className="mb-1 border-b border-slate-300 text-xs font-semibold uppercase tracking-wide">
            Summary
          </h2>
          <p>{personal.summary}</p>
        </section>
      ) : null}

      <section>
        <h2 className="mb-1 border-b border-slate-300 text-xs font-semibold uppercase tracking-wide">
          Education
        </h2>
        <div className="space-y-1">
          {education
            .filter((item) => item.institution || item.degree)
            .map((item) => (
              <p key={item.id}>
                <span className="font-semibold">{item.degree}</span> - {item.institution}{' '}
                <span className="text-slate-500">
                  ({item.startDate} - {item.endDate}) {item.score}
                </span>
              </p>
            ))}
        </div>
      </section>

      <section>
        <h2 className="mb-1 border-b border-slate-300 text-xs font-semibold uppercase tracking-wide">
          Experience
        </h2>
        <div className="space-y-2">
          {experience
            .filter((item) => item.company || item.role)
            .map((item) => (
              <article key={item.id}>
                <p className="font-semibold">
                  {item.role} - {item.company}
                </p>
                <p className="text-slate-500">
                  {item.startDate} - {item.endDate} | {item.location}
                </p>
                <p>{item.highlights}</p>
              </article>
            ))}
        </div>
      </section>

      <section>
        <h2 className="mb-1 border-b border-slate-300 text-xs font-semibold uppercase tracking-wide">
          Projects
        </h2>
        <div className="space-y-2">
          {projects
            .filter((item) => item.name)
            .map((item) => (
              <article key={item.id}>
                <p className="font-semibold">
                  {item.name} <span className="font-normal">({item.techStack})</span>
                </p>
                <p>{item.highlights}</p>
                {item.link ? <p className="text-slate-500">{item.link}</p> : null}
              </article>
            ))}
        </div>
      </section>

      {skills.length > 0 ? (
        <section>
          <h2 className="mb-1 border-b border-slate-300 text-xs font-semibold uppercase tracking-wide">
            Skills
          </h2>
          <p>{skills.join(', ')}</p>
        </section>
      ) : null}

      {certifications.some((item) => item.title) ? (
        <section>
          <h2 className="mb-1 border-b border-slate-300 text-xs font-semibold uppercase tracking-wide">
            Certifications
          </h2>
          <div className="space-y-1">
            {certifications
              .filter((item) => item.title)
              .map((item) => (
                <p key={item.id}>
                  {item.title} - {item.issuer} ({item.year})
                </p>
              ))}
          </div>
        </section>
      ) : null}
    </div>
  )
}
