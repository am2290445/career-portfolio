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
      { text: 'Start here', link: '/start-here' },
      { text: 'Opportunities', link: '/opportunities/' },
      { text: 'Skills', link: '/skills/' },
      {
        text: 'Research',
        items: [
          { text: 'AI + business + IS', link: '/research/' },
          { text: 'Sources', link: '/sources/' },
          { text: 'Peer review', link: '/peer-review' }
        ]
      },
      {
        text: 'Explore',
        items: [
          { text: 'Career guide', link: '/careers/' },
          { text: 'Employer comparison', link: '/careers/employer-comparison' },
          { text: 'Portfolio roadmap', link: '/portfolio-roadmap' },
          { text: 'About', link: '/about/' }
        ]
      }
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
        { text: 'Sources', link: '/sources/' },
        { text: 'Peer review', link: '/peer-review' },
        { text: 'Skills', link: '/skills/' },
        { text: 'Career opportunities', link: '/opportunities/' }
      ],
      '/sources/': [
        { text: 'Research sources', link: '/sources/' },
        { text: 'AI + business + IS', link: '/research/' },
        { text: 'Employer comparison', link: '/careers/employer-comparison' }
      ],
      '/peer-review': [
        { text: 'Peer review', link: '/peer-review' },
        { text: 'Research method', link: '/research/' }
      ],
      '/portfolio-roadmap': [
        { text: 'Portfolio roadmap', link: '/portfolio-roadmap' },
        { text: 'Skills', link: '/skills/' },
        { text: 'Opportunities', link: '/opportunities/' }
      ],
      '/careers/': [
        { text: 'Career guide', link: '/careers/' },
        { text: 'Employer comparison', link: '/careers/employer-comparison' },
        { text: 'Opportunities', link: '/opportunities/' },
        { text: 'Skills', link: '/skills/' }
      ]
    },
    search: { provider: 'local' },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/am2290445/career-portfolio' }
    ],
    footer: {
      message: 'Explore a question. Create something useful.',
      copyright: '© 2026 Aryanna Mason'
    }
  }
})
