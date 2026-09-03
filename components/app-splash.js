"use client";

import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/brand-logo";

export function AppSplash() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const hasPlayed = window.sessionStorage.getItem("finunique-splash-played");
    if (hasPlayed) {
      setVisible(false);
      return;
    }

    window.sessionStorage.setItem("finunique-splash-played", "true");
    const leaveTimer = window.setTimeout(() => setLeaving(true), 5000);
    const hideTimer = window.setTimeout(() => setVisible(false), 5800);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`app-splash ${leaving ? "app-splash-leaving" : ""}`} aria-label="Finunique is loading">
      <div className="app-splash-glow" />
      <div className="app-splash-content">
        <span className="app-splash-logo"><BrandLogo markOnly inverse className="h-14" /></span>
        <div className="overflow-hidden"><p className="app-splash-name">Finunique</p></div>
        <p className="app-splash-tagline">Pay. Book. Move forward.</p>
        <span className="app-splash-loader"><span /></span>
      </div>
    </div>
  );
}
