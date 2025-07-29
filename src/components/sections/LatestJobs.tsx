'use client';

import { Button } from '@/components/ui/Button';
import { JobCard } from '@/components/ui/JobCard';
import { jobs } from '@/lib/constants';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function LatestJobs() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const visibleJobs = jobs.slice(currentIndex, currentIndex + 3);
  const totalJobs = jobs.length;

  const nextSlide = () => {
    const newIndex = Math.min(currentIndex + 3, totalJobs - 3);
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };

  const prevSlide = () => {
    const newIndex = Math.max(currentIndex - 3, 0);
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#D7E7FB] px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Latest Jobs</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">Browse our most recent job opportunities</p>
        </div>

        <div className="mt-12 px-4 sm:px-6">
          <div className="flex justify-between items-center mb-6 max-w-7xl mx-auto">
            <h3 className="text-lg font-medium text-gray-900">
              {currentIndex + 1}-{Math.min(currentIndex + 3, totalJobs)} of {totalJobs} jobs
            </h3>
            <div className="flex space-x-2">
              <motion.button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className={`p-2 rounded-full transition-all duration-200 ${
                  currentIndex === 0 ? 'text-gray-300' : 'text-gray-700 hover:bg-gray-100 hover:scale-105'
                }`}
                aria-label="Previous slide"
                whileHover={currentIndex === 0 ? {} : { scale: 1.05 }}
                whileTap={currentIndex === 0 ? {} : { scale: 0.95 }}
              >
                <ArrowLeft className="h-5 w-5" />
              </motion.button>
              <motion.button
                onClick={nextSlide}
                disabled={currentIndex >= totalJobs - 3}
                className={`p-2 rounded-full transition-all duration-200 ${
                  currentIndex >= totalJobs - 3 ? 'text-gray-300' : 'text-gray-700 hover:bg-gray-100 hover:scale-105'
                }`}
                aria-label="Next slide"
                whileHover={currentIndex >= totalJobs - 3 ? {} : { scale: 1.05 }}
                whileTap={currentIndex >= totalJobs - 3 ? {} : { scale: 0.95 }}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {visibleJobs.map((job, index) => {
                // The second card on each slide is featured
                const isFeatured = index === 1;
                const variants: Array<'yellow' | 'gray' | 'peach'> = ['yellow', 'gray', 'peach'];
                const variant = variants[index % variants.length];

                return (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <JobCard
                      {...job}
                      isFeatured={isFeatured}
                      variant={variant}
                      className="w-full h-full"
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 text-center">
            <Button
              variant="outline"
              className="px-8 py-3"
            >
              View all jobs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
