import React, {Fragment, useState, useEffect} from "react";
import {
  Text,
  View,
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

export function Home(){
  const [newSkill, setNewSkill] = useState('');
  const [mySkill, setMySkill] = useState<SkillData[]>([]);
  const [greetings, setGreetings] = useState('');

  function handleAddNewSkill(){
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    }

    /*
    CTRL + M = Abrir o comando de DEBUG
    Ir no console do navegador
    console.log("New Skill",data);
    */

    setMySkill(oldState => [...oldState, data]);
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
          <Text style={style.title}>{greetings}, <Text style={{color:'blue'}}>Igor Barros.</Text></Text>

          <TextInput
            style={style.input}
            placeholder="New skill"
            placeholderTextColor="#555"
            onChangeText={setNewSkill}
          />

          <Button title="add" onPress={handleAddNewSkill}/>

          <Text  style={[style.title, {marginVertical: 50}]}>MySkill</Text>

          <FlatList
            data={mySkill}
            //keyExtractor={item => Math.random().toString(36).substr(2, 9)}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <SkillCard
                skill={item.name}
                onPress={() => handleRemoveSkill(item.id)}
              />
          )}

          />

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

