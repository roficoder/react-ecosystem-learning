// components/ServiceErrorBoundary.tsx
import React, { Component, ReactNode, ErrorInfo } from 'react';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

class ServiceErrorBoundary extends Component<Props, State> {
    state: State = {
        hasError: false,
        error: null,
    };

    static getDerivedStateFromError(error: Error): State {
        return {
            hasError: true,
            error,
        };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.error('Service error caught:', error, info);
        // Optionally send error to a logging service like Sentry
    }

    handleRetry = () => {
        this.setState({ hasError: false, error: null });
    };

    render() {
        if (this.state.hasError) {
            return this.props.fallback ?? (
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                    <h2>Service is temporarily unavailable</h2>
                    <p>{this.state.error?.message}</p>
                    <button onClick={this.handleRetry}>Retry</button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ServiceErrorBoundary;
