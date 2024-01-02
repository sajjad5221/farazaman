import React from 'react';
import Circle from '../icons/Circle';

export default function SectionHeader({ title }: { title: string }) {
  return (
    <div className="w-full rounded-xl rounded-tl-[4rem] bg-brand-light flex items-center py-4">
      <div className="px-4">
        <Circle />
      </div>
      <p className="text-bold text-xl text-black">{title}</p>
    </div>
  );
}
