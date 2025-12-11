"use client";

import { OnchainKitProvider } from "@coinbase/onchainkit";
import { base } from "wagmi/chains";
import { ReactNode } from "react";

export default function OnchainKitProviderWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <OnchainKitProvider
      chain={base}
      config={{
        appearance: {
          mode: "auto",
          theme: "default",
        },
      }}
      miniKit={{
        enabled: true,
      }}
    >
      {children}
    </OnchainKitProvider>
  );
}
