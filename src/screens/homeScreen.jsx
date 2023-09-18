import React, {useState} from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Button,
    FlatList,
    TextInput
} from 'react-native'
import Optionicon from '../assets/option'
import Filtericon from '../assets/filter'
import Plusicon from '../assets/plus'
import Searcicon from '../assets/search'

const HomeScreen = props => {
    return (
        <View style={Styles.container}>
            <View style={Styles.topview}>
                <TouchableOpacity
                    onPress={() => {
                        console.log(props.route.params)
                    }}
                >
                    <Plusicon />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Optionicon />
                </TouchableOpacity>
            </View>

            <View>
                <View style={Styles.txtcontainer}>
                    <Text style={Styles.welcometxt}>
                        Welcome{' '}
                    </Text>
                    <Text style={Styles.nametxt}>
                        {props.route.params}
                    </Text>
                </View>
                <Text style={Styles.txt}>
                    What would you like to cook today?
                </Text>
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

            <View style={Styles.freshrecipe}>
                <Text style={Styles.btntxt}>
                    Today's fresh recipe
                </Text>
                <TouchableOpacity
                onPress={() => {
                    props.navigation.navigate('FreshRecipe')
                }}>
                    <Text style={Styles.btn}>
                        See all
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <View style={Styles.freshrecipe}>
                    <Text style={Styles.btntxt}>
                        Recommended
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate('Recommended')
                        }}
                    >
                        <Text style={Styles.btn}>
                            See all
                        </Text>
                    </TouchableOpacity>
                </View>
                <FlatList/>
            </View>
        </View>
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

    txtcontainer: {
        flexDirection: 'row'
    },

    welcometxt: {
        fontSize: 20,
        fontWeight: '600',
        color: 'black'
    },

    nametxt: {
        fontSize: 20,
        fontWeight: '600',
        color: 'orange'
    },

    txt: {
        fontSize: 35,
        fontWeight: '700',
        color: 'orange'
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
        justifyContent: 'space-between',
    },

    freshrecipe: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    btn: {
        fontSize: 20,
        fontWeight: '700',
        color: 'orange'
    },

    btntxt: {
        fontSize: 20,
        fontWeight: '700',
        color: 'black',
    }
})
export default HomeScreen