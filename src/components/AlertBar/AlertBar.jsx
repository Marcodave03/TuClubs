import React, { useState } from "react";
import "./AlertBar.css";
import { X } from "lucide-react";

const AlertBar = ({ message }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="alert-bar">
      We're still in beta! Help us improve our platform —{" "}
      <a href="/volunteer" className="highlight">Join us</a> as a volunteer
      <button onClick={() => setIsVisible(false)} className="close-btn">
        <X />
      </button>
    </div>
  );
};

export default AlertBar;