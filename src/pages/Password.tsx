import { useRoute } from "@react-navigation/core";
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

export function Password(){

  const route = useRoute()

  const { email } = route.params;

  return (
    <Fragment>
        <View style={style.container}>

        <Text style={style.title}>{email}</Text>

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
  }
});

