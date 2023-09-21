//drawer bakılacak

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
import { MMKVLoader, useMMKVStorage } from 'react-native-mmkv-storage'
import Fullnameicon from '../assets/fullname'
import Emailicon from '../assets/emailaddress'
import Passwordicon from '../assets/password'
import Eye from '../assets/eye'
import EyeOff from '../assets/eyeoff'

const MMKV = new MMKVLoader().initialize()

const RegisterScreen = props => {
    const [users, setUsers] = useMMKVStorage('users', MMKV, [])
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordconfirm, setPasswordConfirm] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(true)
    const [confirm, setConfirm] = useState(true)
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

            <View style={Styles.registercontainer}>
                <Text style={Styles.register}>
                    Register
                </Text>
                <View style={Styles.txtinput}>
                    <Fullnameicon />
                    <TextInput
                        placeholder='full name'
                        style={Styles.txtinputtxt}
                        onChangeText={setUsername}
                        value={username}
                    />
                </View>

                <View style={Styles.txtinput}>
                    <Emailicon />
                    <TextInput
                        placeholder='email address'
                        style={Styles.txtinputtxt}
                        onChangeText={setEmail}
                        value={email}
                    />
                </View>

                <View style={Styles.txtinput}>
                    <Passwordicon />
                    <TextInput
                        placeholder='password'
                        style={Styles.txtinputtxt}
                        secureTextEntry={passwordVisible}
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

                <View style={Styles.txtinput}>
                    <Passwordicon />
                    <TextInput
                        placeholder='confirm password'
                        style={Styles.txtinputtxt}
                        secureTextEntry={confirm}
                        onChangeText={setPasswordConfirm}
                        value={passwordconfirm}
                    />
                    <TouchableOpacity
                        onPress={() => {
                            setConfirm(!confirm)
                        }}
                    >
                        {
                            confirm == false ?
                                <EyeOff /> :
                                <Eye />
                        }
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <TouchableOpacity
                    style={Styles.btn}
                    onPress={() => {
                        if (username.length > 0 && password.length > 0 && email.length > 0 && passwordconfirm.length > 0 && passwordconfirm == password) {
                            setUsers([...users, {
                                username: username,
                                password: password,
                                email: email,
                                confirm: passwordconfirm
                            }])
                            props.navigation.navigate('Home', username)
                            console.log(users)
                            console.log('basariyla kaydolundu')
                        } else {
                            console.log(users)
                            console.log('kayit olunamadı')
                        }
                    }}
                >
                    <Text style={Styles.btntxt}>
                        Register
                    </Text>
                </TouchableOpacity>
                <View style={Styles.Logincontainer}>
                    <Text style={Styles.registertxt}>
                        Already Registered?{' '}
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate('Login')
                        }}
                    >
                        <Text style={Styles.logintxt}>
                            Login Now
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

    registercontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%'
    },

    register: {
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

    registertxt: {
        color: 'black',
        fontSize: 17,
        fontWeight: '700'
    },

    logintxt: {
        color: 'orange',
        fontSize: 17,
        fontWeight: '700'
    }
})

export default RegisterScreen