import { Link } from 'react-router-dom';

export default function VideoHero() {
  return (
    <section>
	<div className="bg-black text-white py-20">
		<div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
			<div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
					<div className="h-48 flex flex-wrap content-center">
					<iframe
            src="https://www.youtube.com/embed/AU7nYY2OB28"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="m-auto sm:aspect-square lg:aspect-video lg:w-3/4"
          />
				</div>
			</div>
			<div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
				<h1 className="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">Tequila</h1>
				<h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">Un projet pour l'égalité fille garçon
				</h2>
				<p className="text-sm md:text-base text-gray-50 mb-4">Explore your favourite events and
					register now to showcase your talent and win exciting prizes.</p>
				<Link to="#"
					className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
					Explore Now</Link>
			</div>

		</div>
	</div>
</section>
  )
}
