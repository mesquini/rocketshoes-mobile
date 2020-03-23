import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Cart from './pages/cart';
import Home from './pages/home/';

export default createAppContainer(
  createSwitchNavigator(
    {
      Home,
      Cart,
    },
    {
      headerLayoutPresent: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#fff',
      },
    }
  )
);
