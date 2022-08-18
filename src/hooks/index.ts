import { useEffect, useState } from "react";

export const useIsMounted = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  if (!isMounted) return null;
  return isMounted;
};
