import { ClientsCompanies, ClientsContainer, ClientsItem } from '@/lib/constants';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export function Clients() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [imageLoading, setImageLoading] = useState<Record<string, boolean>>({});

  const handleImageError = (companyName: string) => {
    setImageErrors((prev) => ({ ...prev, [companyName]: true }));
    setImageLoading((prev) => ({ ...prev, [companyName]: false }));
  };

  const handleImageLoad = (companyName: string) => {
    setImageLoading((prev) => ({ ...prev, [companyName]: false }));
  };

  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Who we work with</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by leading tech companies
          </p>
        </div>

        <motion.div
          variants={ClientsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mx-auto mt-16 grid max-w-4xl grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
        >
          {ClientsCompanies.map((company) => (
            <motion.div
              key={company.name}
              variants={ClientsItem}
              className="col-span-1 flex justify-center"
            >
              <div className="relative h-12 w-full px-2">
                {imageErrors[company.name] ? (
                  <div className="h-full w-full flex items-center justify-center bg-gray-100 rounded">
                    <span className="text-sm font-medium text-gray-500">{company.name}</span>
                  </div>
                ) : (
                  <>
                    {imageLoading[company.name] && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded animate-pulse">
                        <div className="h-6 w-20 bg-gray-200 rounded"></div>
                      </div>
                    )}
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      width={150}
                      height={48}
                      className="h-full w-auto object-contain opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 150px"
                      priority
                      onError={() => handleImageError(company.name)}
                      onLoad={() => handleImageLoad(company.name)}
                      onLoadStart={() => setImageLoading((prev) => ({ ...prev, [company.name]: true }))}
                    />
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 flex justify-center">
          <div className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            <span className="hidden md:inline">Trusted by 1000+ companies worldwide. </span>
            <a
              href="#"
              className="font-semibold text-blue-600"
            >
              <span
                className="absolute inset-0"
                aria-hidden="true"
              />
              See all partners <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
