import React, { Component } from 'react';

class ErrorBoundaris extends Component {

    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(e) {
        return { hasError: true }
    }

    componentDidCatch(e, errorInfo) {
        console.error(e, errorInfo);
    }

    render() {
        // console.log('errorBoundary Componant renderd!');
        if (this.state.hasError) {
            return <main className='flex justify-center items-center w-full h-96'>
                <h1 className='text-4xl'>
                🚫 Something Went Wrong 🚫
                </h1>

            </main>

        }

        return this.props.children

    }
}

export default ErrorBoundaris;
