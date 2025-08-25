import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableHighlight, Button, SafeAreaView, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import App1 from './App1';
import App2 from './App2'; // Add this import

const Stack = createStackNavigator();

// Home Screen Component
function HomeScreen({ navigation }) {
  let x = 1;
  let flag = 0;

  console.log("app executed");
  
  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome to React Native!</Text>
      <View style={{ width: 200, height: 50, left: 100, top: 300, backgroundColor: 'black' }}>
        <Button
          title="Click Me"
          onPress={() => {
            x++;
            alert(`Button clicked ${x}`);
          }}
        />
      </View>
      <TouchableHighlight onPress={() => {
        console.log(`Image clicked`);
      }}>
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={{ width: 80, height: 80, top: 450, marginBottom: 20, left: 150 }}
      />
      </TouchableHighlight>

      <StatusBar style="auto" />
      <View 
      style={{ 
          width: 200, 
          height: 50, 
          left: 100, 
          top: 500, 
          backgroundColor: 'black' 
        }}>
        <Button
          title="reset"
          onPress={() => {
            x = 0;
            alert(`Button Reset ${x}`);
          }}
        />
      </View>
      <View style={{ width: 200, height: 50, left: 100, top: 30, backgroundColor: 'black' }}>
        <Button
          title="next"
          onPress={() => {
            Alert.alert(
              "Navigation",
              "Do you want to go to App1?",
              [
                {
                  text: "Cancel",
                  style: "cancel"
                },
                {
                  text: "OK",
                  onPress: () => navigation.navigate('App1')
                }
              ]
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="App1" component={App1} />
        <Stack.Screen name="App2" component={App2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    alignItems: 'baseline',
    //justifyContent: 'center',
  }
});
