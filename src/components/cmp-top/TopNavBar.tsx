import * as React from 'react';
import {style} from "typestyle";
import * as H from 'history';
import {withRouter} from "react-router";

const componentBaseStyle = style({
    backgroundColor: '#171C23',
});

type AppProps = {
    history: H.History
}

type AppStates = {}

class TopNavBar extends React.Component<AppProps, AppStates> {
    constructor(props) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div className={componentBaseStyle}>

            </div>
        );
    }
}

export default withRouter(TopNavBar);
