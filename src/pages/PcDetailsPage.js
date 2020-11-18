import React from 'react'
import {Text, StyleSheet,Image, SafeAreaView} from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'

export default class PcDetailsPage extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            "pc": props.route.params.pc
        }
    }

    render (){
        return(
            <SafeAreaView>
            <Image style = {style.picture} source = {{uri: this.state.pc.img2}} />
            <Text style = {style.texttitle}>PC: </Text>
            <Text style = {style.text}>{this.state.pc.nome.pcnome}</Text>
            <Text style = {style.texttitle}>Placa-Mãe: </Text>
            <Text style = {style.text}> {this.state.pc.motherboard}</Text>
            <Text style = {style.texttitle}>Processador:</Text>
            <Text style = {style.text}>{this.state.pc.processor}</Text>
            <Text style = {style.texttitle}>Placa de Video:</Text>
            <Text style = {style.text}> {this.state.pc.graphics}</Text>
            <Text style = {style.texttitle}>Armazenamento:</Text>
            <Text style = {style.text}>{this.state.pc.storage}</Text>
            <Text style = {style.texttitle}>Memória Ram:</Text>
            <Text style = {style.text}>{this.state.pc.ram}</Text>
            <Text style = {style.texttitle}>Fonte:</Text>
            <Text style = {style.text}>{this.state.pc.font}</Text>

            </SafeAreaView>
        )
    }
}

const style = StyleSheet.create(
    {
        texttitle: {
            fontFamily: "Arial", 
            fontSize: 30, 
            textAlign: "center",
            color: "#2C2932"
        },

        text: {
            fontFamily: "Arial", 
            fontSize: 22, 
            textAlign: "center",
            color: "#C94747"
        },
        picture: {
                aspectRatio: 1, 
                margin: 70, 
                height: 400
                
        }
    }
)