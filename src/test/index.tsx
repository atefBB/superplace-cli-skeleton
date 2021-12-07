import React, { ReactElement } from "react";
import {
  render as baseRender,
  RenderOptions,
  RenderResult,
} from "@testing-library/react";

export function AllTheProviders({ children }) {
  return <React.Fragment>{children}</React.Fragment>;
}

const render = (ui: ReactElement, options?: Omit<RenderOptions, "queries">) =>
  baseRender(ui, { wrapper: AllTheProviders, ...options }) as RenderResult;

// re-export everything
export * from "@testing-library/react";

// override render method
export { render };
