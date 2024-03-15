import React, { ErrorInfo } from "react"

export class ErrorBoundary extends React.Component<React.PropsWithChildren> {
  state = { hasError: false }

  constructor(props: React.PropsWithChildren) {
    super(props)
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error, info)
  }

  render() {
    if (this.state.hasError) {
      return <div className="bg-default/5 p-3 rounded text-sm text-center text-default/80">Something went wrong.</div>
    }

    return this.props.children
  }
}
