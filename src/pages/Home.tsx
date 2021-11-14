import { useNavigation } from "@react-navigation/core";
import React, {Fragment, useState, useEffect} from "react";
import {
  Text,
  View,
  Alert,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
}from "react-native";

import { Button } from "../components/Button";

interface SkillData {
  id: string;
  name: string;
}

export function Home(){
  const [mySkill, setMySkill] = useState<SkillData[]>([]);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation()

  function handleAddNewSkill(){
    navigation.navigate('Skills')
    if(email == "igorbarros@gmail.com" && senha == "123"){
     // Alert.alert("sucesso", "você será redirecionado")
    }else{
      Alert.alert("Error", "Por favor preencha os campos corretamente!")
    }
    /*
    CTRL + M = Abrir o comando de DEBUG
    Ir no console do navegador
    console.log("New Skill",data);
    */

  }

  function password(){
    navigation.navigate("Password", {email: email})

  }

  function handleRemoveSkill(id: string){
    setMySkill(oldState => oldState.filter(
      skill => skill.id !== id
    ))
  }

  return (
    <Fragment>
        <View style={style.container}>

          <Text style={style.title}>App Estudo Dev</Text>

          <TextInput
            style={style.input}
            placeholder="Email"
            placeholderTextColor="#555"
            onChangeText={setEmail}
          />

          <TextInput
            style={style.input}
            placeholder="senha"
            placeholderTextColor="#555"
            secureTextEntry
            onChangeText={setSenha}
          />



          <Button title="Entrar" onPress={handleAddNewSkill}/>
          <Button title="Esqueci minha senha" onPress={password}/>

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
  }
});

