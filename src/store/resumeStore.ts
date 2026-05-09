import { create } from 'zustand'
import type { ResumeData, ResumeTemplate } from '../types/resume'
import { sampleResumeData } from '../utils/sampleData'

type ResumeState = {
  resumeData: ResumeData
  setResumeData: (resumeData: ResumeData) => void
  setTemplate: (template: ResumeTemplate) => void
  resetResume: () => void
  loadSampleData: () => void
}

const emptyResumeData: ResumeData = {
  personal: {
    fullName: '',
    role: '',
    email: '',
    phone: '',
    location: '',
    linkedIn: '',
    github: '',
    portfolio: '',
    summary: '',
  },
  education: [
    {
      id: crypto.randomUUID(),
      institution: '',
      degree: '',
      startDate: '',
      endDate: '',
      score: '',
    },
  ],
  experience: [
    {
      id: crypto.randomUUID(),
      company: '',
      role: '',
      startDate: '',
      endDate: '',
      location: '',
      highlights: '',
    },
  ],
  projects: [
    {
      id: crypto.randomUUID(),
      name: '',
      techStack: '',
      link: '',
      highlights: '',
    },
  ],
  skills: [],
  certifications: [
    {
      id: crypto.randomUUID(),
      title: '',
      issuer: '',
      year: '',
      link: '',
    },
  ],
  template: 'classic',
}

export const useResumeStore = create<ResumeState>((set) => ({
  resumeData: emptyResumeData,
  setResumeData: (resumeData) => set({ resumeData }),
  setTemplate: (template) =>
    set((state) => ({ resumeData: { ...state.resumeData, template } })),
  resetResume: () => set({ resumeData: emptyResumeData }),
  loadSampleData: () => set({ resumeData: sampleResumeData }),
}))
