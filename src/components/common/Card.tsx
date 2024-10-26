import React from "react";

type CardProps<T = object> = T & {
  children: React.ReactNode;
  className?: string;
};

export default function Card<T>({
  children,
  className = "",
  ...restProps
}: CardProps<T>) {
  return (
    <div className={`card ${className}`} {...restProps}>
      {children}
    </div>
  );
}
