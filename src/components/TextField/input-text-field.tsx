import { searchSVG } from "@/assets/SearchIcon.svg";
import { HTMLAttributes, useEffect, useRef } from "react";

type ITextFieldProps = HTMLAttributes<HTMLInputElement>;
export default function TextField({ ...props }: ITextFieldProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <div className="text-field">
      {searchSVG}
      <input ref={inputRef} placeholder="search" {...props} />
    </div>
  );
}
