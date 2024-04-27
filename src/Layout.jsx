import React from "react";
import Navbar from "./components/navbar/Navbar";
import Styles from "./styles/layout.module.css";

export default function Layout({ children, ...props }) {
  return (
    <div className={Styles.layout}>
      <Navbar {...props} />
      <main className={Styles.main}>{children}</main>
    </div>
  );
}
