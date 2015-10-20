/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var TextInputState = require('TextInputState');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  TouchableHighlight
} = React;

var InacapExample = React.createClass({  
  render: function() {
    return (
      <TouchableWithoutFeedback onPress={this._resignFirstResponder} style={styles.touchable}>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Ejemplo Inacap
          </Text>
          <TextInput placeholder='Buscar...' style={styles.buscador}/>
          <TouchableHighlight onPress={this._startSearch} style={styles.button}>
            <Text style={styles.buttonText}>Buscar</Text>
          </TouchableHighlight>
        </View>
      </TouchableWithoutFeedback>
    );
  },
  _resignFirstResponder: function() {
    TextInputState.blurTextInput(TextInputState.currentlyFocusedField());
  },
  _startSearch: function () {
    this._resignFirstResponder();
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buscador: {
    height: 35,
    borderWidth: 1,
    borderColor: '#000',
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 10
  },
  touchable:{
    flex: 1
  },
  button: {
    backgroundColor: '#609732',
    width: 220,
    height: 40,
    borderRadius: 5,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#FFF'
  }
});

AppRegistry.registerComponent('InacapExample', () => InacapExample);
