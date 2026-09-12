import React from 'react';

/**
 * Komponen Tombol Reusable (`Button`)
 * 
 * Komponen UI polimorfik yang dapat di-render sebagai tombol `<button>` standar atau tautan `<a>`
 * jika prop `href` disajikan. Mendukung berbagai varian visual, ukuran, dan penempatan ikon.
 * 
 * @param {Object} props Props komponen tombol.
 * @param {React.ReactNode} props.children Konten label/teks di dalam tombol.
 * @param {'primary' | 'accent' | 'secondary' | 'outline' | 'ghost'} [props.variant='primary'] Gaya visual tombol.
 * @param {'sm' | 'md' | 'lg'} [props.size='md'] Skala ukuran tombol.
 * @param {string} [props.className=''] Kelas CSS tambahan Tailwind.
 * @param {React.ElementType} [props.icon] Komponen ikon Lucide (opsional).
 * @param {'left' | 'right'} [props.iconPosition='left'] Posisi ikon relatif terhadap teks.
 * @param {React.MouseEventHandler<HTMLElement>} [props.onClick] Callback saat tombol diklik.
 * @param {string} [props.href] URL tujuan jika tombol digunakan sebagai tautan.
 * @param {string} [props.target] Target window jika berupa link (contoh: `_blank`).
 * @param {string} [props.rel] Atribut rel link. Otomatis `noopener noreferrer` jika `target="_blank"`.
 * @param {'button' | 'submit' | 'reset'} [props.type='button'] Tipe atribut HTML tombol.
 * @returns {JSX.Element} Elemen `<a>` atau `<button>`.
 */
export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'left',
  onClick,
  href,
  target,
  rel,
  type = 'button',
  ...props
}) => {

  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer';

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-light active:bg-primary-dark focus:ring-primary shadow-soft-sm hover:shadow-soft-md',
    accent: 'bg-accent text-primary font-semibold hover:bg-accent-hover active:bg-accent focus:ring-accent shadow-soft-sm hover:shadow-soft-md',
    secondary: 'bg-soft text-primary hover:bg-soft-dark/20 active:bg-soft focus:ring-secondary',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white active:bg-primary-dark focus:ring-primary',
    ghost: 'text-primary hover:bg-soft/30 active:bg-soft/50 focus:ring-primary'
  };

  const sizes = {
    sm: 'text-xs px-3 py-1.5 rounded-lg gap-1.5',
    md: 'text-sm px-4 py-2.5 rounded-xl gap-2',
    lg: 'text-base px-6 py-3 rounded-xl gap-2.5 font-semibold'
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        {...props}
      >
        {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
        <span>{children}</span>
        {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </button>
  );
};
