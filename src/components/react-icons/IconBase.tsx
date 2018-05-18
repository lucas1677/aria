import React from 'react';

type Props = {
    viewBox?: string;
    pathData: string;
    size?: number;
    fillColor?: string;
};

export default class IconBase extends React.Component<Props> {
    render(): React.ReactNode {

        const {viewBox = '0 0 40 40', pathData, size, fillColor = 'currentColor'} = this.props;

        return (
            <svg xmlns="http://www.w3.org/2000/svg"
                 version="1.1"
                 viewBox={viewBox}
                 width={size}
                 height={size}
                 fill={fillColor}>
                <path d={pathData}/>
            </svg>
        );

    }
}
