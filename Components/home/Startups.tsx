import React from 'react';
import SectionHeader from '../common/SectionHeader';
import Startup from './Startup';

export default function Startups() {
  return (
    <section className="bg-gray-50 pb-6" id="startups">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 gap-x-40">
        <SectionHeader title="استارتاپ های ما" />
        <div className="w-full text-black flex flex-col sm:flex-row items-center justify-center md:justify-between py-7">
          <Startup />
        </div>
      </div>
    </section>
  );
}
