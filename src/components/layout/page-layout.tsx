import { type ReactNode, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollProgress, ScrollProgressContainer } from '@/components/animate-ui/primitives/animate/scroll-progress';
import { Navbar } from './navbar';
import Lenis from 'lenis';

const scrollPositions = new Map<string, number>();

interface PageLayoutProps {
  children: ReactNode;
  showNavbar?: boolean;
  showFooter?: boolean;
  showScrollProgress?: boolean;
}

export function PageLayout({
  children,
  showNavbar = true,
  showScrollProgress = true,
}: PageLayoutProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const location = useLocation();

  // 1. Initialize container-scoped smooth Lenis for catalog & docs pages
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      wrapper: el,
      content: (el.firstElementChild as HTMLElement) || el,
      autoRaf: true,
      lerp: 0.09,
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.0,
      syncTouch: false, // Never hijack native touch momentum on mobile devices
    });

    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // 2. Restore scroll position on route change
  useEffect(() => {
    const savedPosition = scrollPositions.get(location.pathname);
    if (lenisRef.current) {
      lenisRef.current.scrollTo(savedPosition ?? 0, { immediate: true });
    } else if (containerRef.current) {
      containerRef.current.scrollTop = savedPosition ?? 0;
    }
  }, [location.pathname]);

  // 3. Track scroll position for the current route
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    scrollPositions.set(location.pathname, target.scrollTop);
  };

  return (
    <>
      {/* ScrollProgressContainer IS the scrollable element */}
      <ScrollProgressContainer
        ref={containerRef}
        onScroll={handleScroll}
        data-lenis-prevent
        className="flex-1 overflow-y-auto rounded-xl m-2 bg-white dark:bg-background border md:m-0"
      >
        {showNavbar && <Navbar />}

        <main className="flex flex-col gap-4 min-h-[calc(100vh-10.5rem)] bg-white dark:bg-background">
          {children}
        </main>

      </ScrollProgressContainer>
      {/* Scroll progress bar - sticky at bottom */}
      {showScrollProgress && (
        <ScrollProgress
          className="fixed bottom-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
          mode="scaleX"
        />
      )}
    </>
  );
}
