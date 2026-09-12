import React from 'react';

/**
 * Komponen Label/Emblem (`Badge`)
 * 
 * Komponen ringkas untuk menampilkan tag kategori, status, atau highlight dengan dukungan ikon opsional.
 * 
 * @param {Object} props Props komponen Badge.
 * @param {React.ReactNode} props.children Label teks di dalam Badge.
 * @param {'soft' | 'primary' | 'secondary' | 'accent' | 'neutral'} [props.variant='soft'] Skema warna badge.
 * @param {string} [props.className=''] Kelas CSS kustom tambahan.
 * @param {React.ElementType} [props.icon] Komponen ikon Lucide (opsional).
 * @returns {JSX.Element} Elemen `<span>` berciri visual badge.
 */
export const Badge = ({
  children,
  variant = 'soft',
  className = '',
  icon: Icon,
  ...props
}) => {

  const baseStyles = 'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border transition-colors';

  const variants = {
    soft: 'bg-soft/30 text-primary border-soft-dark/30',
    primary: 'bg-primary/10 text-primary border-primary/20',
    secondary: 'bg-secondary/10 text-secondary-dark border-secondary/20',
    accent: 'bg-accent/20 text-gray-900 border-accent/40',
    neutral: 'bg-gray-100 text-gray-700 border-gray-200'
  };

  return (
    <span
      className={`${baseStyles} ${variants[variant] || variants.soft} ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
      <span>{children}</span>
    </span>
  );
};
