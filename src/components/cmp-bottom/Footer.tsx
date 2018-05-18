import * as React from 'react';
import {style} from 'typestyle';

const componentBaseStyle = style({
    height: '60px',
    backgroundColor: '#777',
    borderTopColor: '#000',
    borderTop: '1px solid',
});

type AppProps = {};

type AppStates = {};

export default class Footer extends React.Component<AppProps, AppStates> {
    constructor(props: AppProps) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div className={componentBaseStyle}>
                1234
            </div>
        );
    }
}