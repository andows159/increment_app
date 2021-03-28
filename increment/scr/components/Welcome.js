import React, {Component} from 'react';
import {Text, TouchableOpacity, TouchableOpacityBase, View} from 'react-native';
import styles from '../style/index';

export default class Welcome extends Component {
  
  render() {
    return (
      <View style={styles.container}>


        <Text style={styles.text}>
            {this.props.counter} types
        </Text>
        
        
        <TouchableOpacity style={styles.button} onPress={this.props.increment}>
           <Text>SUM ONE</Text>
        
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.props.format}>
           <Text>Format</Text>

        </TouchableOpacity>

       </View>
        
        
      
    );
  }
}