import * as React from 'react';
import {style} from "typestyle";

const componentBaseStyle = style({
    height: '60px',
    backgroundColor: '#777',
    borderTopColor: '#000'
});

type AppProps = {}

type AppStates = {}

export default class Footer extends React.Component<AppProps, AppStates> {
    constructor(props) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div className={componentBaseStyle}>
                11
            </div>
        );
    }
}