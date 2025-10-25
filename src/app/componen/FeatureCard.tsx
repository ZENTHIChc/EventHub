import React from 'react';

interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  description: string;
  bgType?: 'gradient' | 'solid';
  bgColor?: string;
  gradientFrom?: string;
  gradientTo?: string;
  iconSize?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon,
  title,
  description,
  bgType = 'gradient',
  bgColor = 'bg-blue-500',
  gradientFrom = 'from-blue-500',
  gradientTo = 'to-cyan-600',
  iconSize = 'medium',
  onClick
}) => {
  const iconSizes = {
    small: { container: 'w-12 h-12', icon: 'w-6 h-6' },
    medium: { container: 'w-14 h-14', icon: 'w-7 h-7' },
    large: { container: 'w-16 h-16', icon: 'w-8 h-8' }
  };

  const bgClass = bgType === 'gradient' 
    ? `bg-gradient-to-br ${gradientFrom} ${gradientTo}` 
    : bgColor;

  return (
    <div 
      onClick={onClick}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 flex flex-col h-full"
    >
      {/* Icon Container */}
      <div 
        className={`
          ${iconSizes[iconSize].container}
          ${bgClass}
          rounded-xl
          flex items-center justify-center
          shadow-md
          mb-4
        `}
      >
        <Icon className={`${iconSizes[iconSize].icon} text-white`} strokeWidth={2.5} />
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;