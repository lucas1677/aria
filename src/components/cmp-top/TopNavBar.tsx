import * as React from 'react';
import {style} from "typestyle";
import * as H from 'history';
import {withRouter} from "react-router";
import * as theme from '../../theme/const';
import Menu from "./Menu";

const componentBaseStyle = style({
    backgroundColor: theme.colors.primary,
    height: '50px',
    color: theme.colors.textPrimary
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
                <Menu title="teach-app" targetAddress="/teach-app"/>
            </div>
        );
    }
}

export default withRouter(TopNavBar);
