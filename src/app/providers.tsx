"use client";

import type { ComponentType, ReactNode } from "react";
// kelor:imports

const providers: ComponentType<{ children: ReactNode }>[] = [
  // kelor:wrappers
];

export function Providers({ children }: { children: ReactNode }) {
  return providers.reduceRight(
    (inner, Provider) => <Provider>{inner}</Provider>,
    children,
  );
}
