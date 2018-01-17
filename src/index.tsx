import * as React from 'react';
import * as ReactDom from 'react-dom';
import RouterWrapper from './components/RouterWrapper';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import {Provider} from 'react-redux';
import {createStore} from "redux";
import * as appReducers from './reducers';

const store = createStore(appReducers.default);

ReactDom.render(
    <Provider store={store}>
        <LocaleProvider locale={zh_CN}>
            <RouterWrapper/>
        </LocaleProvider>
    </Provider>,
    document.getElementById('root')
);
