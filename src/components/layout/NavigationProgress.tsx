"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function NavigationProgress() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const isNavigating = useRef(false);
  const progressTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const finishTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fallbackTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function clearTimers() {
      if (progressTimer.current) clearInterval(progressTimer.current);
      if (finishTimer.current) clearTimeout(finishTimer.current);
      if (fallbackTimer.current) clearTimeout(fallbackTimer.current);
      progressTimer.current = null;
      finishTimer.current = null;
      fallbackTimer.current = null;
    }

    function beginNavigation() {
      if (isNavigating.current) return;

      if (finishTimer.current) {
        clearTimeout(finishTimer.current);
        finishTimer.current = null;
      }

      isNavigating.current = true;
      setVisible(true);
      setProgress(8);
      progressTimer.current = setInterval(() => {
        setProgress((current) => Math.min(current + 6, 88));
      }, 160);

      // Hide the indicator if navigation is interrupted or takes unusually long.
      fallbackTimer.current = setTimeout(() => {
        clearTimers();
        isNavigating.current = false;
        setVisible(false);
        setProgress(0);
      }, 12000);
    }

    function handleDocumentClick(event: MouseEvent) {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        !(event.target instanceof Element)
      ) {
        return;
      }

      const anchor = event.target.closest<HTMLAnchorElement>("a[href]");
      if (
        !anchor ||
        anchor.target === "_blank" ||
        anchor.hasAttribute("download")
      ) {
        return;
      }

      const destination = new URL(anchor.href, window.location.href);
      if (destination.origin !== window.location.origin) return;

      const currentLocation = `${window.location.pathname}${window.location.search}`;
      const nextLocation = `${destination.pathname}${destination.search}`;
      if (currentLocation === nextLocation) return;

      beginNavigation();
    }

    document.addEventListener("click", handleDocumentClick, true);
    return () => {
      document.removeEventListener("click", handleDocumentClick, true);
      clearTimers();
    };
  }, []);

  useEffect(() => {
    if (!isNavigating.current) return;

    if (progressTimer.current) clearInterval(progressTimer.current);
    if (fallbackTimer.current) clearTimeout(fallbackTimer.current);
    progressTimer.current = null;
    fallbackTimer.current = null;
    isNavigating.current = false;

    setProgress(100);
    finishTimer.current = setTimeout(() => {
      setVisible(false);
      setProgress(0);
      finishTimer.current = null;
    }, 240);
  }, [pathname]);

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[10000] h-[3px]"
      role="progressbar"
      aria-label="Loading page"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={progress}
    >
      <div
        className="h-full bg-[#38a9f5] shadow-[0_0_10px_rgba(56,169,245,0.8)] transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
