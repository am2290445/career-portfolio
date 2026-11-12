import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Aryanna Mason Portfolio',
  description: 'Career research, information systems, data careers, and professional portfolio.',
  lang: 'en-US',
  base: '/career-portfolio/',
  cleanUrls: true,
  themeConfig: {
    siteTitle: 'ARYANNA MASON / PORTFOLIO',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Career Atlas', link: '/careers/' },
      { text: 'About', link: '/about/' },
      { text: 'Professional Hub', link: '/professional-hub/' },
      { text: 'Research', link: '/research/' }
    ],
    sidebar: {
      '/careers/': [
        { text: 'Explore careers', link: '/careers/' },
        { text: 'Data & analytics', items: [
          { text: 'Data Analyst', link: '/careers/data-analyst' },
          { text: 'Business Intelligence Analyst', link: '/careers/business-intelligence-analyst' },
          { text: 'Data Engineer', link: '/careers/data-engineer' },
          { text: 'Analytics Engineer', link: '/careers/analytics-engineer' }
        ]},
        { text: 'Data science & software', items: [
          { text: 'Data Scientist', link: '/careers/data-scientist' },
          { text: 'Machine Learning Engineer', link: '/careers/machine-learning-engineer' },
          { text: 'Statistical Programmer', link: '/careers/statistical-programmer' },
          { text: 'Systems Analyst', link: '/careers/systems-analyst' }
        ]}
      ],
      '/professional-hub/': [
        { text: 'Professional presence', link: '/professional-hub/' },
        { text: 'LinkedIn organization', link: '/professional-hub/linkedin' },
        { text: 'Resume & evidence', link: '/professional-hub/resume' },
        { text: 'Projects portfolio', link: '/professional-hub/projects' }
      ],
      '/research/': [
        { text: 'Research method', link: '/research/' },
        { text: 'Skills roadmap', link: '/research/skills-roadmap' },
        { text: 'Source library', link: '/research/sources' },
        { text: 'Career reflections', link: '/research/reflections' }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/am2290445' }
    ],
    footer: {
      message: 'Built as a living record of learning, evidence, and exploration.',
      copyright: '© 2026 Aryanna Mason'
    }
  }
})
