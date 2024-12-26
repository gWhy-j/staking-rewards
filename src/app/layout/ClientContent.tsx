"use client";

import { useState, useEffect } from "react";

export default function ClientContent({ children, loading }: { children: React.ReactNode; loading?: React.ReactNode }) {
  const [render, setRender] = useState(false);

  useEffect(() => {
    setRender(true);
  }, []);

  return <>{render ? children : loading}</>;
}
