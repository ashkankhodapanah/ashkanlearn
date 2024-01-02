import React from "react";
import { Link } from "react-router-dom"
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
const footerNavigation = {
  solutions: [
    { name: "Marketing", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Commerce", href: "#" },
    { name: "Insights", href: "#" },  ],
  support: [
    { name: "Pricing", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
    { name: "API Status", href: "#" },  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" }, ],
  legal: [
    { name: "Claim", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" }, 
    { name: "Apiproducts", href: "#" }, ],
};



export default function Footer() {
  return (
    <>
      <footer className="p-4 mt-24 sm:mt-56 bg-slate-300 " aria-labelledby="footer-heading" >
        <h2 id="footer-heading" className="sr-only"> Footer </h2>
        <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8 ">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8 space-x-24 ">
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">
                    Solutions
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.solutions.map((item) => (
                        <li key={item.name}>
                        <Link  to={item.href}   className="text-sm leading-6 text-gray-600 hover:text-gray-900"  >
                        {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">
                    Support
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.support.map((item) => (
                      <li key={item.name}>
                        <Link  to={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900"  >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">
                    Company
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.company.map((item) => (
                      <li key={item.name}>
                        <Link  to={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">
                    Legal
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.legal.map((item) => (
                      <li key={item.name}>
                        <Link to={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900" >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <p className="text-sm leading-6 text-gray-600">
                Making the world a better place through constructing elegant
                hierarchies.
              </p>
              <div className="flex justify-start space-x-6 -ml-5">
                    <span className="sr-only">icon social</span>
                <BsFacebook className="h-8 w-8 text-yellow-600" aria-hidden="true"  />
                <BsInstagram className="h-8 w-8 text-yellow-600" aria-hidden="true"  />
                <BsTwitter  className="h-8 w-8 text-yellow-600" aria-hidden="true" />
                <BsGithub className="h-8 w-8 text-yellow-600" aria-hidden="true"  />
                <BsYoutube className="h-8 w-8 text-yellow-600" aria-hidden="true"  />
              </div>
              <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
                <p className="text-xs leading-5 text-gray-500">
                  &copy; 2020 Your Company, Inc. All rights reserved.
                </p>
              </div>
            </div>
       
          </div>
        </div>
      </footer>
    </>
  );
}
