import React, {Fragment, useState, useEffect} from "react";
import {
  Text,
  View,
  Alert,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  TouchableOpacity,
  FlatList,
}from "react-native";

import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

interface SkillData {
  id: string;
  name: string;
}

export function Skills(){
  const [newSkill, setNewSkill] = useState('');
  const [mySkill, setMySkill] = useState<SkillData[]>([]);
  const [greetings, setGreetings] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleAddNewSkill(){
    if(email == "igorbarros@gmail.com" && senha == "123"){
      Alert.alert("sucesso", "você será redirecionado")
    }else{
      Alert.alert("Error", "Por favor preencha os campos corretamente!")
    }
    /*
    CTRL + M = Abrir o comando de DEBUG
    Ir no console do navegador
    console.log("New Skill",data);
    */

  }

  function handleRemoveSkill(id: string){
    setMySkill(oldState => oldState.filter(
      skill => skill.id !== id
    ))
  }

  useEffect(() => {
    const currentHour =  new Date().getHours();

    if(currentHour < 12){
     setGreetings('Good morning');
    }else if(currentHour >= 12 && currentHour < 18 ){
      setGreetings('Good afternoon');
    }else{
      setGreetings('Good night');
    }

  }, [])

  return (
    <Fragment>
        <View style={style.container}>



        </View>
    </Fragment>
  )};

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom : 5
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginBottom: 30,
    borderRadius: 7
  },
  rodape: {
    alignSelf: 'center',
    marginBottom: 20,
    color: 'red'
  },
  greetings : {
    color : '#FFF'
  },
});

