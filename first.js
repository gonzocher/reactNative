import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Constants } from 'expo';
import { Card, TextInput, ProgressBar, Button, Searchbar } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Searchbar
      placeholder="Search"
      />
      <Image
        style={{width: 50, height: 50}}
        source={{uri:
        'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        />
        <Card>
          <Text styles={styles.text}>
            Log in Here:
          </Text>
          <TextInput label='Username'></TextInput>
          <TextInput label='Password'></TextInput>
          <Button mode="contained">Press Me to Login </Button>
        </Card>
        <ProgressBar progress={0.5}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'whitesmoke',
    padding: 9,
  },
  text: {
    margin: 42,
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});


//source for elements at https://callstack.github.io/react-native-paper/
