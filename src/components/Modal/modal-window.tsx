import React from "react";

type IModalProps = {
  children: React.ReactNode;
  visible: boolean;
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
  return <div className="modal-window">{children}</div>;
}
