import * as React from 'react';
import {style} from 'typestyle';
import * as theme from '../../theme/const';
import {connect} from 'react-redux';

const componentBaseStyle = style({
    backgroundColor: theme.colors.primary,
    height: '50px',
    color: theme.colors.textPrimary
});

export namespace Menu {
    export interface Props {
        title?: string,
        targetAddress?: string,
        pushToTarget?: void
    }

    export interface State {

    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({

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

