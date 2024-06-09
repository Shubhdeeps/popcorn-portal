import React from "react";

type IModalProps = {
  children: React.ReactNode;
  visible?: boolean;
  changeVisibility: (state: boolean) => void;
};

export default function ModalWindow({
  children,
  visible = false,
  changeVisibility,
}: IModalProps) {
  if (!visible) {
    return <></>;
  }

  function handleOutsideClick() {
    changeVisibility(false);
  }
  return (
    <div onClick={handleOutsideClick} className="modal-window">
      <div className="container">
        <div
          onClick={(e) => {
            //avoid child click to trigger parent click
            e.stopPropagation();
          }}
          className="modal-window__container"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
