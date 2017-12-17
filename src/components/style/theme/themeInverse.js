import palletInverse from '../pallet/palletInverse';
import {addPrimaryColor} from "./themeUtils";
import themeGenerator from "./themeGenerator";

const pallet = {
	palletInverse,
	...addPrimaryColor(palletInverse.primaryColor),
};

// defaultTheme
export default themeGenerator(pallet);