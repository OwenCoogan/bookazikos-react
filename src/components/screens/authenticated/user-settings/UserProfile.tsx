import { Link } from 'react-router-dom';
import { UserType } from '../../../design-system/@types';
import SmallDataCard from '../../../design-system/cards/small-data-card/SmallDataCard';


export default function UserProfile(user:UserType) {
  return (
    <div className='mt-200'>
  <section className="relative py-16 bg-yellowGray-200 mt-96">
    <div className="container mx-auto px-4">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
              <div className="relative">
                <img alt="..." src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"/>
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
              <div className="py-6 px-3 mt-32 sm:mt-0">
                <Link to="/edit-user" className="bg-yellow-500 active:bg-yellow-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                  Edit Profile
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4 lg:order-1">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <SmallDataCard
                  value={10}
                  text="Posts"
                />
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-4xl font-semibold leading-normal text-yellowGray-700 mb-2">
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-yellowGray-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-yellowGray-400"></i>
              Los Angeles, California
            </div>
            <div className="mb-2 text-yellowGray-600 mt-10">
              <i className="fas fa-briefcase mr-2 text-lg text-yellowGray-400"></i>Solution Manager - Creative Tim Officer
            </div>
            <div className="mb-2 text-yellowGray-600">
              <i className="fas fa-university mr-2 text-lg text-yellowGray-400"></i>University of Computer Science
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-yellowGray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <p className="mb-4 text-lg leading-relaxed text-yellowGray-700">
                  An artist of considerable range, Jenna the name taken by
                  Melbourne-raised, Brooklyn-based Nick Murphy writes,
                  performs and records all of his own music, giving it a
                  warm, intimate feel with a solid groove structure. An
                  artist of considerable range.
                </p>
                <a href="#pablo" className="font-normal text-yellow-500">Show more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  );
}
