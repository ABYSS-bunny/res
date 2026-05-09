export type ResumeTemplate = 'classic' | 'modern' | 'minimal'

export interface PersonalInfo {
  fullName: string
  role: string
  email: string
  phone: string
  location: string
  linkedIn: string
  github: string
  portfolio: string
  summary: string
}

export interface EducationEntry {
  id: string
  institution: string
  degree: string
  startDate: string
  endDate: string
  score: string
}

export interface ExperienceEntry {
  id: string
  company: string
  role: string
  startDate: string
  endDate: string
  location: string
  highlights: string
}

export interface ProjectEntry {
  id: string
  name: string
  techStack: string
  link: string
  highlights: string
}

export interface CertificationEntry {
  id: string
  title: string
  issuer: string
  year: string
  link: string
}

export interface ResumeData {
  personal: PersonalInfo
  education: EducationEntry[]
  experience: ExperienceEntry[]
  projects: ProjectEntry[]
  skills: string[]
  certifications: CertificationEntry[]
  template: ResumeTemplate
}
