import * as React from 'react';
import * as ReactDom from 'react-dom';

import {Provider} from 'react-redux';

import TodoApp from '@src/app/components/TodoApp';
import store from '@src/store';

import mainStyle from '@src/resource/css/main.css';
import normalizeStyle from '@src/resource/css/normalize.css';
import {cssRaw} from 'typestyle';

// import global css style: normalize & main style sheet.
cssRaw(`
${normalizeStyle}
${mainStyle}
`);

ReactDom.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
