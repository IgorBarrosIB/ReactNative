import React, {Fragment, useState, useEffect} from "react";
import {Text, View, StyleSheet, SafeAreaView, TextInput, Platform, TouchableOpacity, FlatList} from "react-native";
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

export function Home(){
  const [newNome, setNome] = useState('');
  const [newTelefone, setTelefone] = useState('');


  return (
    <Fragment>
        <View style={style.container}>
          <Text style={style.title}>Cadastro de usúario</Text>

          <Text style={style.fildTitle}>Nome Completo:</Text>

          <TextInput
            style={style.input}
            placeholder=""
            placeholderTextColor="#555"
            onChangeText={setNome}
          />

          <Text style={style.fildTitle}>Telefone:</Text>

          <TextInput
            style={style.input}
            placeholder=""
            placeholderTextColor="#555"
            onChangeText={setTelefone}
          />

          <Button/>

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
    marginBottom : 15
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginBottom: 10,
    borderRadius: 7
  },
  fildTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    marginBottom : 5
  },
});

