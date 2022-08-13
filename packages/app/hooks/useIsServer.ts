import { useState, useEffect } from "react";

export default function useIsServer() {
  const [isServer, setIsServer] = useState(true);
  useEffect(() => {
    setIsServer(false);
  }, []);
  return isServer;
}
