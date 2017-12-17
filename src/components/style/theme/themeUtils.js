import color from 'tinycolor2';

export const addPrimaryColor = (primaryColor) => (
	{
		primaryOne: color(primaryColor).setAlpha(0.1).toString(),
		primaryTwo: color(primaryColor).setAlpha(0.2).toString(),
		primaryThree: color(primaryColor).setAlpha(0.3).toString(),
		primaryFour: color(primaryColor).setAlpha(0.4).toString(),
		primaryFive: color(primaryColor).setAlpha(0.5).toString(),
		primarySix: color(primaryColor).setAlpha(0.6).toString(),
		primarySeven: color(primaryColor).setAlpha(0.7).toString(),
		primaryEight: color(primaryColor).setAlpha(0.8).toString(),
		primaryNine: color(primaryColor).setAlpha(0.9).toString(),
	}
);