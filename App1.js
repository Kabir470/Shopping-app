import { StatusBar } from 'expo-status-bar';

import {  StyleSheet, 
          Text, 
          View,Image, 
          TouchableHighlight,
          Button, 
          SafeAreaView, Alert

        } from 'react-native';
        
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App1({ navigation }) {
 let x = 1;
      console.log("app executed"); 
      return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome to App1 Screen!</Text>
     <View style={{ width: 200, height: 50, left: 100, top: 100, backgroundColor: 'black' }}>
      <Button
        title="Click Me"
        onPress={() => {
          x++;
          alert(`Button clicked ${x}`);
        }}
      />
     </View>

      <View style={{ width: 200, height: 50, left: 100, top: 150, backgroundColor: 'white' }}>
              <Button
                title="next"
                onPress={() => {
                  Alert.alert(
                    "Navigation",
                    "Do you want to go to App2?",
                    [
                      {
                        text: "Cancel",
                        style: "cancel"
                      },
                      {
                        text: "OK",
                        onPress: () => navigation.navigate('App2')
                      }
                    ]
                  );
                }}
              />
            </View>


      <TouchableHighlight onPress={() => {
        alert(`Image clicked`);
      }}>
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={{ width: 80, height: 80, top: 200, marginBottom: 20, left: 150 }}
      />
      </TouchableHighlight>

      <StatusBar style="auto" />
<View style={{ width: 200, height: 50, left: 100, top: 250, backgroundColor: 'white' }}>
         <Button
           title="reset"
           onPress={() => {
             x = 0;
             alert(`Button Reset ${x}`);
           }}
         />
       </View>
       
       <View style={{ width: 200, height: 50, left: 100, top: 300, backgroundColor: 'blue' }}>
         <Button
           title="Go Back"
           onPress={() => {
             navigation.goBack();
           }}
         />
       </View>

      
      </SafeAreaView>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'baseline',
    //justifyContent: 'center',
  }
});
