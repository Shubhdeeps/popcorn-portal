import React from "react";

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, ...props }: IButtonProps) {
  return (
    <button className="base-button base-button__lg" {...props}>
      {children}
    </button>
  );
}
