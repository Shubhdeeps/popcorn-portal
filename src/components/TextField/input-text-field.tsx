import { searchSVG } from "@/assets/SearchIcon.svg";
import { useEffect, useRef } from "react";

type ITextFieldProps = React.InputHTMLAttributes<HTMLInputElement>;
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
