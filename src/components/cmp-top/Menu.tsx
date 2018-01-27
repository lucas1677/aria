import * as React from 'react';
import {style} from "typestyle";
import * as H from 'history';
import * as theme from '../../theme/const';
import {push} from "react-router-redux";
import {connect} from 'react-redux';

const componentBaseStyle = style({
    backgroundColor: theme.colors.primary,
    height: '50px',
    color: theme.colors.textPrimary
});

type AppProps = {
    history?: H.History,
    title?: string,
    targetAddress?: string,
    pushToTarget?: any
}

type AppStates = {}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    pushToTarget: (targetAddress) => {
        dispatch(push(targetAddress))
    },
});

@connect(mapStateToProps, mapDispatchToProps)
class Menu extends React.Component<AppProps, AppStates> {

    constructor(props) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div
                className={componentBaseStyle}
                onClick={
                    this.props.targetAddress ?
                        () => this.pushToTarget(this.props.targetAddress) : undefined
                }
            >
                {this.props.title ? this.props.title : ""}
            </div>
        );
    }
}

export default Menu;
