import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityBase, View} from 'react-native';
import styles from '../style/index';

export default function Welcome(props) {
  return (
    /* GLOBALVIEW */
    <View style={styles.body}>
      <View style={styles.container}>
        <Text style={styles.text}>{props.counter} types</Text>

        <TouchableOpacity style={styles.button} onPress={props.increment}>
          <Text>Sum One !</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={props.format}>
          <Text>Clean !</Text>
        </TouchableOpacity>

        <Text style={styles.message}>global counter: {props.message}</Text>
      </View>
      {/* fOOOTER */}
      <View>
        <Text style={styles.footerText1}>Created by Gerssivaldo Santos</Text>
      </View>
      {/* fINAL FOOTER */}
    </View>
    /* FINAL GLOBAL VIEW */
  );
}
