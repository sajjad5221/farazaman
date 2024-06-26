import React from 'react';
// import Circle from '../icons/Circle';

export default function SectionHeader({ title }: { title: string }) {
  return (
    <div className="w-full text-center">
      <div className="px-4">
        {/* <Circle /> */}
      </div>
      <p className="font-bold text-3xl text-brand ">{title}</p>
    </div>
  );
}
