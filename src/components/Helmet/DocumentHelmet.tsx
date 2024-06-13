import { useEffect } from "react";

type IProps = {
  children: string;
};
export default function DocumentHelmet({ children }: IProps) {
  useEffect(() => {
    document.title = children;
  }, [children]);
  return <></>;
}
