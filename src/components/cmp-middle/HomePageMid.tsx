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
    constructor(props) {
        super(props);
    }

    componentDidCatch(error, info) {

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