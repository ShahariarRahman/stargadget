import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function useTimer(time) {
  const [timer, setTimer] = useState(time);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? --prev : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (timer === 0) {
    router.push("/");
  }

  return [timer];
}
