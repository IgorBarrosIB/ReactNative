import React, {Fragment, useState, useEffect} from "react";
import { Text, View, StyleSheet, TextInput}from "react-native";

interface PeopleData{
  id: string;
  name: string;
  phone?: string; //Opicional
}

export function Home(){

  const [newName, setName] = useState('');
  const [newPhone, setPhone] = useState('');
  const [myPeople, setPeople] = useState<PeopleData[]>([]);

  function addPeople(){
    const data ={
      id: String(new Date().getTime),
      name: newName,
      phone: newPhone
    }

    setPeople(oldState => [...oldState, data]);

  }

  return (
    <Fragment>
      <View style={style.container}>
        <Text style={style.text}>Nome completo:</Text>
        <TextInput style={style.textIn} onChangeText={setName}/>

        <Text style={style.text}>Telefone:</Text>
        <TextInput style={style.textIn} onChangeText={setPhone}/>

        <Text>Nome é {newName} e seu telefone e {newPhone} </Text>

      </View>
    </Fragment>
  )
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "#C36A2D",
    flex: 1,
    padding: 24
  },
  text : {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold"
  },
  textIn : {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 8,
    color: "#212121",
    marginBottom: 10

  }
});

