import '@src/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@src/components/atoms/Layout';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Head>
				<title>Seamswap</title>
				<meta
					name='description'
					content='Seamlessly swap between ILM positions with Seamless Protocol. Enable faster ILM strategy position swaps with reduced transaction fees.'
					key='desc'
				/>

				{/* Facebook Meta Tags */}
				<meta property='og:url' content='https://www.seamswap.com' />
				<meta property='og:type' content='website' />
				<meta property='og:title' content='Seamswap' />
				<meta
					property='og:description'
					content='Seamlessly swap between ILM positions with Seamless Protocol. Enable faster ILM strategy position swaps with reduced transaction fees.'
				/>
				<meta property='og:image' content='https://seamswap.com/seamswap.png' />

				{/* Twitter Meta Tags */}
				<meta name='twitter:card' content='summary_large_image' />
				<meta property='twitter:domain' content='seamswap.com' />
				<meta property='twitter:url' content='https://www.seamswap.com' />
				<meta name='twitter:title' content='Seamswap' />
				<meta
					name='twitter:description'
					content='Seamlessly swap between ILM positions with Seamless Protocol. Enable faster ILM strategy position swaps with reduced transaction fees.'
				/>
				<meta name='twitter:image' content='https://seamswap.com/seamswap.png' />

				{/* Favicon */}
				<link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
				<link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
				<link rel='manifest' href='/site.webmanifest' />
			</Head>

			<Component {...pageProps} />
		</Layout>
	);
}
