"use client";

import {
  createContext,
  useContext,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import {
  isPopupCtaModule,
  type PopupCtaModule,
  type PopupCtaRequest,
  type EnquiryIntent,
} from "./popupCtaConfig";

const PopupCtaModal = dynamic(() => import("./PopupCtaModal"), { ssr: false });

type OpenPopupCtaFn = (intent?: EnquiryIntent, module?: PopupCtaModule) => void;

const PopupCtaContext = createContext<OpenPopupCtaFn | null>(null);

export function usePopupCta() {
  const context = useContext(PopupCtaContext);
  return context;
}

export function PopupCtaProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [request, setRequest] = useState<PopupCtaRequest | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  function openPopupCta(intent: EnquiryIntent = "demo", module?: PopupCtaModule) {
    triggerRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const routeModule = pathname.startsWith("/modules/") ? pathname.split("/")[2] : "";
    setRequest({
      intent,
      module: module ?? (isPopupCtaModule(routeModule) ? routeModule : undefined),
    });
  }

  function closePopupCta() {
    setRequest(null);
    requestAnimationFrame(() => triggerRef.current?.focus({ preventScroll: true }));
  }

  return (
    <PopupCtaContext.Provider value={openPopupCta}>
      {children}
      {request && <PopupCtaModal request={request} onClose={closePopupCta} />}
    </PopupCtaContext.Provider>
  );
}

export default PopupCtaProvider;

export interface PopupCtaButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  intent?: EnquiryIntent;
  module?: PopupCtaModule;
}

export function PopupCtaButton({
  intent = "demo",
  module,
  children,
  onClick,
  ...props
}: PopupCtaButtonProps) {
  const openPopupCta = useContext(PopupCtaContext);

  return (
    <button
      {...props}
      type="button"
      aria-haspopup="dialog"
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) openPopupCta?.(intent, module);
      }}
    >
      {children}
    </button>
  );
}

// Backwards-compatible aliases for legacy demo imports
export const DemoProvider = PopupCtaProvider;
export const DemoButton = PopupCtaButton;
export const useDemo = usePopupCta;
export type DemoButtonProps = PopupCtaButtonProps;
