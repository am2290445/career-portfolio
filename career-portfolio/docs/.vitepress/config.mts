import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Aryanna Mason | AI, Business & Information Systems',
  description: 'Career opportunities, skills, and simple research about AI, business, and information systems.',
  lang: 'en-US',
  base: '/career-portfolio/',
  cleanUrls: true,
  themeConfig: {
    siteTitle: 'ARYANNA / CAREER FIELDNOTES',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Opportunities', link: '/opportunities/' },
      { text: 'Skills', link: '/skills/' },
      { text: 'AI + IS', link: '/research/' },
      { text: 'Career guide', link: '/careers/' },
      { text: 'About', link: '/about/' }
    ],
    sidebar: {
      '/opportunities/': [
        { text: 'Internships, co-ops & jobs', link: '/opportunities/' },
        { text: 'Employer comparison', link: '/careers/employer-comparison' }
      ],
      '/skills/': [
        { text: 'Skills for AI + IS', link: '/skills/' },
        { text: 'Current opportunities', link: '/opportunities/' }
      ],
      '/research/': [
        { text: 'AI + business + IS', link: '/research/' },
        { text: 'Skills', link: '/skills/' },
        { text: 'Career opportunities', link: '/opportunities/' }
      ],
      '/careers/': [
        { text: 'Career guide', link: '/careers/' },
        { text: 'Employer comparison', link: '/careers/employer-comparison' },
        { text: 'Opportunities', link: '/opportunities/' },
        { text: 'Skills', link: '/skills/' }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/am2290445/career-portfolio' }
    ],
    footer: {
      message: 'Explore a question. Create something useful.',
      copyright: '© 2026 Aryanna Mason'
    }
  }
})
