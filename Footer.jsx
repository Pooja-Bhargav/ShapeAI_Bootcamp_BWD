import React from "react";
import "../src/styles.css";

var curYear = new Date().getFullYear();
export default function Footer() {
  return (
    <div className="footer">
      <footer>
        <p>Copyright @{curYear} </p>
      </footer>
    </div>
  );
}
