import React, { useState } from "react";
import Navbar from "./Navbar";
import ModalWindow from "../Modal/modal-window";
import SearchContent from "@/features/Search/SearchContent";

type IProps = {
  children: React.ReactNode;
};
export default function Layout({ children }: IProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar setShowModal={setShowModal} />
      <div className="h-10 w-full" />
      <div className="container">{children}</div>
      <ModalWindow changeVisibility={setShowModal} visible={showModal}>
        <SearchContent />
      </ModalWindow>
    </>
  );
}
