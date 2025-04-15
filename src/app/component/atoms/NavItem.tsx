'use client';

interface NavItemProps {
  label: string;
  href: string;
  color: string;
  hoverColor: string;
  onClick?: () => void;
}

export const NavItem = ({ label, href, color, hoverColor, onClick }: NavItemProps) => {
  return (
    <a
      href={href}
      className={`${color} hover:${hoverColor} font-medium transition-colors`}
      onClick={onClick}
    >
      {label}
    </a>
  );
};