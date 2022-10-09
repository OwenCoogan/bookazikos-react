import { Link } from 'react-router-dom';
import holdingHands from '../../ressources/image/holding_hands.jpeg';

export default function HeaderHero() {
  return (
    <section>
	<div className="bg-black text-white py-20">
		<div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
			<div className="flex flex-col lg:w-1/3 justify-center items-start p-8 w-full">
				<h1 className="text-3xl md:text-5xl py-2 text-yellow-300 tracking-loose">Crece en Libertad</h1>
				<p className="text-sm md:text-base text-gray-50 mb-4">Nous travaillons pour l’égalité fille garçon</p>
				<Link to="#"
					className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
					Contactez-Nous</Link>
			</div>
			<div className="p-8 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
				<div className="h-48 flex flex-wrap content-center">
					<div
						className='m-auto'
					>
						<img className="inline-block hidden xl:block max-w-md" src={holdingHands} alt="Hello"/>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
  )
}
