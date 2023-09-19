import {RootStackParamList} from '../App';

interface AppRoutes extends RootStackParamList {}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppRoutes {}
  }
}
