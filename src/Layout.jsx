import React from "react";
import Navbar from "./components/Navbar";
import Styles from "./styles/layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={Styles.layout}>
      <Navbar />
      <main className={Styles.main}>{children}</main>
    </div>
  );
}
