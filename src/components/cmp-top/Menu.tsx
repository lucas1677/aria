import * as RoutesActions from '@src/actions/routes';
import * as theme from '@src/theme/const';
import * as React from 'react';
import {style} from 'typestyle';

const componentBaseStyle = style({
    backgroundColor: theme.colors.primary,
    height: '50px',
    color: theme.colors.textPrimary,
});

type Props = {
    title?: string;
    targetAddress?: string;
    pushToTarget?: void;
    actions?: typeof RoutesActions;
};

type State = {
    activeRoutePath: string;
};

export default class Menu extends React.Component<Props, State> {

    constructor(props: Props) {
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
