import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import AntdProvider from './AntdRegistry'
import { VKMetrika, VKMetrikaNoScript } from './VKMetrika'
import { YandexMetrika, YandexMetrikaNoScript } from './YandexMetrika'

const poppins = Poppins({
	subsets: ['latin-ext'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-poppins'
})

export const metadata: Metadata = {
	title: '0→1',
	description:
		'Платформа и комьюнити для новых ИП: шаги после регистрации, налоги и первые клиенты.',
	icons: {
		icon: 'image.png'
	}
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<head>
				<VKMetrika />
				<YandexMetrika />
			</head>
			<body className={poppins.className}>
				<VKMetrikaNoScript />
				<YandexMetrikaNoScript />
				<AntdProvider>{children}</AntdProvider>
			</body>
		</html>
	)
}
