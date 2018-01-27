import { createAction } from 'redux-actions';
import * as Actions from '@src/constants/actions';
import {PathParam} from '@src/types/modules';

export const routeToPath = createAction<PathParam>(Actions.ROUTE_TO_PATH);