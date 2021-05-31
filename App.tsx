import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, ScrollView, SafeAreaView, Platform } from 'react-native';
import Component1 from './src/components/Component1';
import Component2 from './src/components/Component2';
// import Component3 from './src/components/Component3';
// import Component4 from './src/components/Component4';
// import Component5 from './src/components/Component5';
// import Component6 from './src/components/Component5';
// import Component7 from './src/components/Component5';
import Component8 from './src/components/Component5';

//Let's create a simple separator component that will only be used here in App.tsx
const Separator: React.FC = () => {
  return <View style={styles.separator}></View>
}

const App: React.FC = () => {
  return (
    <SafeAreaView style={[styles.container, {paddingTop: 30}]}>
      <Component8 />
    </SafeAreaView>
  )
}
/** 
const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}> 
        <ScrollView>
        <View style={styles.screenHeader}>
          <Image style={styles.logo} source={require('./src/img/PAU-Logo-Website.png')} />
        </View>
        <View style={styles.screenBody}>
            <Component1 /> 
            <Separator />
            <Component2 name='Chineze' /> 
            <Component2 /> 
            <Separator />
            <Component4 /> 
            <Separator /> 
            <Component5 /> 
            <Separator /> 
            <Component6 />
          </View>
        </ScrollView> 
      </KeyboardAvoidingView>
    </SafeAreaView>);
}
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03a9f4',
    alignItems: 'stretch',//change from 'center' to 'stretch' to avoid scroll line showing
    justifyContent: 'center',
    padding: 15
  },
  separator: {
    backgroundColor: '#eee',
    height: 3,
    width: '100%'
  },
  screenHeader: {
    flex: 1,
    paddingTop: 27,
    justifyContent: 'center',
    backgroundColor: 'darkblue'
  },
  screenBody: {
    flex: 6,
    justifyContent: 'center',
  },
  logo: {
    alignSelf: 'center',
    width: 200,
    height: 82
  }
});

export default App;


/*
  export default function App() {
    return (
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    );
  }
*/


/*
import { StatusBar } from 'expo-status-bar';
  import React from 'react';
  import { StyleSheet, Text, View } from 'react-native';

  export default function App() {
    return (
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
*/