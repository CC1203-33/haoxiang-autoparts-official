import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { ErrorBoundary, type FallbackProps } from "react-error-boundary";
import App from "./app";
import "./index.css";

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const errorMessage = error instanceof Error ? error.message : String(error);
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <div className="max-w-md w-full bg-card border border-border rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-foreground mb-2">Something went wrong</h2>
        <p className="text-sm text-muted-foreground mb-4">{errorMessage}</p>
        <button
          onClick={resetErrorBoundary}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <App />
      </ErrorBoundary>
    </HashRouter>
  </StrictMode>,
);
