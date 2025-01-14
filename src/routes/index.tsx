import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../pages/Home';
import {Details} from '../pages/Details';
import {RouteStackParamList} from './types.ts';

const Stack = createNativeStackNavigator<RouteStackParamList>();

function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          title: '',
          animation: 'none',
          headerTintColor: '#fff',
          headerShown: true,
          headerTransparent: true,
          headerLargeTitle: true,
          headerLargeStyle: {
            backgroundColor: 'black',
          },
          headerStyle: {
            backgroundColor: 'rgba(255,255,255,0)',
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default Routes;
