import { searchSVG } from "@/assets/SearchIcon.svg";
import { HTMLAttributes } from "react";

type ITextFieldProps = HTMLAttributes<HTMLInputElement>;
export default function TextField({ ...props }: ITextFieldProps) {
  return (
    <div className="text-field">
      {searchSVG}
      <input value={"abcd"} {...props} />
    </div>
  );
}
