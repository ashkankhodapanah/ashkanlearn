import React, { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon as XMarkIconOutline,
} from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import menusApi from "../../api/menusApi";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Product", href: "/product" },
  { name: "Features", href: "/features" },
  { name: "Marketplace", href: "/marketplace" },
  { name: "Company", href: "/company" },
];

export default function NavbarTop() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const location = useLocation();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();

  const handleLogout = () => {
    // اضافه کردن اکشن یا فرآیند خروج در AuthService
    // به عنوان مثال:
    // dispatch(logout());
    // بر اساس فرضیه استفاده از logout از AuthService
    navigate("/"); // رفتن به صفحه اصلی پس از خروج
  };

  useEffect(() => {
    menusApi
      .getAllMenus()
      .then((response) => {
        console.log("Menus:", response.data);
        const titles = response.data.map((menu) => menu.title);
        console.log("Titles:", titles);
      })
      .catch((error) => {
        console.error("Error fetching menus:", error);
      });
  }, []);

  return (
    <>
      <header className="bg-yellow-600">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 md:px-8"
          aria-label="Global"
        >
          <div className="flex ">
            
            <div className="flex md:flex-1">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt=""
                />
              </Link>
            </div>
            <div className="flex md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-8 w-8" aria-hidden="true" />
              </button>
            </div>
            
            <div className="hidden md:flex md:gap-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-semibold leading-6 ${
                    location.pathname === item.href
                      ? "text-yellow-900"
                      : "text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex md:flex-1 md:justify-end">
            {isLoggedIn ? (
              <>
                <div
                  className="relative inline-block text-left"
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                >
                  <p className="text-xs font-semibold leading-6 text-white cursor-pointer">
                    سلام خوش آمدید
                  </p>
                  {userMenuOpen && (
                    <div className="origin-top-right absolute -right-8 mt-3 w-32 rounded-md shadow-lg bg-yellow-500 ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                      <div className="p-2 py-1">
                        <button
                          onClick={() => console.log("User clicked")}
                          className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-orange-600"
                        >
                          User
                        </button>
                        <button
                          onClick={handleLogout}
                          className="block w-full text-left px-4 py-2 text-sm text-yellow-900 hover:bg-orange-600"
                        >
                          Log out
                        </button>
                      </div>
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
          className="md:hidden"
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
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`-mx-3 block rounded-md px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-800 ${
                        location.pathname === item.href
                          ? "text-yellow-900"
                          : "text-white"
                      }`}
                    >
                      {" "}
                      {item.name}{" "}
                    </Link>
                  ))}
                </div>

                <div>
                  {isLoggedIn ? (
                    <div>
                      <Link
                        to="/"
                        className="-mx-3 block rounded-md px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                      >
                        user
                      </Link>

                      <div>
                        <Link
                          to="/"
                          className="-mx-3 block rounded-md px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                        >
                          Log out
                        </Link>
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
