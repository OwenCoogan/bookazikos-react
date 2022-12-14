import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import logo from '../../ressources/image/logo.jpeg';
import { authAtom, userAtom } from '../../store';
import { getAdminData } from '../../store/queries/users/auth';
import Button from '../design-system/buttons/Button';
import DropdownLink from '../design-system/dropdown/user-dropdown/DropdownLink';
import UserDropdown from '../design-system/dropdown/user-dropdown/UserDropdown';

type HeaderProps = {
  authenticated: boolean,
}



export default function Header({
  authenticated
}:HeaderProps){
  const navigate = useNavigate();
  const user = useRecoilState(userAtom)[0].user;
  const setUser = useSetRecoilState(userAtom);
  const {data} = useQuery('get', getAdminData);
  return (
    <>
      <header>
        <nav className=" border-gray-200 px-4 lg:px-6 py-2.5 bg-gray-50 dark:bg-gray-800">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <Link to="/" className="flex items-center">
                    <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                </Link>
                <div className="flex items-center lg:order-2">


                    {
                      authenticated === false && (
<>
                       <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 mr-4">Contact</Link>
                        <Link to="/login" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</Link></>
                      )
                    }

            {
                  authenticated === true && (
                  <div
                    className="flex items-center justify-end px-4 py-3 text-right sm:px-6"
                  >
                    <UserDropdown
                      user={
                        user
                      }
                      draftCount={data?.numberOfDrafts}
                    />
                  </div>
                  )
                }
                    <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                      {
                        authenticated === true && (
                        <>
                          <li>
                            <Link to="/create-post">
                              Create Post
                            </Link>
                          </li>
                          <li>
                          <Link to="/dashboard" className="block py-2 pr-4 pl-3 text-white rounded bg-yellow-700 lg:bg-transparent lg:text-yellow-700 lg:p-0 dark:text-white" aria-current="page">Dashboard</Link>
                          </li>
                        </>
                        )
                      }
                      <li>
                        <Link
                          to="/about"
                        >
                          About
                        </Link>
                      </li>
                    </ul>
                </div>

            </div>
        </nav>

    </header>
    </>
  )
}
