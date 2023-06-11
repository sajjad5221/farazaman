"use client";
import Error from "@/app/global-error";
import React, { Component, ErrorInfo, ReactNode } from "react";

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // You can log the error or send it to an error reporting service
    console.error("Error:", error);
    console.error("Error Info:", errorInfo);

    // Update state to display fallback UI
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // Render a fallback UI
      <Error />;
    }

    // Render the normal component tree
    return this.props.children;
  }
}

export default ErrorBoundary;
