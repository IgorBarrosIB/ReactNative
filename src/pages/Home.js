import React, {Fragment, useState, useEffect} from "react";
import {Text, View, StyleSheet, SafeAreaView, TextInput, Platform, TouchableOpacity, FlatList} from "react-native";
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

export function Home(){
  const [newSkill, setNewSkill] = useState('');
  const [mySkill, setMySkill] = useState([]);
  const [greetings, setGreetings] = useState('');

  function handleAddNewSkill(){
    setMySkill(oldState => [...oldState, newSkill]);
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
      <SafeAreaView style={style.container}>
        <Text style={style.title}>{greetings}, <Text style={{color:'blue'}}>Igor Barros.</Text></Text>

        <TextInput
          style={style.input}
          placeholder="New skill"
          placeholderTextColor="#555"
          onChangeText={setNewSkill}
        />

        <Button handleAddNewSkill={handleAddNewSkill}/>

        <Text  style={[style.title, {marginVertical: 50}]}>MySkill</Text>

        <FlatList
          data={mySkill}
          keyExtractor={item => Math.random().toString(36).substr(2, 9)}
          renderItem={({item}) => (
            <SkillCard skill={item}/>
         )}

        />

      </SafeAreaView>
    </Fragment>
  )};

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom : 2
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
