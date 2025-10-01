'use client';

import { useRef } from 'react';

type StickySectionProps = {
  children: React.ReactNode;
  className?: string;
};

export default function StickySection({
  children,
  className,
}: StickySectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className="h-[200vh]">
      <div className={`sticky top-0 h-screen ${className}`}>
        {children}
      </div>
    </div>
  );
}
