import React from 'react';

interface Logo {
  src: string;
  alt: string;
}

interface SponsorCarouselProps {
  logos: Logo[];
  speed?: number;
  logoWidth?: string;
  logoHeight?: string;
  spacing?: string;
  bgColor?: string;
  showTitle?: boolean;
  title?: string;
}

const SponsorCarousel: React.FC<SponsorCarouselProps> = ({ 
  logos = [],
  speed = 20,
  logoWidth = 'w-[120px]',
  logoHeight = 'h-[60px]',
  spacing = 'mx-8',
  bgColor = 'bg-white',
  showTitle = true,
  title = 'Dipercaya Oleh'
}) => {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className={`${bgColor} py-12 overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4">
        {showTitle && (
          <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-gray-200 mb-8">
            {title}
          </h2>
        )}
        
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex group">
            <div 
              className="flex animate-scroll group-hover:pause-scroll"
              style={{ animationDuration: `${speed}s` }}
            >
              {duplicatedLogos.map((logo, index) => (
                <div 
                  key={index}
                  className={`flex-shrink-0 flex items-center justify-center ${spacing}`}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={`${logoWidth} ${logoHeight} object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll linear infinite;
        }
        .group:hover .group-hover\\:pause-scroll {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default SponsorCarousel;