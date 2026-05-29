export interface ContactLink {
  label: string
  value: string
  href: string
}

export interface Education {
  degree: string
  institution: string
  years: string
}

export interface Owner {
  name: string
  roles: string[]
  location: string
  education: Education
  email: string
  phone: string
  github: ContactLink
  linkedIn: ContactLink
}

export interface SkillCategory {
  title: string
  skills: string[]
}

export interface ExperienceItem {
  role: string
  company: string
  period: string
  highlights: string[]
}

export interface Project {
  title: string
  tech: string[]
  features: string[]
}

export const owner: Owner = {
  name: 'Yash Kumar Sharma',
  roles: ['AI Engineer', 'Cybersecurity Developer', 'IoT Innovator'],
  location: 'Bulandshahr, Uttar Pradesh, India',
  education: {
    degree: 'B.Tech Computer Science (IoT)',
    institution: 'AKTU',
    years: '2023-2027',
  },
  email: 'yash1047sharma@gmail.com',
  phone: '+91-7078479889',
  github: {
    label: 'GitHub',
    value: 'github.com/indeed654',
    href: 'https://github.com/indeed654',
  },
  linkedIn: {
    label: 'LinkedIn',
    value: 'linkedin.com/in/yash-sharma-914641326',
    href: 'https://linkedin.com/in/yash-sharma-914641326',
  },
}

export const navLinks = ['About', 'Projects', 'Experience', 'Contact']

export const aboutFocus = [
  'Artificial Intelligence',
  'Cybersecurity',
  'Multi-Agent Systems',
  'RAG Applications',
  'IoT',
  'Cloud Computing',
  'Blockchain',
]

export const skillCategories: SkillCategory[] = [
  {
    title: 'AI / Machine Learning',
    skills: ['TensorFlow', 'PyTorch', 'LangChain', 'Transformers', 'Reinforcement Learning', 'RAG'],
  },
  {
    title: 'Development',
    skills: ['React', 'Node.js', 'Spring Boot', 'Java', 'Python'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes'],
  },
  {
    title: 'Cybersecurity',
    skills: ['OWASP', 'IDS/IPS', 'Threat Intelligence', 'Pen Testing'],
  },
]

export const experiences: ExperienceItem[] = [
  {
    role: 'Software Developer Intern',
    company: 'AtDrive',
    period: 'Jun 2025 - Aug 2025',
    highlights: [
      'Backend development using Java and Spring Boot',
      'REST API development',
      'Docker and Kubernetes deployment',
      'MySQL optimization',
      'Enterprise applications serving 10k+ users',
    ],
  },
  {
    role: 'AI Intern',
    company: 'Exponentia.ai',
    period: 'Jan 2025 - Mar 2025',
    highlights: [
      'AI pipeline optimization',
      'Predictive modelling',
      'Feature engineering',
      'Data preprocessing',
      'Python and scikit-learn',
    ],
  },
]

export const projects: Project[] = [
  {
    title: 'Autonomous Multi-Agent Cyber Defense System',
    tech: ['Python', 'TensorFlow', 'LangChain', 'FAISS'],
    features: [
      'Real-time threat detection',
      'CVE intelligence',
      'Isolation Forest anomaly detection',
      'Automated response system',
      '85% detection accuracy',
    ],
  },
  {
    title: 'Smart Home Automation',
    tech: ['ESP32', 'Firebase', 'React Native', 'MQTT'],
    features: ['IoT automation', 'Voice commands', 'Energy optimization', 'Mobile control'],
  },
  {
    title: 'Decentralized IP Registry',
    tech: ['Solidity', 'React', 'Web3', 'IPFS'],
    features: ['Blockchain ownership', 'Smart contracts', 'Immutable records', 'Decentralized storage'],
  },
]

export const certifications = [
  'BCG GenAI Job Simulation',
  'Deloitte Cyber Simulation',
  'Accenture Data Analytics',
  'Data Science Job Simulation',
  'Data Analytics & Visualization',
  'Microsoft Generative AI Productivity Skills',
]
