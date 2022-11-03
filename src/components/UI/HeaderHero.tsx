import { useRecoilState } from 'recoil';
import holdingHands from '../../ressources/image/holding_hands.jpeg';
import { authAtom } from '../../store';
import ButtonLink from '../design-system/buttons/ButtonLink';

export default function HeaderHero(){
	const [ auth ] = useRecoilState(authAtom);
  return (
    <section>
	<div className="bg-yellow-300 text-white py-20 align-center">
		<div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
			<div className="flex flex-col lg:w-1/3 justify-center items-center lg:items-start text-center lg:text-left p-8 w-full">
			<h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Nous travaillons pour l’égalité fille garçon</h1>
            {
								auth === false ? <ButtonLink
								route="/contact"
								text="Contactez nous"
							/> :
							<ButtonLink
								route="/dashboard"
								text="Accéder au dashboard"
							/>}

			</div>
			<div className="hidden lg:block p-8 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
				<div className="h-48 flex flex-wrap content-center">
					<div
						className='m-auto'
					>
						<img className="lg:inline-block hidden xl:block max-w-md" src={holdingHands} alt="Hello"/>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
  )
}
