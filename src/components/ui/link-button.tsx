import React from 'react';

interface LinkButtonProps {
  href: string;
  label: string; // For accessibility and tooltips
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, label }) => {
  let domain;
  try {
    domain = new URL(href).hostname;
  } catch (error) {
    console.error("Invalid URL provided to LinkButton:", href);
    return null;
  }

  // Use Google's public favicon service. `sz=64` requests a 64x64 pixel icon for better quality.
  const iconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;

  return (
    <a
      href={href}
      target="_blank" // Open in a new tab
      rel="noopener noreferrer" // Security best practice for external links
      aria-label={label}
      title={label}
      className="
        flex items-center justify-center
        w-12 h-12 bg-gradient-to-br from-[hsl(var(--custom-primary)/0.1)] via-[hsl(var(--custom-third)/0.1)] to-[hsl(var(--custom-fourth)/0.1)]
        rounded-full
        transition-all duration-300
        hover:bg-[hsl(var(--muted))] hover:scale-110 hover:shadow-lg
        focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]
      "
    >
      <img
        src={iconUrl}
        alt={`${label} icon`}
        width={28}
        height={28}
        className="rounded-sm" // Some favicons are not perfect circles
        // Handle potential loading errors for the favicon
        onError={(e) => {
          // If the favicon fails to load, you could hide the image
          // or replace it with a generic icon.
          (e.target as HTMLImageElement).style.display = 'none';
          // You could add a fallback icon or text here if you want.
        }}
      />
    </a>
  );
};

export default LinkButton;
