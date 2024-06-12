import React, { useRef } from "react";

type IDropdownProps = {
  items: React.ReactNode[];
  icon: JSX.Element;
};
export default function Dropdown({ icon, items }: IDropdownProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleClick(
    e: React.MouseEvent<HTMLElement>,
    state: "add" | "remove"
  ) {
    e.stopPropagation();
    ref.current?.classList[state]("hover-clx");
  }

  return (
    <div ref={ref} onClick={(e) => handleClick(e, "add")} className="dropdown">
      <span className="dropdown__button">{icon}</span>
      <div className="dropdown__content">
        {items.map((item, index) => {
          return (
            <span key={index} onClick={(e) => handleClick(e, "remove")}>
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
