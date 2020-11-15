import React from 'react'
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'
import {toUpperFirst} from '../util'

const PcListItem = props => {
    const {pc, onPressItemDetails} = props
    const {pcnome} = pc.nome
    return(
        <TouchableOpacity onPress={() => {
            onPressItemDetails()
        }}>
        <View style = {style.line}>
            <Image style = {style.avatar} source = {{uri: pc.img}} />
            <Text style = {style.lineText} key = {pcnome}>
                {` ${
                    toUpperFirst(pcnome)
                }` }
            </Text>
        </View>
        </TouchableOpacity>
        )
}

const style = StyleSheet.create({
        line: {
            height:60,
            borderBottomWidth:1,
            borderBottomColor:'#bbb',
            alignItems: 'center',
            flexDirection: 'row'

        },

        avatar: {
            aspectRatio: 1, 
            marginLeft: 10, 
            flex: 1, 
            borderRadius: 50, 
        },

        lineText: {
            fontSize: 20, 
            paddingLeft: 20, 
            flex: 7
        }
    }
)
export default PcListItem