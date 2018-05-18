import IconBase from '@src/components/react-icons/IconBase';
import React from 'react';

export default class BookIcon extends React.Component {
    render(): React.ReactNode {
        return (
            <IconBase pathData={'M 4 7 C 2.300781 7 1 8.300781 1 10 L 1 40 C 1 41.699219 2.300781 43 4 43' +
            ' L 24 43 L 24 7 Z M 26 7 L 26 43 L 46 43 C 47.699219 43 49 41.699219 49 40 L 49 10 C 49 8.300781 ' +
            '47.699219 7 46 7 Z M 30 14 L 45 14 L 45 16 L 30 16 Z M 30 19 L 45 19 L 45 21 L 30 21 Z M 30 24 L 45 24 ' +
            'L 45 26 L 30 26 Z M 30 29 L 45 29 L 45 31 L 30 31 Z M 30 34 L 45 34 L 45 36 L 30 36 Z '}/>
        );
    }
}
