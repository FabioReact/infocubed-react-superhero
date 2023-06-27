import React, { ErrorInfo } from 'react'

type Props = {
  children?: React.ReactNode
}

type State = {
  hasError: boolean
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    console.log(error)
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
    console.log(error, info.componentStack)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <p>Sorry, an unexpected error happened</p>
    }

    return this.props.children
  }
}

export default ErrorBoundary