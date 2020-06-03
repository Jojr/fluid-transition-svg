import React from 'react';
import { createAppContainer } from 'react-navigation';
import { FluidNavigator } from 'react-navigation-fluid-transitions';
import { Login, SocialLogin, Search } from '../screens';

const NavigatorFluid = FluidNavigator({
    login: { screen: Login },
    socialLogin: { screen: SocialLogin },
    search: { screen: Search },
  },
  {
    //initialRouteName: 'search',
    style: { backgroundColor: 'transparent' },
    navigationOptions: {
      gestureEnabled: false,
      cardStyle: {
        backgroundColor: 'transparent',
      },
    },
  }
);
const RouterComponent = createAppContainer(NavigatorFluid);
export default RouterComponent;
