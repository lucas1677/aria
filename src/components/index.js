/* @remove-on-es-build-begin */
// this file is not used if use https://github.com/ant-design/babel-plugin-import
const ENV = process.env.NODE_ENV;
if (ENV !== 'production' &&
	ENV !== 'test' &&
	typeof console !== 'undefined' &&
	console.warn &&
	typeof window !== 'undefined') {
	console.warn(
		'You are using a whole package of airas-ui, ' +
		'please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.',
	);
}
/* @remove-on-es-build-end */

export {default as Button} from './Button';
export {default as Dropdown} from './Dropdown';
export {default as Input} from './Input';
export {default as Tooltip} from './Tooltip';
export {default as Collapse} from './Collapse';
export {default as Card} from './Card';
export {default as Table} from './Table';
export {default as Modal} from './Modal';
export {default as Alerts} from './Alerts';
export {default as Badge} from './Badge';
export {default as Breadcrumb} from './Breadcrumb';
export {default as Well} from './Well';
export {component} from './style';
export {default as Progress} from './Progress';
export {default as Popover} from './Popover';