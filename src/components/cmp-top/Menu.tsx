import * as React from 'react';
import * as theme from '@src/theme/const';
import {style} from 'typestyle';
import * as RoutesActions from '@src/actions/routes';

const componentBaseStyle = style({
    backgroundColor: theme.colors.primary,
    height: '50px',
    color: theme.colors.textPrimary
});

export namespace Menu {
    export interface Props{
        title?: string,
        targetAddress?: string,
        pushToTarget?: void,
        actions?: typeof RoutesActions;
    }

    export interface State {
        activeRoutePath: string
    }
}

export default class Menu extends React.Component<Menu.Props, Menu.State> {

    constructor(props) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div
                className={componentBaseStyle}
            >
                {this.props.title ? this.props.title : ''}
            </div>
        );
    }
}

