import type { NextPage } from 'next'
import Link from 'next/link'
const Home: NextPage = () => {
	return (
		<div className={'h-full w-full p-8'}>
			<h3 className={'text-2xl font-bold'}>Demo 列表</h3>
			<ul className={'mt-8 flex flex-col'}>
				{list.map(item => (
					<li key={item.path} className={'underline hover:text-amber-600'}>
						<Link href={`/demo/${item.path}`}>{item.label}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Home

const list = [
	{
		label: 'TransformObject',
		path: 'transform-object',
	},
]
