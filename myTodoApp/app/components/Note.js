import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';


export default class App extends Component<{}> {
  render() {
    return (
        <View key={this.props.keyval} style={styles.note}>
            <Text style={styles.noteText}> {this.props.val.date} </Text>
            <Text style={styles.noteText}> {this.props.val.note} </Text>

            <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
                <Text style={styles.noteDeleteText}>X</Text>
            </TouchableOpacity>
        
        </View>

    );
  }
}

const styles = StyleSheet.create({
  note:{
      position: 'relative',
      padding: 20,
      paddingRight: 100,
      borderBottomWidth: 2,
      borderBottomColor: '#ededed',
      backgroundColor: '#a0ff9b'
  },
  noteText:{
      paddingLeft: 20,
      borderLeftWidth: 10,
      borderLeftColor: '#19aab7',
      fontSize: 22,
     
  },
  noteDelete:{
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#2980b9',
      padding: 20,
      top: 10,
      bottom: 10,
      right: 10,
      borderRadius: 10,
  },
  noteDeleteText:{
      color: 'white',
      
  }
});
