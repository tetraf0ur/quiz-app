import { InitializeAppGate } from "@app/init";

import { useGate } from "effector-react";



export function AuthProvider({ children }: { children: JSX.Element }) {
  useGate(InitializeAppGate);

  return <>{children}</>;
}
