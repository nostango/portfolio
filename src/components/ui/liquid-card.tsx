import React from 'react';

type LiquidCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function LiquidCard({ children, className = '' }: LiquidCardProps) {
  return (
    <div className={`relative w-full ${className}`}>
      {/* Liquid gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--custom-primary)/0.1)] via-[hsl(var(--custom-third)/0.1)] to-[hsl(var(--custom-fourth)/0.1)] rounded-3xl blur-xl"></div>

      {/* Main content box */}
      <div className="relative bg-gradient-to-br from-[hsl(var(--card)/0.4)] to-[hsl(var(--card)/0.1)] backdrop-blur-md border border-[hsl(var(--border)/0.3)] rounded-3xl p-8 md:p-10">
        {children}
      </div>
    </div>
  );
}
