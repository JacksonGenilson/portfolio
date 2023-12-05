import { Inter } from 'next/font/google';
import '@/css/globals.scss';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Jackson Genilson Sinhori',
	description: 'My humble portfolio',
}

export default async function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				{children}
			</body>
		</html>
	)
}
