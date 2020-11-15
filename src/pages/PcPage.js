//import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import React from 'react';
import { View } from 'react-native';
import PcList from '../component/PcList';


export default class PcPage extends React.Component{
  constructor(props){
    super(props)
    this.state={
      pcs: []
    }
  }

  componentDidMount(){
    axios
      .get('https://demo2722222.mockable.io/pcs')
      .then( response =>{
        const {results} = response.data
        this.setState({
          pcs: results
        })
      })
  }

  render(){
    return(
      <View>
        <PcList pcs={this.state.pcs}
                onPressItem={ (pc) => {
                        this.props.navigation.navigate('Detalhes do PC',
                        {"pc": pc})
                }}
        />
      </View>
    )
  }

}