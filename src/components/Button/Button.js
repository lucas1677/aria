import React, {Component} from 'react';
import propTypes from 'prop-types';
import reactCSS from 'reactcss';

import {btn} from '../style/theme/themeGenerator'

export default class Button extends Component {

	state = {
		disabled: false
	};

	static propTypes = {
        children: propTypes.any,
		disabled: propTypes.bool,
		style: propTypes.object,
	};

	static defaultProps = {
        children: "Hello World!",
		disabled: false,
		style: {}
	};

	render() {

		const {
            children,
			disabled,
			style,...props
		} = this.props;

		const styles = reactCSS({
			'default': {
				card: {
					boxShadow: '0 2px 4px rgba(0,0,0,.15)',
					...style
				},
			},
		});

		return (
			<button disabled={disabled} style={styles.card} {...props} >
				{children}
			</button>
		)
	}
}