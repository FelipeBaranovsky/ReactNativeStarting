import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, View, Platform, TouchableOpacity } from 'react-native'

interface Props {
    title: string;
    position?: 'br' | 'bl'
    onPress: () => void;
}



const Fab = ({title, onPress, position = 'br'}: Props) => {


    const android = () => {
        return (
            <>
                <View style={[styles.fabLocation, (position === 'br') ? {right: 25} : {left: 25}]}>
                    <TouchableNativeFeedback
                            onPress={onPress}
                            background={TouchableNativeFeedback.Ripple('black', false, 30)}
                    >
                            <View style={styles.fab}>
                                <Text style={styles.fabText}>
                                    {title}
                                </Text>
                            </View>
                    </TouchableNativeFeedback>
                </View> 
            </>
          )
    }
    
    const ios = () => {
        return (
            <>
                <View >
                    <TouchableOpacity style={[styles.fabLocation, (position === 'br') ? {right: 25} : {left: 25}]}
                            activeOpacity={0.7}
                            onPress={onPress}
                    >
                        <View style={styles.fab}>
                            <Text style={styles.fabText}>
                                {title}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View> 
            </>
        )
    }

  return (Platform.OS === 'ios') ? ios() : android();
}

const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 25,
    },
    
    fab: {
        backgroundColor: '#5856D6',
        borderRadius: 100,
        height: 60,
        width: 60,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    },
    fabText: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlign: 'center',
    }
})


export default Fab