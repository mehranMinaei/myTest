import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/home/Home';
import AddUseCase from '../screens/addResource/AddResource';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Alarm from '../screens/alarm/Alarm';
import Profile from '../screens/profile/Profile';
import SvgHome from '../../assets/svgs/SvgHome';
import {StyleSheet} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUser, faBell, faFile} from '@fortawesome/free-regular-svg-icons';
import {currentStatusStor, resourceStor} from '../jotaiStore/resourceStor';
import {useAtom} from 'jotai';
import {Storage} from '../utils/storage';
export type RootStackParams = {
  Home: undefined;
  AddUseCase: undefined;
  Alarm: undefined;
  Profile: undefined;
};

const RootStack = createBottomTabNavigator<RootStackParams>();

const RootNavigator = () => {
  const navigationRef = React.createRef<any>();
  const [resource, setResource] = useAtom(resourceStor);
  const [, setCurrentStatus] = useAtom(currentStatusStor);
  useEffect(() => {
    const init = async () => {
      const loc = await Storage.loadJSON('myAppData');

      if (loc !== null) setResource(loc);
      const curentVal = await Storage.loadString('currentStatus');

      if (curentVal !== null) setCurrentStatus(parseFloat(curentVal));
    };

    init();
  }, []);
  useEffect(() => {
    const saveDataInLocal = async () => {
      await Storage.saveJSON('myAppData', resource);
    };
    saveDataInLocal();
  }, [resource]);
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen
          name="Home"
          component={Home}
          options={{
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({focused}) => (
              <SvgHome color={focused ? '#0A8080' : undefined} />
            ),
            tabBarShowLabel: false,
            tabBarStyle: styles.default,
          }}
        />
        <RootStack.Screen
          name="AddUseCase"
          component={AddUseCase}
          options={{
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({focused}) => (
              <FontAwesomeIcon
                icon={faFile}
                color={focused ? '#0A8080' : '#222'}
                size={20}
              />
            ),
            tabBarShowLabel: false,
            tabBarStyle: styles.default,
          }}
        />
        <RootStack.Screen
          name="Alarm"
          component={Alarm}
          options={{
            title: '',
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({focused}) => (
              <FontAwesomeIcon
                icon={faBell}
                color={focused ? '#0A8080' : '#222'}
                size={20}
              />
            ),
            tabBarShowLabel: false,
            tabBarStyle: styles.default,
          }}
        />
        <RootStack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: '',
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({focused}) => (
              <FontAwesomeIcon
                icon={faUser}
                color={focused ? '#0A8080' : '#222'}
                size={20}
              />
            ),
            tabBarShowLabel: false,
            tabBarStyle: styles.default,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({
  default: {
    shadowColor: '#1C2B3D',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.12,
    shadowRadius: 6,

    elevation: 1,
    zIndex: 6,
  },
});
