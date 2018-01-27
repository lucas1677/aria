import * as React from 'react';
import {style} from "typestyle";
import * as H from 'history';
import * as theme from '../../theme/const';
import {connectedComponentHelper, State} from "../../config";
import {push} from "react-router-redux";

const componentBaseStyle = style({
    backgroundColor: theme.colors.primary,
    height: '50px',
    color: theme.colors.textPrimary
});

type AppProps = {
    history?: H.History,
    title?: string,
    targetAddress?: string
}

type AppStates = {}

const mapStateToProps = (state: State) => ({});

const mapDispatchToProps = (dispatch) => ({
    pushToTarget: (targetAddress) => {
        dispatch(push(targetAddress))
    },
});

// Magic happening here
const {propsGeneric, connect} = connectedComponentHelper<AppProps>()(mapStateToProps, mapDispatchToProps);
type ComponentProps = typeof propsGeneric;

class Menu extends React.Component<ComponentProps, AppStates> {
    pushToTarget: any;

    constructor(props) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div
                className={componentBaseStyle}
                onClick={
                    this.props.targetAddress ?
                        () => this.pushToTarget(this.props.targetAddress) : null
                }
            >
                {this.props.title ? this.props.title : ""}
            </div>
        );
    }
}

// todo go on the topic use redux with react in typescript, this connect didn't work well
export default connect(Menu);
