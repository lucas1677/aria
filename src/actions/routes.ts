import * as Actions from '@src/constants/actions';
import { createAction } from 'redux-actions';

export const routeToPath = createAction<PathParam>(Actions.ROUTE_TO_PATH);
