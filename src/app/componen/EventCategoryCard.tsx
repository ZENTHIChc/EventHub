import React from 'react';

interface EventCategoryCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  count: string;
  bgType?: 'gradient' | 'solid';
  bgColor?: string;
  gradientFrom?: string;
  gradientTo?: string;
  iconSize?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

const EventCategoryCard: React.FC<EventCategoryCardProps> = ({
  icon: Icon,
  title,
  count,
  bgType = 'gradient',
  bgColor = 'bg-blue-500',
  gradientFrom = 'from-blue-500',
  gradientTo = 'to-purple-600',
  iconSize = 'medium',
  onClick
}) => {
  const iconSizes = {
    small: 'w-12 h-12',
    medium: 'w-16 h-16',
    large: 'w-20 h-20'
  };

  const iconIconSizes = {
    small: 'w-6 h-6',
    medium: 'w-8 h-8',
    large: 'w-10 h-10'
  };

  const bgClass = bgType === 'gradient'
    ? `bg-gradient-to-br ${gradientFrom} ${gradientTo}`
    : bgColor;

  return (
    <div
      onClick={onClick}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 flex flex-col items-center group"
    >
      {/* Icon Card */}
      <div
        className={`
          ${iconSizes[iconSize]}
          ${bgClass}
          rounded-2xl
          flex items-center justify-center
          shadow-lg
          transition-all duration-300
          group-hover:scale-110
        `}
      >
        <Icon className={`${iconIconSizes[iconSize]} text-white`} />
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-4 text-center">
        {title}
      </h3>

      {/* jumlah item */}
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 text-center">
        {count}
      </p>
    </div>
  );
};

export default EventCategoryCard;