import * as React from 'react';
import {style} from "typestyle";

const componentBaseStyle = style({
    backgroundColor: '#BBB',
    minHeight: '500px'
});

type AppProps = {}

type AppStates = {}

export default class MainWorkSpace extends React.Component<AppProps, AppStates> {
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
