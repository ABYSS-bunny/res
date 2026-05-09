import type { ResumeData } from '../types/resume'

export const sampleResumeData: ResumeData = {
  personal: {
    fullName: 'Aarav Sharma',
    role: 'Frontend Developer',
    email: 'aarav.sharma@email.com',
    phone: '+91 98765 43210',
    location: 'Pune, India',
    linkedIn: 'linkedin.com/in/aaravsharma',
    github: 'github.com/aaravsharma',
    portfolio: 'aarav.dev',
    summary:
      'Motivated fresher with strong fundamentals in React and TypeScript. Built multiple academic and personal projects focused on responsive design, clean UI, and performance.',
  },
  education: [
    {
      id: crypto.randomUUID(),
      institution: 'Savitribai Phule Pune University',
      degree: 'B.E. in Computer Engineering',
      startDate: '2021',
      endDate: '2025',
      score: 'CGPA: 8.6/10',
    },
  ],
  experience: [
    {
      id: crypto.randomUUID(),
      company: 'CodeCraft Labs',
      role: 'Frontend Intern',
      startDate: 'Jan 2025',
      endDate: 'Apr 2025',
      location: 'Remote',
      highlights:
        'Developed reusable UI components, improved lighthouse performance by 20%, and collaborated with backend team for API integration.',
    },
  ],
  projects: [
    {
      id: crypto.randomUUID(),
      name: 'Campus Connect Portal',
      techStack: 'React, Node.js, MongoDB',
      link: 'github.com/aaravsharma/campus-connect',
      highlights:
        'Built a student portal for club events and announcements with role-based dashboard and responsive UI.',
    },
    {
      id: crypto.randomUUID(),
      name: 'Budget Buddy',
      techStack: 'React, TypeScript, Chart.js',
      link: 'github.com/aaravsharma/budget-buddy',
      highlights:
        'Created expense tracker with monthly insights and category-wise analytics.',
    },
  ],
  skills: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Git', 'REST APIs'],
  certifications: [
    {
      id: crypto.randomUUID(),
      title: 'Frontend Developer Career Path',
      issuer: 'freeCodeCamp',
      year: '2024',
      link: 'freecodecamp.org',
    },
  ],
  template: 'classic',
}
