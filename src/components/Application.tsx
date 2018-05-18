import {normalizeString} from '@src/constants/global';
import * as React from 'react';
import {cssRaw, style} from 'typestyle';

cssRaw(`${normalizeString}`);

const pageWrapper = style({
    backgroundColor: '#BBB',
    height: '100vh',
    fontFamily: `"Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;`,
});

type AppProps = {
    children: React.ReactNode;
};

type AppStates = {};

export default class Application extends React.Component<AppProps, AppStates> {
    constructor(props: AppProps) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div className={pageWrapper}>
                {this.props.children}
            </div>
        );
    }
}
