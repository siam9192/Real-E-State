import { useEffect, useState } from "react";

function UseBounce(text: string) {
  const [value, setValue] = useState("");
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setValue(text);
    }, 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [text]);
  return value;
}

export default UseBounce;
