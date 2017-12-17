import React, {Component} from 'react';
import propTypes from 'prop-types';
import reactCSS from 'reactcss';

export default class Progress extends Component {

    static propTypes = {
        percent: propTypes.number,
        status: propTypes.string,
        show: propTypes.bool,
        type: propTypes.string,
        pWidth: propTypes.number,
        width: propTypes.string,
        format: propTypes.func,
    };

    static defaultProps = {
        percent: 0,
        status: '',
        show: true,
        type: 'line',
        pWidth: 10,
        width: '100%',
        format: (percent) => `${percent}%`
    };

    render() {

        const {percent, status, format, width, type, show, pWidth} = this.props;

        let per = `${percent}%`;
        let formatPer = format(percent);
        let container = {
            display: 'inline-block',
            width: width,
            paddingRight: '2.75em',
            marginRight: '-2.75em',
            boxSizing: 'border-box',
        };
        let progress = {
            display: 'inline-block',
            width: '100%',
            background: '#f7f7f7',
            borderRadius: '100px',
            verticalAlign: 'middle',
            boxSizing: 'border-box',

        };
        let current = {
            position: 'relative',
            width: per,
            height: pWidth,
            borderRadius: '100px',
            background: status === 'exception' ? '#f04134'
                : status === 'success' ? '#00a854' : '#108ee9',
            transition: 'all .4s cubic-bezier(.08,.82,.17,1) 0s',
            boxSizing: 'border-box',

        };

        let text = {
            textAlign: 'left',
            width: '2em',
            display: 'inline-block',
            marginLeft: '.75em',
            verticalAlign: 'middle',
            fontSize: '1em',
            boxSizing: 'border-box',

        };

        if (type === 'line') {
            return (
                <div>
                    <div style={container}>
                        <div style={progress}>
                            <div style={current}>
                            </div>
                        </div>

                    </div>
                    {show ? <span
                            style={text}>
                            {status ==='' ? formatPer : status === 'exception' ? 'X'
                                : status === 'success' ? 'V'
                                    : status === 'active' ? formatPer
                                        : formatPer}
                                </span>
                        : null}
                </div>

            )
        }
        if (type === 'circle') {
            return (
                <div style={container}>
                    <span style={progress}>
                        <span style={current}>
                        </span>
                    </span>
                    <span>{format}</span>
                </div>
            )
        }

    }
}
