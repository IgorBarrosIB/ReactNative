import React from "react";
import {TouchableOpacity, TouchableHighlightProps,  Text, StyleSheet} from  'react-native';

interface SkillCardProps extends TouchableHighlightProps{
  skill: string;
}

export function SkillCard({skill, ...rest} : SkillCardProps){
 return(
  <TouchableOpacity style={style.buttonSkill} {...rest}>
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
