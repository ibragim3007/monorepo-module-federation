import bartJpg from "@/assets/bart_jpg.jpeg";
import bartPng from "@/assets/bart_png.png";
import IconSvg from "@/assets/iconsvg.svg";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import s from "./App.module.scss";

const App = () => {
  const [counter, setCounter] = useState(0);

  const inc = () => setCounter(counter + 1);
  return (
    <div>
      <div data-testId="AppTestId">
        <img width={100} src={bartPng} />
        <img width={100} src={bartJpg} />
        <div>
          <IconSvg stroke="green" width={100} height={100} />
        </div>
        счетчик:<span className={s.value}> {counter}</span>
        <button className={s.button} onClick={inc}>
          Inc
        </button>
      </div>
      <div style={{ display: "flex", gap: 10, fontSize: 32, margin: 10 }}>
        <Link to={"/about"}>About</Link>
        <br />
        <Link to={"/shop"}>SHOP</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default App;
