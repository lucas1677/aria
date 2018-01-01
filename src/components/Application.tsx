import * as React from 'react';

type AppProps = {
    message: string
}

type AppStates = {
    count: number
}

export default class Application extends React.Component<AppProps, AppStates> {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    };

    render(): React.ReactNode {
        return (
            <div onClick={this.increment}>
                {this.props.message}{this.state.count}
            </div>
        );
    }
}
