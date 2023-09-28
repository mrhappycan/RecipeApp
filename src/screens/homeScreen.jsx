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

const HomeScreen = props => {
    const [recipes, setRecipes] = useState([
        {
            image: 'toast_with_berries',
            name: 'Toast with Berries',
            like: false,
            time: '10:00',
            puan: '4.5/5',
            category: 'breakfast'
        },

        {
            image: 'chicken_burger',
            name: 'Chicken Burger',
            like: false,
            time: '20:00',
            puan: '4.3/5',
            category: 'dinner'
        },

        {
            image: 'chocolate_cake',
            name: 'chocolate cake',
            like: false,
            time: '10:00',
            puan: '4.5/5',
            category: 'desert'
        },

        {
            image: 'cup_cake',
            name: 'cup cake',
            like: false,
            time: '05:00',
            puan: '4.5/5',
            category: 'desert'
        }
    ])

    const Favourite = async () => {
        await auth().currentUser.reload()
        console.log(auth().currentUser)
        props.navigation.navigate('Favourite')
    }

    return (
        <SafeAreaView>
            <View style={Styles.container}>
                <View style={Styles.topview}>
                    <TouchableOpacity>
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
                        onPress={Favourite}>
                        <Text style={Styles.btn}>
                            See all
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <FlatList
                        data={recipes}
                        renderItem={element => {
                            return (
                                <View style={Styles.recipes}>
                                    <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity
                                            onPress={() => {
                                                setRecipes([
                                                    ...recipes.slice(0, element.index),
                                                    {
                                                        like: !element.item.like,
                                                        image: element.item.image,
                                                        category: element.item.category,
                                                        name: element.item.name,
                                                        time: element.item.time,
                                                        puan: element.item.puan
                                                    },
                                                    ...recipes.slice(element.index + 1)
                                                ])
                                            }}>
                                            {
                                                element.item.like == false ?
                                                    <HeartClose /> :
                                                    <HeartOpen />
                                            }
                                        </TouchableOpacity>
                                        <Image
                                            style={{ width: 96, height: 96 }}
                                            source={getImageResources(element.item.image)}
                                        />
                                    </View>
                                    <Text style={{ color: 'aqua' }}>
                                        {element.item.category}
                                    </Text>
                                    <Text style={{ color: 'white' }}>
                                        {element.item.name}
                                    </Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Clock />
                                        <Text style={{ margin: 5, color: 'white' }}>
                                            {element.item.time}
                                        </Text>
                                    </View>
                                    <Text style={{ color: 'white' }}>
                                        {element.item.puan}
                                    </Text>
                                </View>
                            )
                        }}
                        horizontal
                    />
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
                    <FlatList
                        data={recipes}
                        renderItem={element => {
                            return (
                                <View style={Styles.recipes2}>
                                    <View style={{ margin: 8 }}>
                                        <Text style={{ color: 'white' }}>
                                            {element.item.name}
                                        </Text>
                                        <Text style={{ color: 'white' }}>
                                            {element.item.puan}
                                        </Text>
                                    </View>
                                    <View style={{ alignItems: 'flex-end', padding: 8, justifyContent: 'space-between', height: '100%' }}>
                                        <TouchableOpacity
                                            onPress={() => {
                                                setRecipes([
                                                    ...recipes.slice(0, element.index),
                                                    {
                                                        like: !element.item.like,
                                                        image: element.item.image,
                                                        category: element.item.category,
                                                        name: element.item.name,
                                                        time: element.item.time,
                                                        puan: element.item.puan
                                                    },
                                                    ...recipes.slice(element.index + 1)
                                                ])
                                            }}>
                                            {
                                                element.item.like == false ?
                                                    <HeartClose /> :
                                                    <HeartOpen />
                                            }
                                        </TouchableOpacity>
                                        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                            <Clock />
                                            <Text style={{ color: 'white', marginLeft: 8 }}>
                                                {element.item.time}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            )
                        }}
                    />
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
        justifyContent: 'center',
    },

    freshrecipe: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    recipes: {
        height: 216,
        width: 168,
        backgroundColor: 'grey',
        borderRadius: 20,
        marginRight: 8,
        padding: 8
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