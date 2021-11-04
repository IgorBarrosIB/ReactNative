import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps, StyleSheet  } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string
}



export function Button({title ,...rest} : ButtonProps){
  return(
    <TouchableOpacity
    style={style.button}
    activeOpacity={0.7}
    {...rest}
  >
    <Text style={style.buttonText}>{title}</Text>
  </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  button : {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginBottom: 5
  },
  buttonText : {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold'
  },
});
