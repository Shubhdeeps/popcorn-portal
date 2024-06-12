import { CardFooter } from "@/components/Card/base-card";
import React from "react";

type IProps = {
  title: string;
  children?: React.ReactNode;
};
export default function AdditionalOverviewData({ children, title }: IProps) {
  if (!children) {
    return <></>;
  }
  return (
    <CardFooter className="media-overview-page__footer">
      {title}
      <span> {children}</span>
    </CardFooter>
  );
}
