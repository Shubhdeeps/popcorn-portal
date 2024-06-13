import { useState } from "react";
import Navbar from "./navbar";
import ModalWindow from "../Modal/modal-window";
import SearchContent from "@/features/Search/SearchContent";
import { Outlet } from "react-router-dom";
import Footer from "./footer";

export default function Layout() {
  const [showModal, setShowModal] = useState(false);
  function closeModal() {
    setShowModal(false);
  }
  return (
    <>
      <Navbar setShowModal={setShowModal} />
      <div className="navbar-padding w-full" />
      <div className="container">
        <Outlet />
      </div>
      <ModalWindow changeVisibility={setShowModal} visible={showModal}>
        <SearchContent closeModal={closeModal} />
      </ModalWindow>
      <Footer />
    </>
  );
}
