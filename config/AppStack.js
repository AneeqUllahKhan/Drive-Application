import * as React from 'react';
import {Button, Image, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Profile from '../screens/Profile';
import Home from '../screens/Home';
import Map from '../screens/Map';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function AppStack() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator useLegacyImplementation>
        <Drawer.Screen
          name="Home"
          component={Map}
          options={{
            title: 'Drive',
            headerLeft: () => (
              <Image
                style={{width: 30, height: 30}}
                source={{
                  uri: 'https://cdn4.iconfinder.com/data/icons/navigation-40/24/chevron-force-right-512.png',
                }}
              />
            ),
          }}
        />
        <Drawer.Screen name="profile" component={Profile} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
