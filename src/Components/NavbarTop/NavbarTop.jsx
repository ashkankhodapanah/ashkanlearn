import React, { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon as XMarkIconOutline,
} from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import menusApi from "../../api/menusApi";
import { logout } from "../../features/Auth/AuthSlice";

export default function NavbarTop() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [menuTopbar, setmenuTopbar] = useState([]);
  const location = useLocation();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const current = useSelector((state) => state.auth.current);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    menusApi.getAllMenus().then((response) => {
      setmenuTopbar(response.data);    });  }, []);

  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <header className="bg-yellow-600 px-4">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8"
          aria-label="Global"
        >
          <div className="flex ">
            <div className="hidden lg:flex lg:gap-x-8 ml-7">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt=""
                />
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-8 w-8" aria-hidden="true" />
              </button>
            </div>
            <ul className="hidden lg:flex lg:gap-x-10">
              <li>
                <Link
                  to="/"
                  className={`text-sm font-semibold leading-6 ${
                    location.pathname === "/" ? "text-yellow-900" : "text-white"
                  }`}
                >
                  صفحه اصلی
                </Link>
              </li>
              {menuTopbar.map((menu, index) => (
                <li key={index} className="group relative hover:bg-orange-900">
                  <Link
                    to={`${menu.href}`}
                    className="text-white transition duration-300 "
                  >
                    {menu.title}
                    {menu.submenus.length !== 0 && (
                      <ul className="absolute hidden space-y-2 bg-yellow-600 text-white  mt-2 p-2 rounded-lg group-hover:block  z-50 w-48">
                        {menu.submenus.map((submenu, index) => (
                          <li key={index} className="hover:bg-orange-900 ">
                            <Link to={submenu.href}>{submenu.title}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {isLoggedIn ? (
              <>
                <div
                  className="relative inline-block text-left"
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                >
                  <p className="text-xs font-semibold leading-6 text-white cursor-pointer">
                    سلام {current.name} عزیز خوش امدید
                  </p>
                  {userMenuOpen && (
                    <div className="origin-top-right absolute -right-2 mt-3 w-44 rounded-md shadow-lg bg-yellow-600 ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                      <button
                        onClick={() => console.log("User clicked")}
                        className="block w-full  px-4 py-2 text-sm text-white hover:bg-orange-600"
                      >
                        <Link to="/profile">پروفایل {current.name}</Link>
                      </button>
                      <button
                        onClick={handleLogout}
                        className="block w-full  px-4 py-2 text-sm text-white hover:bg-orange-600"
                      >
                        خروج
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <Link
                to="/login"
                className="text-sm font-semibold leading-6 text-white"
              >
                Log in <span aria-hidden="true">&rarr;</span>
              </Link>
            )}
          </div>
        </nav>

        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full h-full overflow-y-auto bg-yellow-600 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt=""
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-white"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIconOutline className="h-8 w-8" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/25">
                <div className="space-y-2 py-2">
                  <Link
                    to="/"
                    className={`-mx-3 block rounded-md px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-800 ${
                      location.pathname === "/"
                        ? "text-yellow-900"
                        : "text-white"
                    }`}
                  >
                    صفحه اصلی
                  </Link>
                  {menuTopbar.map((item) => (
                    <Link
                      key={item._id}
                      to={item.href}
                      className={`-mx-3 block rounded-md px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-800 ${
                        location.pathname === item.href
                          ? "text-yellow-900"
                          : "text-white"
                      }`}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>

                <div>
                  {isLoggedIn ? (
                    <div>
                      <button className="-mx-3 block rounded-md px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800">
                        <Link to="/profile">پروفایل {current.name}</Link>
                      </button>

                      <div>
                        <button
                          onClick={handleLogout}
                          className="-mx-3 block rounded-md px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                        >
                          خروج
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="py-6">
                      <Link
                        to="/login"
                        className="-mx-3 block rounded-md px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                      >
                        Log in
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
}
