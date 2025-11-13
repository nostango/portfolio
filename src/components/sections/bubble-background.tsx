'use client';
import * as React from 'react';
import {
  motion,
  type SpringOptions,
  useMotionValue,
  useSpring,
} from 'motion/react';
import { cn } from '@/lib/utils';

type BubbleBackgroundProps = React.ComponentProps<'div'> & {
  interactive?: boolean;
  transition?: SpringOptions;
};

const BubbleBackground = React.forwardRef<
  HTMLDivElement,
  Omit<BubbleBackgroundProps, 'ref'>
>(function BubbleBackground(
  {
    className,
    children,
    interactive = false,
    transition = { stiffness: 100, damping: 20 },
    ...props
  },
  ref,
) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  React.useImperativeHandle(ref, () => containerRef.current as HTMLDivElement);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, transition);
  const springY = useSpring(mouseY, transition);
  React.useEffect(() => {
    if (!interactive) return;
    const currentContainer = containerRef.current;
    if (!currentContainer) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = currentContainer.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };
    currentContainer?.addEventListener('mousemove', handleMouseMove);
    return () =>
      currentContainer?.removeEventListener('mousemove', handleMouseMove);
  }, [interactive, mouseX, mouseY]);
  return (
    <div
      ref={containerRef}
      data-slot="bubble-background"
      className={cn(
        'fixed inset-0 overflow-hidden bg-transparent -z-10',
        className,
      )}
      {...props}
    >
      <div
        className="absolute inset-0"
      >
        <motion.div
          className="absolute rounded-full size-[80%] top-[10%] left-[10%] bg-[radial-gradient(circle_at_center,hsl(var(--bubble-1)/0.3)_0%,hsl(var(--bubble-1)/0)_50%)]"
          style={{ filter: 'blur(40px)' }}
          animate={{ y: [-50, 50, -50] }}
          transition={{ duration: 30, ease: 'easeInOut', repeat: Infinity }}
        />
        <motion.div
          className="absolute inset-0 flex justify-center items-center origin-[calc(50%-400px)]"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          <div
            className="rounded-full size-[80%] top-[10%] left-[10%] bg-[radial-gradient(circle_at_center,hsl(var(--bubble-2)/0.3)_0%,hsl(var(--bubble-2)/0)_50%)]"
            style={{ filter: 'blur(40px)' }}
          />
        </motion.div>
        <motion.div
          className="absolute inset-0 flex justify-center items-center origin-[calc(50%+400px)]"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
        >
          <div
            className="absolute rounded-full size-[80%] bg-[radial-gradient(circle_at_center,hsl(var(--bubble-3)/0.3)_0%,hsl(var(--bubble-3)/0)_50%)] top-[calc(50%+200px)] left-[calc(50%-500px)]"
            style={{ filter: 'blur(40px)' }}
          />
        </motion.div>
        <motion.div
          className="absolute rounded-full size-[80%] top-[10%] left-[10%] bg-[radial-gradient(circle_at_center,hsl(var(--bubble-4)/0.3)_0%,hsl(var(--bubble-4)/0)_50%)] opacity-10"
          style={{ filter: 'blur(40px)' }}
          animate={{ x: [-50, 50, -50] }}
          transition={{ duration: 40, ease: 'easeInOut', repeat: Infinity }}
        />
        <motion.div
          className="absolute inset-0 flex justify-center items-center origin-[calc(50%_-_800px)_calc(50%_+_200px)]"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
        >
          <div
            className="absolute rounded-full size-[160%] bg-[radial-gradient(circle_at_center,hsl(var(--bubble-5)/0.3)_0%,hsl(var(--bubble-5)/0)_50%)] top-[calc(50%-80%)] left-[calc(50%-80%)]"
            style={{ filter: 'blur(40px)' }}
          />
        </motion.div>
        {interactive && (
          <motion.div
            className="absolute rounded-full size-full bg-[radial-gradient(circle_at_center,hsl(var(--bubble-6)/0.3)_0%,hsl(var(--bubble-6)/0)_50%)] opacity-10"
            style={{
              x: springX,
              y: springY,
              filter: 'blur(40px)',
            }}
          />
        )}
      </div>
      {children}
    </div>
  );
});
export default BubbleBackground;
