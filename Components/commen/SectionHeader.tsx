import React from 'react';
import Circle from '../icons/Circle';

export default function SectionHeader({ title }: { title: string }) {
  return (
    <div className="w-full rounded-tl-full">
      <div className="px-4">
        <Circle />
      </div>
      <p>{title}</p>
    </div>
  );
}
