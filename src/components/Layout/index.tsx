import React, { useState } from "react";
import Navbar from "./Navbar";
import ModalWindow from "../Modal/modal-window";
import SearchContent from "@/features/Search/SearchContent";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar setShowModal={setShowModal} />
      <div className="h-10 w-full" />
      <div className="container">
        <Outlet />
      </div>
      <ModalWindow changeVisibility={setShowModal} visible={showModal}>
        <SearchContent />
      </ModalWindow>
    </>
  );
}
