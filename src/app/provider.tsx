import { type ReactNode, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppErrorPage from "@/features/errors/app-error";

export default function AppProvider({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<>Loading...</>}>
      <ErrorBoundary FallbackComponent={AppErrorPage}>
        <TooltipProvider>{children}</TooltipProvider>
      </ErrorBoundary>
    </Suspense>
  );
}
