import React from "react";
import Card from "../Card/base-card";

type IErrorProps = {
  children: React.ReactNode;
};
export default function ErrorCard({ children }: IErrorProps) {
  return (
    <Card className="error-card">
      <div className="error">{children}</div>
      <div className="error-card__instructions">Please try again later!</div>
    </Card>
  );
}
