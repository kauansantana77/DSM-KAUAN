import React, {useState} from 'react';
import {View, TextInput, Text} from 'react-native';

export default function(){

     const [nome, setNome]=useState("")
     const mudarNome=()=>{}
    return(
    <View>
        <Text>Digite seu texto aqui:</Text>
        <TextInput
            style={{borderWidth:1, borderColor:'#000'}}
            value={nome}
            onChangeText={text=>setNome(text)}
            />
            <Text>O texto digitado foi: {nome}</Text>
    </View>
)   

}
