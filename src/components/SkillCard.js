import React from "react";
import {TouchableOpacity, Text, StyleSheet} from  'react-native';

export function SkillCard({skill}){
 return(
  <TouchableOpacity style={style.buttonSkill}>
    <Text style={[style.textSkill]}>
      {skill}
    </Text>
  </TouchableOpacity>
 )
}

const style = StyleSheet.create({
  buttonSkill:{
    backgroundColor: '#1F1E25',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 2
  },
  textSkill : {
    color : '#FFF',
    fontSize: 22,
    fontWeight: 'bold'
  },
});
