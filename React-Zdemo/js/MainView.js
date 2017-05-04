import React , {Component} from 'react';
import {View,Text,StyleSheet,TextInput,TouchableHighlight,ListView,Alert,ScrollView
} from 'react-native';
import Item from './Item';
import NavBar from './NavBar';

export default class MainView extends Component{
	constructor(props) {
	  super(props);
	const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.options = []

    this.state = {
      dataSource: ds.cloneWithRows(this.options),
      text:'',
      buttonText:['确定','开选'],
      status:0//0 is to input
    };

	
	  this._onPressButton = this._onPressButton.bind(this);
	}
	GetRet(Opt) {
    return Math.round(Math.random() * Opt);
	}
	_onPressButton(){
		if(this.state.status == 0 || this.state.text){
			if(!this.state.text){
			Alert('输入不可为空');
			return;
		}
		this.options.push(this.state.text);
		if(this.options.length != 0){this.setState({status:1})};

		this.setState({text:''})
	}else{
		Alert.alert('推荐选择:',this.options[this.GetRet(this.options.length-1)]);
		this.setState({status:0});
		this.options = [];
	
	}
	const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	this.setState({dataSource:ds.cloneWithRows(this.options)})
		
	}
	render(){
		return (
      // Try setting `justifyContent` to `center`.
      // Try setting `flexDirection` to `row`.
      <View style={styles.container}>
      	<NavBar />
        <ScrollView>
        <ListView
          dataSource={this.state.dataSource}
          enableEmptySections={true}
          renderRow={(rowData) => <Item itemText={rowData}></Item>}
        />
        </ScrollView>
        <View style={styles.buttonAndInput}>
        <TextInput
          style={styles.input}
          placeholder="输入你的选择"
		 underlineColorAndroid={'transparent'}
          onChangeText={(text) => this.setState({text})}
          onSubmitEditing={this._onPressButton}
          value={this.state.text}
        />
        <TouchableHighlight 
        onPress={this._onPressButton}
        style={styles.button}
        ><Text style={styles.buttonText}>
        {this.state.status == 0|| this.state.text ? this.state.buttonText[0]:this.state.buttonText[1]}
        </Text></TouchableHighlight>
        </View>
      </View>
    );
	}
}
const styles = StyleSheet.create({
	container:{
		flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        // alignItems:'center',
        paddingTop:20
	},
	buttonAndInput:{
		flexDirection:'row',
		borderTopWidth:1,
		borderColor:'#DCDCDC'
	},
	input:{
		height: 40,
		flex:4,
		borderColor:'#DCDCDC',
		borderWidth:1,
		margin:5,
		paddingLeft:10,
		borderRadius:5,
	},
	button:{
		padding:10,
		backgroundColor:'#1E90FF',
		flex:1,
		borderRadius:20,
		margin:5,
	},
	buttonText:{
		textAlign:'center',
		fontSize:15,
		color:'white'
	}

})