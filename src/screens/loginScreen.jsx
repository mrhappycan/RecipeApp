import React, { useState } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Button,
    FlatList,
    TextInput
} from 'react-native'
import { MMKVLoader, useMMKVStorage } from "react-native-mmkv-storage"
import Fullnameicon from '../assets/fullname'
import Passwordicon from '../assets/password'
import Eye from '../assets/eye'
import EyeOff from '../assets/eyeoff'

const MMKV = new MMKVLoader().initialize()

const LoginScreen = props => {
    const [users, setUsers] = useMMKVStorage('users', MMKV, [])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(true)

    const Login = () => {
        console.log(users)
        users.forEach(element => {
            if (username === element.username && password === element.password) {
                props.navigation.navigate('Home', username)
            }else{
                console.log('yanlış şifre ya da kullanıcı ismi')
            }
        })
    }

    return (
        <View style={Styles.container}>
            <View>
                <Text style={Styles.logo}>
                    MİDA YEMEK
                </Text>
                <Text style={Styles.littleLogo}>
                    cook in easy way
                </Text>
            </View>

            <View style={Styles.logincontainer}>
                <Text style={Styles.login}>
                    Login
                </Text>
                <View style={Styles.txtinput}>
                    <Fullnameicon/>
                    <TextInput
                        placeholder='username'
                        style={Styles.txtinputtxt}
                        onChangeText={setUsername}
                        value={username}
                    />
                </View>

                <View style={Styles.txtinput}>
                    <Passwordicon />
                    <TextInput
                        placeholder='password'
                        style={Styles.txtinputtxt}
                        onChangeText={setPassword}
                        value={password}
                    />
                    <TouchableOpacity
                        onPress={() => {
                            setPasswordVisible(!passwordVisible)
                        }}
                    >
                        {
                            passwordVisible == false ?
                                <EyeOff /> :
                                <Eye />
                        }
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity
                        style={Styles.forgotbtn}>
                        <Text style={Styles.forgottxt}>
                            Forgot password?
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <TouchableOpacity
                    style={Styles.btn}
                    onPress={Login}
                >
                    <Text style={Styles.btntxt}>
                        Login
                    </Text>
                </TouchableOpacity>
                <View style={Styles.Logincontainer}>
                    <Text style={Styles.logintxt}>
                        Not Registered Yet?{' '}
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate('Register')
                        }}
                    >
                        <Text style={Styles.registertxt}>
                            Register Now
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    logo: {
        textAlign: 'center',
        fontSize: 37,
        fontWeight: '700',
        color: 'black'
    },

    littleLogo: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
        color: 'black'
    },

    logincontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%'
    },

    login: {
        textAlign: 'center',
        fontSize: 33,
        fontWeight: '700',
        color: 'black'
    },

    txtinput: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    txtinputtxt: {
        fontWeight: '500',
        fontSize: 18,
        color: 'black',
        textAlign: 'left',
        flex: 1,
    },

    btn: {
        backgroundColor: 'orange',
        height: 60,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },

    btntxt: {
        color: 'black',
        fontSize: 25,
        fontWeight: '700'
    },

    Logincontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },

    logintxt: {
        color: 'black',
        fontSize: 17,
        fontWeight: '700'
    },

    registertxt: {
        color: 'orange',
        fontSize: 17,
        fontWeight: '700'
    },

    forgotbtn: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    forgottxt: {
        color: 'orange',
        fontSize: 15,
        fontWeight: '400',
    },
})

export default LoginScreen