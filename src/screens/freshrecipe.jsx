import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Button,
    FlatList,
    TextInput
} from 'react-native'
import GoBack from '../assets/goBack'
import Searcicon from '../assets/search'
import Filtericon from '../assets/filter'

const FreshRecipeScreen = props => {
    return(
        <View style = {Styles.container}>
            <View>
                <View style = {Styles.topview}>
                    <Text style = {Styles.txt}>
                        Today's Fresh Recipe
                    </Text>

                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.goBack()
                        }}
                    >
                        <GoBack/>
                    </TouchableOpacity>
                </View>

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

            <FlatList/>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: 30
    },

    topview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    txt: {
        fontSize: 25,
        fontWeight: '700',
        color: 'black'
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
})
export default FreshRecipeScreen