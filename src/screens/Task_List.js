import React, {Component} from "react"
import {StyleSheet, View, Text, ImageBackground} from "react-native"
import today_Image from '../../assents/imgs/today.jpg'
import moment from "moment"
import 'moment/locale/pt-br'
import Task from "../components/Task"
export default class Task_List extends Components{
    render(){
        const today = moment().locale('pt-br').format('dddd, DD [de]  MMMM [de] YYYY')
        return(
            <View style={styles.container}>
                 <ImageBackground source = {today_Image} style={styles.background}>
                    <View style = {styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text tyle={styles.subTitle}>14/06/2024</Text>
                    </View>
                 
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
    },
    titleBar :{
        flex: 1,
        justifyContent: 'flex-end'

    },
    title:{
        fontFamily: 'Arial',
        fontSize: 50,
        color: '#FFF',
        marginLeft: 20,
        marginButtom: 20
    },
    subTitle:{ 
    fontFamily: 'Arial',
    fontSize: 20,
    color: '#FFF',
    marginLeft: 20,
    marginButtom: 30
}


})