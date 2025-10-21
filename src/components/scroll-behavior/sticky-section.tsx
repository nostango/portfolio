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
    <div ref={ref} className="h-[150vh]">
      <div className={`sticky top-[40px] h-screen flex items-center justify-center z-10 ${className}`}>
        {children}
      </div>
    </div>
  );
}
