import * as React from 'react';
import {style} from "typestyle";
import * as theme from '../../theme/const';
import Menu from "./Menu";

const componentBaseStyle = style({
    backgroundColor: theme.colors.primary,
    height: '50px',
    color: theme.colors.textPrimary
});

type AppProps = {
}

type AppStates = {}

class TopNavBar extends React.Component<AppProps, AppStates> {
    constructor(props) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div className={componentBaseStyle}>
                <Menu title="222" />
            </div>
        );
    }
}

export default TopNavBar;
