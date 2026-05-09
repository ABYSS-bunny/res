import type { ResumeData } from '../../types/resume'

type TemplateProps = {
  data: ResumeData
}

export const TemplateModern = ({ data }: TemplateProps) => {
  const { personal, education, experience, projects, skills, certifications } = data

  return (
    <div className="grid grid-cols-3 gap-4 text-[12px] leading-relaxed text-slate-800">
      <aside className="col-span-1 rounded-lg bg-slate-100 p-3">
        <h1 className="text-xl font-bold text-slate-900">{personal.fullName || 'Your Name'}</h1>
        <p className="mb-3 text-xs font-medium">{personal.role || 'Role'}</p>
        <div className="space-y-2">
          <p>{personal.email}</p>
          <p>{personal.phone}</p>
          <p>{personal.location}</p>
          <p>{personal.linkedIn}</p>
          <p>{personal.github}</p>
          <p>{personal.portfolio}</p>
        </div>
        {skills.length > 0 ? (
          <div className="mt-4">
            <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-700">Skills</h2>
            <div className="flex flex-wrap gap-1">
              {skills.map((skill) => (
                <span key={skill} className="rounded bg-white px-2 py-1 text-[10px]">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ) : null}
      </aside>

      <main className="col-span-2 space-y-4">
        {personal.summary ? (
          <section>
            <h2 className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-700">Profile</h2>
            <p>{personal.summary}</p>
          </section>
        ) : null}

        <section>
          <h2 className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-700">Experience</h2>
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
          <h2 className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-700">Projects</h2>
          <div className="space-y-2">
            {projects
              .filter((item) => item.name)
              .map((item) => (
                <article key={item.id}>
                  <p className="font-semibold">
                    {item.name} <span className="font-normal">({item.techStack})</span>
                  </p>
                  <p>{item.highlights}</p>
                </article>
              ))}
          </div>
        </section>

        <section>
          <h2 className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-700">Education</h2>
          {education
            .filter((item) => item.institution || item.degree)
            .map((item) => (
              <p key={item.id}>
                <span className="font-semibold">{item.degree}</span> - {item.institution}
              </p>
            ))}
        </section>

        {certifications.some((item) => item.title) ? (
          <section>
            <h2 className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-700">
              Certifications
            </h2>
            {certifications
              .filter((item) => item.title)
              .map((item) => (
                <p key={item.id}>
                  {item.title} - {item.issuer}
                </p>
              ))}
          </section>
        ) : null}
      </main>
    </div>
  )
}
