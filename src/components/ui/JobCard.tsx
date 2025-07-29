import { cardVariants, variantStyles } from '@/lib/constants';
import { JobCardProps } from '@/lib/definitions';
import { motion } from 'framer-motion';
import { ArrowRight, Banknote, Briefcase, Clock, MapPin } from 'lucide-react';
import { Button } from './Button';

export function JobCard({
  title,
  company,
  location,
  salary,
  type,
  description,
  postedDate,
  className = '',
  variant: propVariant = 'default',
  isFeatured = false,
}: JobCardProps) {
  // Determine the actual variant to use
  const variant = isFeatured ? 'featured' : propVariant;
  const styles = variantStyles[variant];

  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl p-6 h-full flex flex-col transition-all duration-300 ${styles.container} ${className}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
    >
      {variant === 'featured' && (
        <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg rounded-tr-xl">
          Featured
        </div>
      )}

      <div className="flex items-start justify-between mb-4">
        <div>
          <span className={`inline-flex items-center rounded-full px-3 py-0.5 text-xs font-medium ${styles.typeBadge}`}>
            {type}
          </span>
          <h3 className={`mt-3 text-lg font-bold ${styles.textColor}`}>{title}</h3>
          <p className={`text-sm ${styles.secondaryTextColor}`}>{company}</p>
        </div>
        <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg bg-white shadow-sm">
          <div className={`h-full w-full flex items-center justify-center ${styles.iconColor}`}>
            <Briefcase className="h-5 w-5" />
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-2.5 mb-4">
        <div className="flex items-center text-sm">
          <MapPin className={`mr-2 h-4 w-4 flex-shrink-0 ${styles.iconColor}`} />
          <span className={styles.secondaryTextColor}>{location}</span>
        </div>
        <div className="flex items-center text-sm">
          <Banknote className={`mr-2 h-4 w-4 flex-shrink-0 ${styles.iconColor}`} />
          <span className={styles.secondaryTextColor}>{salary}</span>
        </div>
        <div className="flex items-center text-sm">
          <Clock className={`mr-2 h-4 w-4 flex-shrink-0 ${styles.iconColor}`} />
          <span className={styles.secondaryTextColor}>Posted {postedDate}</span>
        </div>
      </div>

      <p className={`mt-4 line-clamp-2 text-sm mb-6 ${styles.secondaryTextColor}`}>{description}</p>

      <div className="mt-auto pt-4 border-t border-white flex justify-end">
        <Button
          variant={variant === 'featured' ? 'primary' : 'outline'}
          size="sm"
          className="group flex items-center gap-1.5"
        >
          View job
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Button>
      </div>
    </motion.div>
  );
}

JobCard.displayName = 'JobCard';
