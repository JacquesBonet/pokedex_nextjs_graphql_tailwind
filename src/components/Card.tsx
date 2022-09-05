import type { ReactNode } from 'react';

import type { IColorVariant } from '@/types';

export interface ICardProps {
  bgColors: IColorVariant[];
  children: ReactNode;
}

export function Card({ bgColors, children }: ICardProps) {
  return <div
    className="relative flex h-2/3 w-full flex-col items-center justify-center overflow-hidden rounded-t-2xl"
    style={{
      background: `linear-gradient(0deg, #fafafa, ${bgColors[0].light})`,
    }}
  >
    {children}
  </div>
}
