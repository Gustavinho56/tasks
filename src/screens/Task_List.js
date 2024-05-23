import React, {Component} from "react"
import {StyleSheet, View, Text, ImageBackground} from "react-native"
import today_Image from '../../assents/imgs/today.jpg'
 
export default class Task_List extends Components{
    render(){
        return(
            <View style={styles.container}>
                 <ImageBackground source = {today_Image} style={styles.background}>

                 
                 </ImageBackground>
                
                <View style={styles.tasklist}>
                 <Text> Lista de Tarefas </Text>
                </View>
            
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    background:{
        flex: 3
    },
    taskList:{
        flex : 7
    }
})