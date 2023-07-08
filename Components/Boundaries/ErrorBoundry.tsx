"use client"

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
    // Set the initial state to indicate that no error has occurred yet
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log the error and error info to the console
    console.error("Error:", error);
    console.error("Error Info:", errorInfo);

    // Update state to indicate that an error has occurred
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // If an error has occurred, render the Error component
      return <Error />;
    }

    // If no error has occurred, render the normal component tree
    return this.props.children;
  }
}

export default ErrorBoundary;