import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default class Item extends Component{
	render (){
		return (
			<View style={styles.Item}>
				<Text>{this.props.itemText}</Text>
			</View>
			);
	}
}
const styles = StyleSheet.create({
	Item:{
		flex:1,
		flexDirection:'column',
		justifyContent: 'center',
		borderBottomWidth:1,
		borderColor:'#DCDCDC',
		padding:10
	}
})