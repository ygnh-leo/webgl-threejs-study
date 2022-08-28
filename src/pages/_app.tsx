import '~/styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div>
			<header
				className={'border-b border-r-gray-200 px-8 py-4 text-2xl font-bold'}
			>
				<Link href='/' className={'hover:text-amber-600'}>
					webGL in Three.js
				</Link>
			</header>
			<Component {...pageProps} />
		</div>
	)
}

export default MyApp
