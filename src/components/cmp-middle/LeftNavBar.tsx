import * as React from 'react';
import {style} from "typestyle";

const componentBaseStyle = style({
    backgroundColor: '#BBB',
});

type AppProps = {}
type AppStates = {}

export default class LeftNavBar extends React.Component<AppProps, AppStates> {
    constructor(props) {
        super(props);
    }

    componentDidCatch(error, info) {

    }

    render(): React.ReactNode {
        return (
            <div className={componentBaseStyle}>

            </div>
        );
    }
}
