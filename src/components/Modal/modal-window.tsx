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
  // if (!visible) {
  //   return <></>;
  // }

  function handleOutsideClick() {
    changeVisibility(false);
  }
  return (
    <div onClick={handleOutsideClick} className="modal-window">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modal-window__container container"
      >
        {children}
      </div>
    </div>
  );
}
