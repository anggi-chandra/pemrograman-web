'use client';

interface LogoProps {
  text?: string;
  color?: string;
}

export const Logo = ({ text = 'Eventick Esport', color = 'text-white' }: LogoProps) => {
  return <h1 className={`text-2xl font-bold ${color}`}>{text}</h1>;
};