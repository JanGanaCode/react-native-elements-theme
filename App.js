/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {
  Button,
  Header,
  Badge,
  ButtonGroup,
  CheckBox,
  ThemeProvider,
  setTheme,
  getTheme
} from 'react-native-elements';

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const Spacer = () => <View style={{ marginBottom: 30 }} />;

class Test extends Component<{}> {
  state = {
    checked: true,
    selectedIndex: 2
  };

  updateIndex = selectedIndex => {
    this.setState({ selectedIndex });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          centerComponent={{
            text: 'Welcome to React Native Elements',
            style: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
          }}
        />
        <View style={styles.container}>
          <Button
            text="Change Theme"
            onPress={() => {
              setTheme({
                primary: getRandomColor()
              });
            }}
          />

          <Spacer />

          <Badge value={3} />

          <Spacer />

          <CheckBox
            checked={this.state.checked}
            onPress={() => this.setState({ checked: !this.state.checked })}
          />

          <CheckBox
            title="Heyy"
            checked={this.state.checked}
            onPress={() => this.setState({ checked: !this.state.checked })}
          />

          <CheckBox
            title="Heyy"
            iconRight
            checked={this.state.checked}
            onPress={() => this.setState({ checked: !this.state.checked })}
          />

          <Spacer />

          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={this.state.selectedIndex}
            buttons={['Hello', 'World', 'Buttons']}
          />
        </View>
      </View>
    );
  }
}

export default class App extends Component<{}> {
  render() {
    const theme = {
      primary: 'darkblue'
    };

    return (
      <ThemeProvider theme={theme}>
        <Test />
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
