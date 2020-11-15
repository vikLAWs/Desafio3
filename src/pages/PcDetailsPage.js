import React from 'react'
import {Text, StyleSheet,Image, SafeAreaView} from 'react-native'

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
            <Image style = {style.avatar} source = {{uri: this.state.pc.img2}} />
            <Text style = {style.text}>PC: </Text>
            <Text style = {style.text}>{this.state.pc.nome.pcnome}</Text>
            <Text style = {style.text}>Placa-Mãe: </Text>
            <Text style = {style.text}> {this.state.pc.motherboard}</Text>
            <Text style = {style.text}>Processador:</Text>
            <Text style = {style.text}>{this.state.pc.processor}</Text>
            <Text style = {style.text}>Placa de Video:</Text>
            <Text style = {style.text}> {this.state.pc.graphics}</Text>
            <Text style = {style.text}>Armazenamento:</Text>
            <Text style = {style.text}>{this.state.pc.storage}</Text>
            <Text style = {style.text}>Memória Ram:</Text>
            <Text style = {style.text}>{this.state.pc.ram}</Text>
            <Text style = {style.text}>Fonte:</Text>
            <Text style = {style.text}>{this.state.pc.font}</Text>

            </SafeAreaView>
        )
    }
}

const style = StyleSheet.create(
    {
        text: {
            fontFamily: "Cambria", 
            fontSize: 25, 
            textAlign: "left",
            color: "#f0f"
        },

        avatar: {
                aspectRatio: 1, 
                margin: 70, 
                height: 250
        }
    }
)