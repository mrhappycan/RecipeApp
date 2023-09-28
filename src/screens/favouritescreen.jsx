import React, { useState } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Button,
    FlatList,
    TextInput,
    Image
} from 'react-native'
import Optionicon from '../assets/option'
import Filtericon from '../assets/filter'
import Plusicon from '../assets/plus'
import Searcicon from '../assets/search'
import HeartClose from '../assets/heartclose'
import HeartOpen from '../assets/hartopen'
import Clock from '../assets/clock'
import GoBack from '../assets/goBack'
import { SafeAreaView } from 'react-native-safe-area-context'
import { auth } from '../uility/firebase'
import { endEvent } from 'react-native/Libraries/Performance/Systrace'

const getImageResources = (imageName) => {
    const staticImages = {
        'chicken_burger': require('../assets/photos/chicken_burger.png'),
        'chocolate_cake': require('../assets/photos/chocolate_cake.png'),
        'cup_cake': require('../assets/photos/cup_cake.png'),
        'toast_with_berries': require('../assets/photos/toast_with_berries.png')
    }

    if (staticImages[imageName]) {
        return staticImages[imageName]
    }

    return { uri: imageName }
}

const FavouriteScreen = props => {

    return (
        <SafeAreaView>
            <View style={Styles.container}>
                <View style={Styles.topview}>
                    <Text style = {Styles.txt}>
                        Favourite
                    </Text>
                    <TouchableOpacity>
                        <GoBack/>
                    </TouchableOpacity>
                </View>

                <View>
                    <View style={Styles.txtinputcontainer}>
                        <View style={Styles.txtinput}>
                            <TextInput
                                style={Styles.txtinputtxt}
                                placeholder='Search Recipe'
                            />
                            <TouchableOpacity>
                                <Searcicon />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            style={Styles.filter}
                        >
                            <Filtericon />
                        </TouchableOpacity>
                    </View>
                </View>

                <View>
                    <FlatList/>
                </View>
            </View>
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        justifyContent: 'space-around',
        paddingHorizontal: 30,

    },

    topview: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    txt: {
        fontWeight: '700',
        fontSize: 24,
        color: 'black'
    },

    txtcontainer: {
        flexDirection: 'row'
    },

    txtinputcontainer: {
        flexDirection: 'row',
    },

    txtinput: {
        borderBottomColor: 'black',
        borderWidth: 3,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        justifyContent: 'space-between',
        height: 40,
        flex: 1,
        marginRight: 50,
    },

    txtinputtxt: {
        fontSize: 12,
        fontWeight: '400',
        color: 'black',
        flex: 1,
    },

    filter: {
        borderBottomColor: 'black',
        borderWidth: 3,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        justifyContent: 'center',
    },

    recipes2: {
        height: 64,
        width: '100%',
        backgroundColor: 'grey',
        borderRadius: 10,
        marginBottom: 8,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
})
export default FavouriteScreen