import * as React from 'react';
import {style} from "typestyle";
import MainWorkSpace from "./MainWorkSpace";
import LeftNavBar from "./LeftNavBar";

const componentBaseStyle = style({
});

type AppProps = {
}
type AppStates = {}

export default class HomePageMid extends React.Component<AppProps, AppStates> {
    constructor(props: object) {
        super(props);
    }

    componentDidCatch(error: object, info: object) {

    }

    render(): React.ReactNode {
        return (
            <div className={componentBaseStyle}>
                Here goes the home page!
                <LeftNavBar/>
                <MainWorkSpace/>
            </div>
        );
    }
}
