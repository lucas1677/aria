import * as React from 'react';
import {style} from 'typestyle';
import LeftNavBar from './LeftNavBar';
import MainWorkSpace from './MainWorkSpace';

const componentBaseStyle = style({});

type AppProps = {};
type AppStates = {};

export default class MainSpaceWrapper extends React.Component<AppProps, AppStates> {
    constructor(props: AppProps) {
        super(props);
    }

    componentDidCatch(error: any, info: any) {
        return null;
    }

    render(): React.ReactNode {
        return (
            <div className={componentBaseStyle}>
                Here goes the application!
                <LeftNavBar/>
                <MainWorkSpace/>
            </div>
        );
    }
}
