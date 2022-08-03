import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import TaskList from "./components/TaskList";
import Login from "./components/Login";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
        />

        <Stack.Screen
          name="TaskList"
          component={TaskList}
        />
    
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;