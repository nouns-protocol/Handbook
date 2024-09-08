import { type HomeLayoutProps } from 'fumadocs-ui/home-layout'
import Image from 'next/image'

export const baseOptions: HomeLayoutProps = {
  nav: {
    title: (
      <>
        <Image src='/logo/logo.svg' alt='Nouns Protocol' width={15} height={15} />
        <span className='text-foreground'>Nouns Protocol</span>
      </>
    ),
  },
  links: [
    {
      text: 'Website',
      url: 'https://www.nounsprotocol.com',
      active: 'nested-url',
      icon: (
        <Image src='/assets/icon/globe.svg' alt='Website' width={15} height={15} />
      )
    },
    {
      text: 'GitHub',
      url: 'https://github.com/nouns-protocol',
      active: 'nested-url',
      icon: (
        <div>
          <Image src='/assets/icon/github-light.svg' alt='GitHub' className='block dark:hidden' width={15} height={15} />
          <Image src='/assets/icon/github-dark.svg' alt='GitHub' className='hidden dark:block' width={15} height={15} />
        </div>
      )
    },
    {
      text: 'X/Twitter',
      url: 'https://x.com/NounsProtocol',
      active: 'nested-url',
      icon: (
        <div>
          <Image src='/assets/icon/twitter-light.svg' alt='Twitter' className='block dark:hidden' width={15} height={15} />
          <Image src='/assets/icon/twitter-dark.svg' alt='Twitter' className='hidden dark:block' width={10} height={10} />
        </div>
      )
    },
    {
      text: 'Pitch Deck',
      url: 'https://www.nounsprotocol.com',
      active: 'nested-url',
      icon: (
        <Image src='/assets/icon/presentation.svg' alt='Pitch Deck' width={15} height={15} />
      )
    },
  ],
};
