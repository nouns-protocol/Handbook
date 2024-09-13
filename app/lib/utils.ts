import { Metadata } from 'next'

export function constructMetadata({
    title = 'Nouns Protocol',
    description = 'Nouns Protocol empowers users to lend, borrow, and swap tokens across EVM chains. Unlock new financial opportunities with advanced features like Smart Vaults for goal-based savings and diversified lending for optimized returns. Explore DeFi with maximum control and flexibility.',
    // image = '/assets/thumbnails/thumbnail.png',
    icons = '/logo/logo.svg',
    noIndex = false
}: {
    title?: string
    description?: string
    image?: string
    icons?: string
    noIndex?: boolean
} = {}): Metadata {
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            // images: [
            //   {
            //     url: image
            //   }
            // ]
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            // images: [image],
            creator: '@nounsprotocol'
        },
        icons,
        metadataBase: new URL('https://www.handbook.nounsprotocol.com'),
        ...(noIndex && {
            robots: {
                index: false,
                follow: false
            }
        })
    }
}
