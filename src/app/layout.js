import '@/css/index.scss';

export const metadata = {
	title: 'Jackson Genilson Sinhori',
	description: 'My humble portfolio',
}

export default async function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<main>
					{children}
				</main>
			</body>
		</html>
	)
}
