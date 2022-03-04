import { FooterLinkType } from '@gravyswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.gravyswap.com/contact-us',
      },
      {
        label: t('Brand'),
        href: 'https://docs.gravyswap.com/brand',
      },
      {
        label: t('Blog'),
        href: 'https://medium.com/gravy',
      },
      {
        label: t('Community'),
        href: 'https://docs.gravyswap.com/contact-us/telegram',
      },
      {
        label: t('GRAVY token'),
        href: 'https://docs.gravyswap.com/tokenomics/gravy',
      },
      {
        label: '—',
      },
      {
        label: t('Online Store'),
        href: 'https://gravyswap.creator-spring.com/',
        isHighlighted: true,
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://docs.gravyswap.com/contact-us/customer-support',
      },
      {
        label: t('Troubleshooting'),
        href: 'https://docs.gravyswap.com/help/troubleshooting',
      },
      {
        label: t('Guides'),
        href: 'https://docs.gravyswap.com/get-started',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/gravy',
      },
      {
        label: t('Documentation'),
        href: 'https://docs.gravyswap.com',
      },
      {
        label: t('Bug Bounty'),
        href: 'https://docs.gravyswap.com/code/bug-bounty',
      },
      {
        label: t('Audits'),
        href: 'https://docs.gravyswap.com/help/faq#is-gravy-safe-has-gravy-been-audited',
      },
      {
        label: t('Careers'),
        href: 'https://docs.gravyswap.com/hiring/become-a-chef',
      },
    ],
  },
]
