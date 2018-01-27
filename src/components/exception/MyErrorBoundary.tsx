import * as React from "react";
import {sendToErrorReporting} from "../log/LogSupport";

type AppProps = {
    children: React.ReactNode
}
type AppStates = {
    hasError: boolean
}

class MyErrorBoundary extends React.Component<AppProps, AppStates> {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    componentDidCatch(error, info) {
        this.setState(state => ({...state, hasError: true}));
        sendToErrorReporting(error, info);
    }

    render() {
        if (this.state.hasError) {
            return <div>Sorry, something went wrong.</div>;
        } else {
            return this.props.children;
        }
    }
}

export default MyErrorBoundary;