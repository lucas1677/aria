import color from 'tinycolor2';
import palletDefault from '../pallet/palletDefault';
import {addPrimaryColor} from './themeUtils';
import themeGenerator from "./themeGenerator";

const pallet = {
    ...palletDefault,
    ...addPrimaryColor(palletDefault.primaryColor),
};
let dt = {};
((pallet) => {


    dt.bodyBg = pallet.primaryBgColor;

// Base background color for most components
    dt.component = {};
    dt.component.background = pallet.primaryBgColor;
    dt.component.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif';
    dt.component.fontForNumber = '"Helvetica Neue For Number"';
    dt.component.fontForCode = 'Consolas, Menlo, Courier, monospace';
    dt.component.headingColor = color(pallet.primaryBgColor).darken(0.15).toString();
    dt.component.textColor = color(pallet.primaryTextColor).setAlpha(0.65).toString();
    dt.component.textColorSecondary = color(pallet.primaryTextColor).setAlpha(0.43).toString();
    dt.component.headingColorDark = color(pallet.primaryBgColor).setAlpha(0.97).toString();
    dt.component.textColorDark = color(pallet.primaryBgColor).setAlpha(0.91).toString();
    dt.component.textColorSecondaryDark = color(pallet.primaryBgColor).setAlpha(0.67).toString();
    dt.component.fontSizeBase = '12px';
    dt.component.fontSizeLarge = '14px';
    dt.component.lineHeightBase = 1.5;
    dt.component.borderRadiusBase = '4px';
    dt.component.borderRadiusSmall = '2px';

// The background colors for active and hover states for things like
// list items or table cells.
    dt.component.ItemActiveBg = pallet.primaryOne;
    dt.component.ItemHoverBg = pallet.primaryOne;

// ICONFONT TODO
// @iconfont-css-prefix    : anticon;
// @icon-url               : "https://at.alicdn.com/t/font_zck90zmlh7hf47vi";

// LINK
    dt.component.link = {};
    dt.component.link.color = pallet.primaryColor;
    dt.component.link.hoverColor = pallet.primaryFive;
    dt.component.link.activeColor = pallet.primarySeven;
    dt.component.link.hoverDecoration = 'none';

// Animation
    dt.component.animation = {};
    dt.component.animation.easeOut = 'cubic-bezier(0.215, 0.61, 0.355, 1)';
    dt.component.animation.easeIn = 'cubic-bezier(0.55, 0.055, 0.675, 0.19)';
    dt.component.animation.easeInOut = 'cubic-bezier(0.645, 0.045, 0.355, 1)';
    dt.component.animation.easeOutBack = 'cubic-bezier(0.12, 0.4, 0.29, 1.46)';
    dt.component.animation.easeInBack = 'cubic-bezier(0.71, -0.46, 0.88, 0.6)';
    dt.component.animation.easeInOutBack = 'cubic-bezier(0.71, -0.46, 0.29, 1.46)';
    dt.component.animation.easeOutCirc = 'cubic-bezier(0.08, 0.82, 0.17, 1)';
    dt.component.animation.easeInCirc = 'cubic-bezier(0.6, 0.04, 0.98, 0.34)';
    dt.component.animation.easeInOutCirc = 'cubic-bezier(0.78, 0.14, 0.15, 0.86)';
    dt.component.animation.easeOutQunit = 'cubic-bezier(0.23, 1, 0.32, 1)';
    dt.component.animation.easeInQunit = 'cubic-bezier(0.755, 0.05, 0.855, 0.06)';
    dt.component.animation.easeInOutQunit = 'cubic-bezier(0.86, 0, 0.07, 1)';

// Border style
    dt.component.borderColorBase = pallet.borderColorBase;
    dt.component.borderColorSplit = color(pallet.borderColorBase).darken(0.1).toString();
    dt.component.borderWidthBase = '1px';
    dt.component.borderStyleBase = 'solid';

// Outline
    dt.component.outlineBlurSize = 0;
    dt.component.outlineWidth = '2px';
    dt.component.outlineColor = pallet.primaryColor;

// Default background color for disabled states, Collapse wrappers,
// and several active and hover states.
    dt.component.backgroundColorBase = pallet.primaryItemBgColor;
    dt.component.backgroundColorActive = color(pallet.primaryItemBgColor).darken(0.07).toString();

// Disabled states
    dt.component.disableColor = color(pallet.black).setAlpha(0.25).toString();
    dt.component.disableBg = dt.component.backgroundColorBase;
    dt.component.disableColorDark = color(pallet.white).setAlpha(0.35).toString();

    dt.component.shadow = {};
    dt.component.shadow.shadowColor = 'rgba(0, 0, 0, .2)';
    dt.component.shadow.boxShadowBase = '0 1px 6px rgba(0, 0, 0, .2)';
    dt.component.shadow.shadowUp = '0 -1px 6px rgba(0, 0, 0, .2)';
    dt.component.shadow.shadowDown = '0 1px 6px rgba(0, 0, 0, .2)';
    dt.component.shadow.shadowLeft = '-1px 0 6px rgba(0, 0, 0, .2)';
    dt.component.shadow.shadowRight = '1px 0 6px rgba(0, 0, 0, .2)';
    dt.component.shadow.shadowTwo = '0 2px 8px rgba(0, 0, 0, .2)';

//Button
    dt.component.button = {};
    dt.component.button.btnFontWeight = 500;
    dt.component.button.btnBorderRadiusBase = dt.component.borderRadiusBase;
    dt.component.button.btnBorderRadiusSm = dt.component.borderRadiusBase;
    dt.component.button.btnPrimatyColor = '#fff';
    dt.component.button.btnPrimatyBg = '#000';
    dt.component.button.btnDefaultColor = dt.component.textColor;
    dt.component.button.btnDefaultBg = "#fff";
    dt.component.button.btnDefaultBorder = dt.component.borderColorBase;
    dt.component.button.btndangerColor = pallet.errorColor;
    dt.component.button.btndangerBg = dt.component.backgroundColorBase;
    dt.component.button.btndangerBorder = dt.component.borderColorBase;
    dt.component.button.btnDisableColor = dt.component.disableColor;
    dt.component.button.btnDisableBg = dt.component.disableBg;
    dt.component.button.btnDisableBorder = dt.component.borderColorBase;
    dt.component.button.btnPaddingBase = '0 15px';
    dt.component.button.btnfontSizeLg = dt.component.fontSizeLarge;
    dt.component.button.btnPaddingLg = '0 15px';
    dt.component.button.btnPaddingSm = '0 7px';
    dt.component.button.btnHeightBase = '28px';
    dt.component.button.btnHeightLg = '32px';
    dt.component.button.btnHeightSm = '22px';
    dt.component.button.btnCircleSize = dt.component.button.btnHeightBase;
    dt.component.button.btnCircleSizeLg = dt.component.button.btnHeightLg;
    dt.component.button.btnCircleSizeSm = dt.component.button.btnHeightSm;
    dt.component.button.btnGroupBorder = pallet.primarySeven;
    dt.component.button.radioButtonBg = dt.component.button.btnDefaultBg;
    dt.component.button.radioButtonColor = dt.component.button.btnDefaultColor;

// Media queries breakpoints
// Extra small screen / phone
    dt.component.screen = {};
    dt.component.screen.xs = '480px';
    dt.component.screen.sm = '768px';
    dt.component.screen.md = '992px';
    dt.component.screen.lg = '1200px';
    dt.component.screen.xl = '1600px';

    dt.component.screen.xsMin = '480px';
    dt.component.screen.smMin = '768px';
    dt.component.screen.mdMin = '992px';
    dt.component.screen.lgMin = '1200px';
    dt.component.screen.xlMin = '1600px';

    dt.component.screen.xsMin = '479';
    dt.component.screen.smMin = '767px';
    dt.component.screen.mdMin = '991px';
    dt.component.screen.lgMin = '1119px';
    dt.component.screen.xlMin = '1599px';

// Grid system
    dt.component.GridColumns = 24;
    dt.component.GridGutterWidth = 0;

// Layout
    dt.component.layout = {};
    dt.component.layout.bodyBackground = '#ececec';
    dt.component.layout.headerBackground = '#404040';
    dt.component.layout.headerHeight = '64px';
    dt.component.layout.headerPadding = '0 50px';
    dt.component.layout.footerPadding = '24px 50px';
    dt.component.layout.siderBackground = dt.component.layout.headerBackground;
    dt.component.layout.triggerHeight = '48px';
    dt.component.layout.triggerBackground = color(pallet.black).setAlpha(.8);
    dt.component.layout.triggerColor = '#fff';
    dt.component.layout.zeroTriggerWidth = '36px';
    dt.component.layout.zeroTriggerHeight = '42px';


// z-index list
    dt.component.zIndex = {};
    dt.component.zIndex.Affix = 10;
    dt.component.zIndex.backTop = 10;
    dt.component.zIndex.modalMask = 1000;
    dt.component.zIndex.modal = 1000;
    dt.component.zIndex.notification = 1010;
    dt.component.zIndex.message = 1010;
    dt.component.zIndex.popover = 1030;
    dt.component.zIndex.picker = 1050;
    dt.component.zIndex.dropDown = 1050;
    dt.component.zIndex.toolTip = 1060;

// Animation
    dt.component.animation.durationSlow = '.3s';// Modal
    dt.component.animation.durationBase = '.2s';
    dt.component.animation.durationFast = '.1s'; // Tooltip

// Form
    dt.component.from = {};
    dt.component.from.labelRequiredColor = pallet.errorColor;
    dt.component.from.labelColor = dt.component.headingColor;
    dt.component.from.itemMarginBottom = '24px';
    dt.component.from.itemTrailingColon = true;

// Input
    dt.component.input = {};
    dt.component.input.heightBase = '28px';
    dt.component.input.heightLg = '32px';
    dt.component.input.heightSm = '22px';
    dt.component.input.paddingHorizontal = '7px';
    dt.component.input.paddingVerticalBase = '4px';
    dt.component.input.paddingVerticalSm = '1px';
    dt.component.input.paddingVerticalLg = '6px';
    dt.component.input.placeholder = '#ccc';
    dt.component.input.color = dt.component.textColor;
    dt.component.input.borderColor = pallet.borderColorBase;
    dt.component.input.bg = '#fff';
    dt.component.input.addonBg = '#eee';
    dt.component.input.hoverBorderColor = pallet.borderColorBase;
    dt.component.input.disabledBg = dt.component.backgroundColorBase;

// Tooltip
    dt.component.tooltip = {};
    dt.component.tooltip.maxWidth = '250px';
    dt.component.tooltip.color = '#fff';
    dt.component.tooltip.bg = 'rgba(0, 0, 0, .75)';
    dt.component.tooltip.arrowWidth = '5px';
    dt.component.tooltip.distance = '8px';
    dt.component.tooltip.arrowColor = 'rgba(0, 0, 0, .75)';

// Popover
    dt.component.popover = {};
    dt.component.popover.bg = '#fff';
    dt.component.popover.color = dt.component.textColor;
    dt.component.popover.minWidth = '177px';
    dt.component.popover.arrowColor = dt.component.popover.bg;
    dt.component.popover.arrowWidth = '4px';
    dt.component.popover.arrowOuterWidth = '5px';
    dt.component.popover.arrowOuterColor = color(dt.component.borderColorBase).setAlpha(.7);
    dt.component.popover.distance = '8px';

// Modal
    dt.component.modalMaskBg = 'rgba(55, 55, 55, 0.6)';

// Progress
    dt.component.progress = {};
    dt.component.progress.defaultColor = pallet.primaryColor;
    dt.component.progress.remainingColor = pallet.primaryItemBgColor;

// Menu

    dt.component.menu = {};
    dt.component.menu.darkBg = dt.component.layout.headerBackground;
    dt.component.menu.darkSubmenuBg = '#333';
    dt.component.menu.collapsedWidith = '64px';

// Spin
    dt.component.spin = {};
    dt.component.spin.dotSizeSm = '14px';
    dt.component.spin.dotSize = '20px';
    dt.component.spin.dotSizeLg = '32px';

// Table
    dt.component.table = {};
    dt.component.table.headerBg = dt.component.backgroundColorBase;
    dt.component.table.headerSortBg = dt.component.backgroundColorActive;
    dt.component.table.rowHoverBg = pallet.primaryOne;
    dt.component.table.selectedRowBg = '#fafafa';
    dt.component.table.paddingVertical = '16px';
    dt.component.table.paddingHorizontal = '8px';

// Tag
    dt.component.tag = {};
    dt.component.tag.defaultBg = '#f3f3f3';
    dt.component.tag.defaultColor = dt.component.textColor;
    dt.component.tag.fontSize = dt.component.fontSizeBase;

// TimePicker
    dt.component.timePicker = {};
    dt.component.timePicker.panelColumnWidith = '56px';
    dt.component.timePicker.panelWidith = '168px';
    dt.component.timePicker.selectedBg = dt.component.backgroundColorBase;

// Carousel
    dt.component.carousel = {};
    dt.component.carousel.dotWidth = '16px';
    dt.component.carousel.dotHeight = '3px';
    dt.component.carousel.dotActiveWidth = '24px';

// Badge
    dt.component.badge = {};
    dt.component.badge.height = '20px';
    dt.component.badge.dotSize = '8px';
    dt.component.badge.fontSize = dt.component.fontSizeBase;

// Rate
    dt.component.rate = {};
    dt.component.rate.starColor = '#f5a623';
    dt.component.rate.starBg = '#e9e9e9';

// Card
    dt.component.card = {};
    dt.component.card.headHight = '48px';
    dt.component.card.headColor = dt.component.headingColor;
    dt.component.card.headeBackground = dt.component.background;

// Tabs
    dt.component.tabs = {};
    dt.component.tabs.cardHeadBackground = '#f9f9f9';
    dt.component.tabs.titleFontSize = dt.component.fontSizeLarge;

// BackTop
    dt.component.backTop = {};
    dt.component.backTop.topColor = '#fff';
    dt.component.backTop.topBg = 'rgba(64, 64, 64, 0.4)';
    dt.component.backTop.topHoverBg = 'rgba(64, 64, 64, 0.6)';

// Avatar
    dt.component.avatar = {};
    dt.component.avatar.sizeBase = '32px';
    dt.component.avatar.sizeLg = '40px';
    dt.component.avatar.sizeSm = '24px';
    dt.component.avatar.fontSizeBase = '32px';
    dt.component.avatar.fontSizeLg = '24px';
    dt.component.avatar.fontSizeSm = '14px';
    dt.component.avatar.bg = '#ccc';
    dt.component.avatar.color = '#fff';
    dt.component.avatar.borderRadius = dt.component.borderRadiusBase;

    return dt;
})(pallet)
// defaultTheme

export const component = dt.component;
export const button = dt.component.button;
export const avatar = dt.component.avatar;
export const backTop = dt.component.backTop;
export const tabs = dt.component.tabs;
export const card = dt.component.card;
export const badge = dt.component.badge;
export const link = dt.component.link;
export const animation = dt.component.animation;
export const shadow = dt.component.shadow;
export const screen = dt.component.screen;
export const layout = dt.component.layout;
export const zIndex = dt.component.zIndex;
export const From = dt.component.from;
export const input = dt.component.input;
export const tooltip = dt.component.tooltip;
export const popover = dt.component.popover;
export const progress = dt.component.progress;
export const menu = dt.component.menu;
export const spin = dt.component.spin;
export const table = dt.component.popover;
export const tag = dt.component.popover;
export const timePicker = dt.component.timePicker;
export const rate = dt.component.rate;
export const carousel = dt.component.carousel;

