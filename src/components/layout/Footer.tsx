import { footerNavigation } from '@/lib/constants';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[#064EA4] text-white"
      aria-labelledby="footer-heading"
    >
      <h2
        id="footer-heading"
        className="sr-only"
      >
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div
            className="space-y-8
"
          >
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white">Software Recruitment co.</span>
            </div>
            <p className="text-sm leading-6 text-blue-100">
              Connecting top tech talent with innovative companies worldwide. Your success is our mission.
            </p>
            <div className="flex space-x-6">
              {footerNavigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-yellow-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon
                    className="h-6 w-6"
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Explore</h3>
                <ul
                  role="list"
                  className="mt-6 space-y-4"
                >
                  {footerNavigation.explore.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-white hover:text-yellow-300"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Sectors</h3>
                <ul
                  role="list"
                  className="mt-6 space-y-4"
                >
                  {footerNavigation.sectors.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-white hover:text-yellow-300"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                <ul
                  role="list"
                  className="mt-6 space-y-4"
                >
                  {footerNavigation.services.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-white hover:text-yellow-300"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                <ul
                  role="list"
                  className="mt-6 space-y-4"
                >
                  {footerNavigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-white hover:text-yellow-300"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-white">
            &copy; {currentYear} Software Recruitment co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
