import React,{Component} from 'react';
import {View,StyleSheet,Text} from 'react-native';

export default class NavBar extends Component{
	render(){
		return (
			<View style={styles.container}>
				<Text style={{textAlign:'center',color:'#1E90FF',fontSize:20}}>Zenanlysis</Text>
			</View>
			)
	}
}
const styles = StyleSheet.create({
	container:{
		height:50,
		paddingTop:15,
		borderBottomWidth:1,
		borderColor:'#DCDCDC'
	}
})