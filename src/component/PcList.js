import React from 'react'
import {View, StyleSheet, SafeAreaView, FlatList, Text} from 'react-native'
import PcListItem from './PcListItem'

const PcList = props => {
    const{pcs, onPressItem} = props
    const renderItem = ({item}) =>{
        return (
            <PcListItem 
            key = {item.nome.pcnome}
            pc = {item}
            onPressItemDetails = {onPressItem}
            />
        )
    }
    const header= () => {
        return (
            <View style={style.headerStyle}>
                <Text style={style.titleStyle}>
                    PCs
                </Text>
            </View>
        )
    }
    return(
        <View style = {style.container}>
            <SafeAreaView>
                <FlatList
                    data={pcs}
                    renderItem={renderItem}
                    keyExtractor={(item) => {item.nome.pcnome}}
                    ListHeaderComponent={header}
                    stickyHeaderIndices={[0]}
                />
            </SafeAreaView>
        </View>
    )
}
const style = StyleSheet.create(
    {
        container: {
            backgroundColor: '#f5f5dc'
        },
        headerStyle: {
            flex: 1, height: 50, width: '100%', backgroundColor: "#B1BDB5", justifyContent: "center", alignItems: 'center'
        },
        titleStyle: {
            color: '#000', fontSize: 20
        }
    }
)

export default PcList