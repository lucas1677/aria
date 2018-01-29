import * as React from 'react';
import * as theme from '@src/theme/const';
import {style} from 'typestyle';
import {connect} from 'react-redux';
import * as RoutesActions from '@src/actions/routes';
import {bindActionCreators} from 'redux';
import {RouteComponentProps} from 'react-router';

const componentBaseStyle = style({
    backgroundColor: theme.colors.primary,
    height: '50px',
    color: theme.colors.textPrimary
});

export namespace Menu {
    export interface Props extends RouteComponentProps<void>{
        title?: string,
        targetAddress?: string,
        pushToTarget?: void,
        actions: typeof RoutesActions;
    }

    export interface State {
        activeRoutePath: string
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    activeRoutePath: state.currentRoutePath
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(RoutesActions, dispatch)
});

@connect(mapStateToProps, mapDispatchToProps)
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

