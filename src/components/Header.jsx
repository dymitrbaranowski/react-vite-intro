import { useState } from "react";
import logo from "/logo-name.svg";

export function Header() {
  const [now, setNow] = useState(new Date());
  setInterval(() => setNow(new Date()), 1000);

  return (
    <header>
      <img src={logo} alt="Result" width="25px" />
      {/* <h3>Result University</h3> */}

      <span>Время сейчас: {now.toLocaleTimeString()}</span>
    </header>
  );
}
