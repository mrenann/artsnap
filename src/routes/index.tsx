import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Details from '../pages/Details';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

export default Routes;
