'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Clients } from '@/components/sections/Clients';
import { LatestJobs } from '@/components/sections/LatestJobs';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <Clients />
        <LatestJobs />
      </main>
      <Footer />
    </div>
  );
}
