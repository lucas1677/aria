import * as React from 'react';
import {style} from 'typestyle';

import {BookIcon} from '@src/components/react-icons/BookIcon';
import * as theme from '@src/theme/const';

const componentBaseStyle = style({
    backgroundColor: theme.colors.primary,
    height: '50px',
    color: theme.colors.textPrimary,
});
const appLogoImage = style({
    display: 'inline-block',
    float: 'left',
    width: '50px',
    height: '50px',
});
const appLogoText = style({
    display: 'inline-block',
    float: 'left',
    height: '100%',
    marginLeft: '10px',
    fontSize: theme.fontSize.appLogoTextFontSize,
    lineHeight: theme.fontSize.appLogoTextLineHeight,
});

type Props = {};

class TopNavBar extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div className={componentBaseStyle}>
                <img className={appLogoImage} src={'image/app-logo.png'} alt="app-logo"/>
                <div className={appLogoText}>
                    麦极创客
                </div>
                <div className={appLogoText}>
                    <BookIcon/>
                </div>
                <div></div>
            </div>
        );
    }
}

export default TopNavBar;
