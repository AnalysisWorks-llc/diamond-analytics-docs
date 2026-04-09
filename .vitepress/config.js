import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Diamond Analytics',
  description: 'Help and documentation for Diamond Analytics — baseball and softball player analytics',
  base: '/',
  srcDir: './docs',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#6366f1' }]
  ],

  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'Diamond Analytics Help',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started/' },
      { text: 'Scoring Games', link: '/scoring-games/' },
      { text: 'Voice Logging', link: '/voice-logging/' },
      { text: 'Analytics', link: '/analytics/' },
      { text: 'Training Plans', link: '/training/' },
      { text: 'Coach Notes', link: '/coach-notes/' },
      { text: 'Report Cards', link: '/report-cards/' },
      { text: 'Schedule', link: '/schedule/' },
      {
        text: 'More',
        items: [
          { text: 'Roster', link: '/roster/' },
          { text: 'Lineup Builders', link: '/lineup/' },
          { text: 'FAQ', link: '/faq/' }
        ]
      },
      { text: 'diamondanalytics.app', link: 'https://diamondanalytics.app' }
    ],

    sidebar: {
      '/getting-started/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Overview', link: '/getting-started/' },
            { text: 'Creating your account', link: '/getting-started/account-setup' },
            { text: 'Setting up your team', link: '/getting-started/team-setup' },
            { text: 'Inviting coaches and parents', link: '/getting-started/inviting-users' },
            { text: 'Installing on your phone', link: '/getting-started/installing-pwa' },
            { text: 'Subscription plans', link: '/getting-started/subscriptions' }
          ]
        }
      ],
      '/scoring-games/': [
        {
          text: 'Scoring Games',
          items: [
            { text: 'Overview', link: '/scoring-games/' },
            { text: 'Starting a game session', link: '/scoring-games/starting-a-game' },
            { text: 'Pitching logger', link: '/scoring-games/pitching-logger' },
            { text: 'At-bat logger', link: '/scoring-games/at-bat-logger' },
            { text: 'Fielding logger', link: '/scoring-games/fielding-logger' },
            { text: 'Baserunning logger', link: '/scoring-games/baserunning-logger' },
            { text: 'Score and inning tracker', link: '/scoring-games/score-tracker' },
            { text: 'Ending a game', link: '/scoring-games/ending-a-game' }
          ]
        }
      ],
      '/practice/': [
        {
          text: 'Practice Sessions',
          items: [
            { text: 'Overview', link: '/practice/' },
            { text: 'Team practice', link: '/practice/team-practice' },
            { text: 'Individual practice', link: '/practice/individual-practice' },
            { text: 'Mechanics assessments', link: '/practice/mechanics-assessments' }
          ]
        }
      ],
      '/voice-logging/': [
        {
          text: 'Voice Logging',
          items: [
            { text: 'Overview', link: '/voice-logging/' },
            { text: 'Getting started', link: '/voice-logging/getting-started' },
            { text: 'Desktop voice logging', link: '/voice-logging/desktop' },
            { text: 'Mobile voice logging', link: '/voice-logging/mobile' },
            { text: 'What to say', link: '/voice-logging/what-to-say' },
            { text: 'Tips for parent volunteers', link: '/voice-logging/parent-volunteers' }
          ]
        }
      ],
      '/analytics/': [
        {
          text: 'Analytics',
          items: [
            { text: 'Overview', link: '/analytics/' },
            { text: 'Pitching analytics', link: '/analytics/pitching' },
            { text: 'Hitting analytics', link: '/analytics/hitting' },
            { text: 'Fielding analytics', link: '/analytics/fielding' },
            { text: 'Baserunning analytics', link: '/analytics/baserunning' },
            { text: 'Mechanics assessments', link: '/analytics/mechanics' },
            { text: 'Team analytics', link: '/analytics/team' },
            { text: 'Understanding ERA', link: '/analytics/era-explained' }
          ]
        }
      ],
      '/training/': [
        {
          text: 'Training Plans',
          items: [
            { text: 'Overview', link: '/training/' },
            { text: 'How suggestions work', link: '/training/suggestions' },
            { text: 'Creating training plans', link: '/training/creating-plans' },
            { text: 'Drill search', link: '/training/drill-search' },
            { text: 'Tracking progress', link: '/training/tracking-progress' }
          ]
        }
      ],
      '/coach-notes/': [
        {
          text: 'Coach Notes',
          items: [
            { text: 'Overview', link: '/coach-notes/' },
            { text: 'Adding notes', link: '/coach-notes/adding-notes' },
            { text: 'AI note processing', link: '/coach-notes/ai-processing' },
            { text: 'Voice notes', link: '/coach-notes/voice-notes' },
            { text: 'Connecting to training plans', link: '/coach-notes/training-plans' }
          ]
        }
      ],
      '/roster/': [
        {
          text: 'Roster',
          items: [
            { text: 'Overview', link: '/roster/' },
            { text: 'Managing your roster', link: '/roster/managing-roster' },
            { text: 'Player profiles', link: '/roster/player-profiles' }
          ]
        }
      ],
      '/lineup/': [
        {
          text: 'Lineup Builders',
          items: [
            { text: 'Overview', link: '/lineup/' },
            { text: 'Defensive lineup builder', link: '/lineup/defensive' },
            { text: 'Batting lineup builder', link: '/lineup/batting' }
          ]
        }
      ],
      '/schedule/': [
        {
          text: 'Schedule and Tournaments',
          items: [
            { text: 'Overview', link: '/schedule/' },
            { text: 'Scheduling games', link: '/schedule/scheduling-games' },
            { text: 'Tournament management', link: '/schedule/tournaments' },
            { text: 'Recording results', link: '/schedule/recording-results' }
          ]
        }
      ],
      '/report-cards/': [
        {
          text: 'Player Report Cards',
          items: [
            { text: 'Overview', link: '/report-cards/' },
            { text: 'Generating report cards', link: '/report-cards/generating' },
            { text: 'Sharing with families', link: '/report-cards/sharing' },
            { text: 'PDF export', link: '/report-cards/pdf-export' }
          ]
        }
      ],
      '/faq/': [
        {
          text: 'FAQ',
          items: [
            { text: 'Common questions', link: '/faq/' },
            { text: 'Troubleshooting', link: '/faq/troubleshooting' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AnalysisWorks-llc' }
    ],

    footer: {
      message: 'Baseball and softball analytics for youth coaches',
      copyright: 'Copyright © 2026 Diamond Analytics — AnalysisWorks LLC'
    },

    search: {
      provider: 'local'
    }
  }
})
