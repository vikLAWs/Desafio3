import React from 'react'
import {View, StyleSheet} from 'react-native'
import PcListItem from './PcListItem'

const PcList = props => {
    const{pcs, onPressItem} = props
    const itens = pcs.map(pc =>{
        return (
            <PcListItem 
                key={pc.nome.pcnome}
                pc={pc}
                onPressItemDetails={onPressItem}
            />
        )
    })

    return(
        <View style={style.container}>
            {itens}
        </View>
    )  
}

const style = StyleSheet.create(
    {
        container: {
            backgroundColor: '#e2f977'
        }
    }
)

export default PcList