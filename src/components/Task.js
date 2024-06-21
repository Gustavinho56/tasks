import React  from "react"
import {StyleSheet, View, Text, TouchableWithoutFeedback} from "react-native"
import moment from "moment"
import 'moment/locale/pt-br'
import { Icon } from "react-native-vector-icons/FontAwesome6"
export default props => {
    return(
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => alert("Olá")}>
                <View style={styles.checkContainer}>
                  {get_check_view(props.done_at)} 
                </View>
            </TouchableWithoutFeedback>

        <View>
            
            <Text style={styles.desc}>{props.description}</Text>
            <Text style={styles.date}>{props.estimate_at}</Text>
            <Text style={styles.date}>{props.done_at}</Text>
            </View>
        </View>
    )

}

function get_check_view(done_at){
    if(done_at != null){
   return (
    <View style={styles.done}>
    <Icon name="check" size={20}></Icon>
    </View>
    )

    } else {
        return (
            <View style={styles.pending}>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        borderColor:'#AAA',
        borderBottomWidht: 1,
        alignItems: 'center',
        paddingVertical: 20
    },
    desc:{
        fontFamily:'Arial',
        fontSize: 20,
        color: '#333'
    },
    date:{
        fontFamily: 'Arial',
        color: '#555'
    },
    checkContainer:{
        widht: '20',
        alignItems: 'center',
        justifyContent: 'center'
    },
    done:{
        height: 25,
        widht: 25,
        borderRadius: 13,
        borderWidht: 1,
        backgroundColor: '#4D7031',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pending:{
        height: 25,
        widht: 25,
        borderRadius: 13,
        borderWidht: 1,
        borderColor: '#555555'
    }

})