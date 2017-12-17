import palletDefault from '../pallet/palletDefault';
import {addPrimaryColor} from './themeUtils';
import themeGenerator  from "./themeGenerator";

const pallet = {
	...palletDefault,
	...addPrimaryColor(palletDefault.primaryColor)
};

// defaultTheme
export default themeGenerator(pallet);
