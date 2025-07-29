import { ButtonHTMLAttributes, ReactNode } from 'react';

export type AnimateOnScrollProps = {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  once?: boolean;
};

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  fullWidth?: boolean;
}

export type CardVariant = 'default' | 'featured' | 'yellow' | 'gray' | 'peach';

export type JobCardProps = {
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  description: string;
  postedDate: string;
  className?: string;
  variant?: CardVariant;
  isFeatured?: boolean;
};
