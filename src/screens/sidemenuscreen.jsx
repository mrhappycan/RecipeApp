import React from "react";
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from "../uility/firebase";
import Home from "../assets/home";
import Heart from "../assets/heart";
import LogOut from "../assets/logout";
import ProfileScreen from "./profile";

const SideMenuScreen = props => {

    return (
        <SafeAreaView style={Styles.container}>
            <View style={Styles.topView}>
                <View style={Styles.profileImage} />
                <View style = {Styles.nameView}>
                    <Text style={Styles.name}>
                        Denny
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate('Profile')
                        }}
                    >
                        <Text style={Styles.btn}>
                            View Profile
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={Styles.optView}>
                <TouchableOpacity
                    style={Styles.optionView}
                    onPress={() => {
                        props.navigation.navigate('Home')
                    }}
                >
                    <Home />
                    <Text style={Styles.optbtn}>
                        Home
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={Styles.optionView}
                    onPress={() => {
                        props.navigation.navigate('Favourite')
                    }}
                >
                    <Heart />
                    <Text style={Styles.optbtn}>
                        Favourite
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={Styles.optionView}
                    onPress={() => {
                        auth().signOut()
                        props.navigation.navigate('Login')
                    }}
                >
                    <LogOut />
                    <Text style={Styles.optbtn}>
                        Log Out
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 36,
    },

    profileImage: {
        width: 70,
        height: 70,
        backgroundColor: 'gray',
        borderRadius: 90,
    },

    nameView: {
        marginLeft: 20
    },

    topView: {
        flexDirection: 'row',
    },

    name: {
        fontWeight: '700',
        fontSize: 28,
        color: 'black'
    },

    btn: {
        fontWeight: '700',
        fontSize: 12,
        color: 'orange'
    },

    optView: {
        justifyContent: 'space-around',
        height: '30%'
    },

    optionView: {
        flexDirection: 'row',
    },

    optbtn: {
        fontWeight: '600',
        fontSize: 24,
        color: 'black',
        width: 100,
        textAlign: 'center',
        flex: 1
    },
})

export default SideMenuScreen