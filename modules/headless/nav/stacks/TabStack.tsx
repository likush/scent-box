import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NewsScreen} from '../../../app/news';
import {DiscoverScreen} from '../../../app/discover';
import {AccountScreen} from '../../../app/account';
import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

// -------

type TabStackParamList = {
  News: undefined;
  Discover: undefined;
  Account: undefined;
};

// -------

const TabIcon: React.FC<{icon: string}> = ({icon}) => (
  <Icon name={icon} size={20} />
);

const TabNavigator = () => {
  const Tabs = createBottomTabNavigator<TabStackParamList>();

  return (
    <Tabs.Navigator screenOptions={{tabBarShowLabel: false}}>
      <Tabs.Screen
        name="News"
        component={NewsScreen}
        options={{
          tabBarIcon: () => <TabIcon icon="home" />,
        }}
      />
      <Tabs.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          tabBarIcon: () => <TabIcon icon="search" />,
        }}
      />
      <Tabs.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: () => <TabIcon icon="user" />,
        }}
      />
    </Tabs.Navigator>
  );
};

export default TabNavigator;
