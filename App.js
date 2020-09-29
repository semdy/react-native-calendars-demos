import React, { Component } from 'react';
import {createStackNavigator} from 'react-navigation';
import {Home} from './pages/Home/index';
import {Demo1} from './pages/Demo1/index';
import {Demo2} from './pages/Demo2/index';
import {Demo3} from './pages/Demo3/index';
import {Demo4} from './pages/Demo4/index';
import {Demo5} from './pages/Demo5/index';

const RootStack = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                headerTitle: '首页'
            }
        },
        Demo1: {
            screen: Demo1,
            navigationOptions: {
                headerTitle: 'Demo1'
            }
        },
        Demo2: {
            screen: Demo2,
            navigationOptions: {
                headerTitle: 'Demo2'
            }
        },
        Demo3: {
            screen: Demo3,
            navigationOptions: {
                headerTitle: 'Demo3'
            }
        },
        Demo4: {
            screen: Demo4,
            navigationOptions: {
                headerTitle: 'Demo3'
            }
        },
        Demo5: {
            screen: Demo5,
            navigationOptions: {
                headerTitle: 'Demo5'
            }
        }
    },
    {
        initialRouteName: 'Home',
    }
);

export default class App extends Component {
    render() {
        return (
            <RootStack />
        );
    }
}
