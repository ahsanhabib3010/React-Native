import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Note from './app/components/Note';


export default class App extends Component<{}> {

state = {
  noteArray: [],
  noteText: '',
}

  render() {

    let notes = this.state.noteArray.map((val, key) => {
        return <Note key={key} keyval={key} val={val} deleteMethod={ () => this.deleteNote(key) } />
    });

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}> - - - - - TODO's - - - - -</Text>
        </View>
   
        <ScrollView style={styles.scrollContainer}>
            {notes}
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
            <Text style={styles.addButtonText}> Add </Text>
          </TouchableOpacity>

          <TextInput style={styles.textInput}
            onChangeText={(noteText) => this.setState({noteText})} value={this.state.noteText} 
            placeholder='What needs to be done ???'
            placeholderTextColor='white' underlineColorAndroid='transparent'>
          </TextInput>
        </View>



      </View>
    );
  }

  addNote(){
      if(this.state.noteText){
        var d = new Date();
        this.state.noteArray.push({date: d.getDate() + "/" + (d.getMonth()+1) + "/" + d.getFullYear(), 'note': this.state.noteText});
        this.setState({noteArray: this.state.noteArray});
        this.setState({noteText: ''});
      }
  }

  deleteNote(key){
    this.state.noteArray.splice(key, 1);
    this.setState({noteArray: this.state.noteArray});
  }

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  header:{
    backgroundColor: '#19aab7',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth:10,
    borderBottomColor: '#34686d',
  },
  headerText:{
    color: 'white',
    fontSize: 24,
    padding: 26,
  },
  scrollContainer:{
    flex: 1,
    marginBottom: 80,
    backgroundColor: '#94d8fc',
  },
  footer:{
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0,
  },
  addButton:{
    backgroundColor: '#19aab7',
    width: 90,
    height: 90,
    borderRadius: 20,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    marginBottom: -35,
    zIndex: 10,
  },
  addButtonText:{
    color: '#fff',
    fontSize: 24,
  },
  textInput:{
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    paddingTop: 46,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed',
    fontSize: 18,
  }
});
