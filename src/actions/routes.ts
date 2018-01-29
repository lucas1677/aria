import { createAction } from 'redux-actions';
import * as Actions from '@src/constants/actions';

export const routeToPath = createAction<PathParam>(Actions.ROUTE_TO_PATH);