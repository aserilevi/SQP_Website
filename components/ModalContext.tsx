"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { SubmitCaseModal } from "./SubmitCaseModal";
import { ScheduleCallModal } from "./ScheduleCallModal";

type ModalKind = null | "submit" | "schedule";

interface ModalContextValue {
  open: (kind: Exclude<ModalKind, null>) => void;
  close: () => void;
}

const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<ModalKind>(null);

  return (
    <ModalContext.Provider value={{ open: setActive, close: () => setActive(null) }}>
      {children}
      {active === "submit" && <SubmitCaseModal onClose={() => setActive(null)} />}
      {active === "schedule" && <ScheduleCallModal onClose={() => setActive(null)} />}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used within ModalProvider");
  return ctx;
}
