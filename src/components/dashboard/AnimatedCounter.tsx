import { useEffect, useRef } from 'react';
        import { animate } from 'framer-motion';
        
        interface AnimatedCounterProps {
          from: number;
          to: number;
          toFixed?: number;
        }
        
        export function AnimatedCounter({ from, to, toFixed = 0 }: AnimatedCounterProps) {
          const nodeRef = useRef<HTMLSpanElement>(null);
        
          useEffect(() => {
            const node = nodeRef.current;
            if (!node) return;
        
            const controls = animate(from, to, {
              duration: 1,
              onUpdate(value) {
                node.textContent = value.toFixed(toFixed);
              },
            });
        
            return () => controls.stop();
          }, [from, to, toFixed]);
        
          return <span ref={nodeRef} />;
        }
