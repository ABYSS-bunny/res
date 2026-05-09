import type { PropsWithChildren } from 'react'

type SectionCardProps = PropsWithChildren<{
  title: string
  description?: string
}>

export const SectionCard = ({ title, description, children }: SectionCardProps) => {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <h2 className="text-base font-semibold text-slate-900">{title}</h2>
      {description ? <p className="mt-1 text-sm text-slate-500">{description}</p> : null}
      <div className="mt-4 space-y-3">{children}</div>
    </section>
  )
}
