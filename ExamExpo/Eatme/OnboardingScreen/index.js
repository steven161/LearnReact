import React, { Component } from 'react'
import { View , Text, StyleSheet, StatusBar} from 'react-native'
import Button from '../components/Button';
import GilroyText from '../components/GilroyText';
import Screen1 from './Screen1'
import Screen2 from './Screen2';
import Screen3 from './Screen3';



export default class index extends Component {
    constructor(props){
        super(props);

        this.state = {
            screenName: 1,
        };
    }

    handlePressNext = () => {
        let s = this.state.screenName;
        s++;
        if(s>3) s = 1;
        this.setState({
            screenName: s,
        });
    };

    render() {
        let CurrentScreen = Screen1;
        if(this.state.screenName === 2){
            CurrentScreen = Screen2;
        }else if(this.state.screenName ===3){
            CurrentScreen = Screen3;
        }

        return (
            <React.Fragment>
                <StatusBar backgroundColor='rgba(255, 92, 1, 0.2)' barStyle='dark-content'/>
                <CurrentScreen/>
                <View style={styles.buttonContainer}>
                    <GilroyText style={{fontSize:16, color:'#757D85', lineHeight:19}}><Text>Skip</Text></GilroyText>
                    <Button title='Next' 
                        onPress = {this.handlePressNext}
                        style={{backgroundColor:'#FF6C44', width: 168, height: 56}}/>
                </View>
            </React.Fragment>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        //backgroundColor: 'red',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 32,
        marginHorizontal: 24,
    }
    
});
