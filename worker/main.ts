import { EventHandler, useCallback, useEffect, useMemo, useRef } from "react";

export function useWorker() {
  const dispatchRef = useRef<(Event) => void | undefined>(undefined);

  useEffect(() => {
    const worker = new Worker(new URL("./background.ts", import.meta.url));

    worker.addEventListener("message", (event) => {
      console.log(event.data);
    });

    worker.onmessage = (event) => {
      console.log(event);
    };

    dispatchRef.current = worker.dispatchEvent;
    return worker.terminate;
  }, []);

  useEffect(() => {
    const worker = new Worker(new URL("./background2.ts", import.meta.url));

    worker.addEventListener("message", (event) => {
      console.log(event.data);
    });

    worker.onmessage = (event) => {
      console.log(event);
    };

    dispatchRef.current = worker.dispatchEvent;
    return worker.terminate;
  }, []);

  return dispatchRef;
}
