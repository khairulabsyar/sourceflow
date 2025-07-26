'use client';

import { SearchBar } from '@/components/ui/SearchBar';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import { motion } from 'framer-motion';
import { stats } from '@/lib/constants';
import Image from 'next/image';

export function Hero() {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="relative overflow-hidden bg-[#064EA4] min-h-[600px] sm:min-h-[700px] lg:min-h-[600px] flex items-center">
      <div className="absolute -bottom-1 -right-1 h-24 w-24 rounded-tl-full bg-[#FCDF69] backdrop-blur-sm" />
      <div className="absolute -top-6 -left-6 h-32 w-32 rounded-full bg-[#F99D76] backdrop-blur-sm" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:flex lg:items-center lg:gap-x-10 lg:px-8 py-12 sm:py-16 lg:py-0">
        <div className="mx-auto w-full max-w-2xl lg:mx-0 lg:flex-auto lg:py-12">
          <AnimateOnScroll className="text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Elevate your <span className="text-yellow-300">career</span>
            </h1>
            <p className="mt-6 text-xl font-semibold leading-8 text-blue-100">Software Recruitment Specialists</p>
            <p className="mt-4 text-lg leading-8 text-blue-50">
              Connecting top tech talent with leading companies worldwide. Find your dream job or the perfect candidate
              today.
            </p>

            <div className="mt-10">
              <SearchBar
                onSearch={handleSearch}
                aria-label="Search jobs"
                placeholder="E.g. networking, python, remote"
                className="mx-auto lg:mx-0"
              />
              <p className="mt-4 text-sm text-blue-100">
                Browse our{' '}
                <a
                  href="#"
                  className="font-medium text-yellow-300 hover:text-yellow-200 transition-colors"
                >
                  popular searches
                </a>
              </p>
            </div>
          </AnimateOnScroll>
        </div>

        <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow flex justify-center lg:block">
          <AnimateOnScroll
            delay={1}
            direction="right"
            className="relative w-full max-w-sm lg:max-w-none mx-auto"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-gray-900/10 transition-all duration-300 hover:shadow-xl">
              <div className="relative aspect-[4/3] bg-[#064EA4]">
                <Image
                  src="/hero.png"
                  alt="Team of professionals working together"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            <motion.div 
              className="mt-8 grid grid-cols-3 gap-3 sm:gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    delayChildren: 0.3,
                    staggerChildren: 0.2
                  }
                }
              }}
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="overflow-hidden rounded-xl bg-white p-3 text-center shadow hover:shadow-md transition-shadow sm:p-4"
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: { y: 0, opacity: 1 }
                  }}
                >
                  <p className="text-xl font-bold text-indigo-600 sm:text-2xl">{stat.value}</p>
                  <p className="text-xs text-gray-600 sm:text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
