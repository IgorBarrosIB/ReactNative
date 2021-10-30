import React from "react";
import { Text, TouchableOpacity, StyleSheet  } from 'react-native';

export function Button(){
  return(
    <TouchableOpacity
    style={style.button}
    activeOpacity={0.7}
  >
    <Text style={style.buttonText}>Add</Text>
  </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  button : {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center'
  },
  buttonText : {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold'
  },
});
