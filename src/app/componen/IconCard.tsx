import React from 'react';

interface IconCardProps {
    icon: React.ComponentType<{ className?: string }>;
    label?: string;
    size?: 'small' | 'medium' | 'large';
    bgType?: 'solid' | 'gradient';
    bgColor?: string;
    gradientFrom?: string;
    gradientTo?: string;
    iconColor?: string;
    textColor?: string;
    hoverEffect?: 'scale' | 'shadow' | 'both' | 'lift';
    onClick?: () => void;
}

const IconCard: React.FC<IconCardProps> = ({
    icon: Icon,
    label,
    size = 'medium',
    bgType = 'solid',
    bgColor = 'bg-blue-500',
    gradientFrom = 'from-blue-500',
    gradientTo = 'to-purple-600',
    iconColor = 'text-white',
    textColor = 'text-gray-700 dark:text-gray-200',
    hoverEffect = 'scale',
    onClick
}) => {
    const sizeClasses = {
        small: {
            container: 'w-18 h-18',
            icon: 'w-8 h-8',
            text: 'text-xs mt-2'
        },
        medium: {
            container: 'w-28 h-28',
            icon: 'w-12 h-12',
            text: 'text-sm mt-3'
        },
        large: {
            container: 'w-36 h-36',
            icon: 'w-16 h-16',
            text: 'text-base mt-4'
        }
    };

    const hoverEffects = {
        scale: 'hover:scale-110',
        shadow: 'hover:shadow-2xl',
        both: 'hover:scale-105 hover:shadow-2xl',
        lift: 'hover:-translate-y-2 hover:shadow-xl'
    };

    const bgClass = bgType === 'gradient'
        ? `bg-gradient-to-br ${gradientFrom} ${gradientTo}`
        : bgColor;

    return (
        <div className="flex flex-col items-center">
            <div
                onClick={onClick}
                className={`
          ${sizeClasses[size].container}
          ${bgClass}
          ${hoverEffects[hoverEffect]}
          rounded-xl
          flex items-center justify-center
          cursor-pointer
          transition-all duration-300
          shadow-lg
        `}
            >
                <Icon className={`${sizeClasses[size].icon} ${iconColor}`} />
            </div>
            {label && (
                <p className={`${sizeClasses[size].text} ${textColor} font-medium text-center max-w-[120px]`}>
                    {label}
                </p>
            )}
        </div>
    );
};

export default IconCard;