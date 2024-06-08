import React from "react";
import Navbar from "./Navbar";

type IProps = {
  children: React.ReactNode;
};
export default function Layout({ children }: IProps) {
  return (
    <>
      <Navbar />
      <div className="h-10 w-full" />
      <div className="container">{children}</div>
    </>
  );
}
