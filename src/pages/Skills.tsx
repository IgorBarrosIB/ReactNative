import React, {Fragment, useState, useEffect} from "react";
import {
  Text,
  View,
  StyleSheet,
  Platform,
  FlatList,
}from "react-native";

interface SkillData {
  id: string;
  name: string;
}

export function Skills(){
  const [greetings, setGreetings] = useState('');

  const data =
    [
      {
        "color": "black",
        "category": "hue",
        "type": "primary",
        "code": {
          "rgba": [255,255,255,1],
          "hex": "#000"
        }
      },
      {
        "color": "white",
        "category": "value",
        "code": {
          "rgba": [0,0,0,1],
          "hex": "#FFF"
        }
      },
      {
        "color": "red",
        "category": "hue",
        "type": "primary",
        "code": {
          "rgba": [255,0,0,1],
          "hex": "#FF0"
        }
      },
      {
        "color": "blue",
        "category": "hue",
        "type": "primary",
        "code": {
          "rgba": [0,0,255,1],
          "hex": "#00F"
        }
      },
      {
        "color": "yellow",
        "category": "hue",
        "type": "primary",
        "code": {
          "rgba": [255,255,0,1],
          "hex": "#FF0"
        }
      },
      {
        "color": "green",
        "category": "hue",
        "type": "secondary",
        "code": {
          "rgba": [0,255,0,1],
          "hex": "#0F0"
        }
      },
    ]


  const Item = ({ color }) => (
    <View>
      <Text>{color}</Text>
    </View>
  );

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

  function renderCardCores({item, index}) {
    return(
      <View style={{height: 100, alignItems:'center', justifyContent: 'center', width: '90%', marginBottom: 10, backgroundColor: item.color}} >
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.code.hex}</Text>
      </View>
    )
  }

  return (
    <Fragment>
      <View style={style.container}>
        <Text style={style.title}>{greetings}, <Text style={{color:'blue'}}>Igor Barros.</Text></Text>

        <FlatList
            style={{flex: 1}}
            data={data}
            renderItem={renderCardCores}
        />
      </View>
    </Fragment>
  )};

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 20,
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

