import React, {Component} from 'react';
import {Text, TouchableOpacity, TouchableOpacityBase, View} from 'react-native';
import styles from '../style/index';

export default class Welcome extends Component {
  render() {
    return (
      /* GLOBALVIEW */
      <View style={styles.body} >
        <View style={styles.container}>
          <Text style={styles.text}>{this.props.counter} types</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={this.props.increment}>
            <Text>Sum One !</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.props.format}>
            <Text>Clean !</Text>
          </TouchableOpacity>

          <Text style={styles.message}>
            global counter: {this.props.message}
          </Text>
        </View>
        {/* fOOOTER */}
        <View >
          <Text style={styles.footerText1}>Created by Gerssivaldo Santos</Text>
        </View>
        {/* fINAL FOOTER */}
      </View>
      /* FINAL GLOBAL VIEW */
    );
  }
}
