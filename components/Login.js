import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    View,
    TextInput,
    StyleSheet,
    Button,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

const Login = () => {
    const [secure, setSecure] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigator = useNavigation();

    const loginProcess = () => {
        if (email === "tuanvu@gmail.com" && password === "123456") {
            navigator.navigate('TaskList');
            setEmail('');
            setPassword('');
        } else {
            console.log('Password or Email Incorrect\n!');
        }
    }

    const loginSSOFacebook = () => {

    }

    const loginSSOGmail = () => {

    }

    const loginSSOOffice365 = () => {

    }

    const loginSSOGithub = () => {

    }

    return (
        <View style={styles.container}>

            <View style={styles.wrapper}>
                <Text style={styles.title}>Task Manager Expo</Text>

                <TextInput
                    style={styles.input}
                    value={email}
                    placeholder="Enter your email"
                    onChangeText={(text) => setEmail(text)}
                />

                <TextInput
                    style={styles.input}
                    secureTextEntry={true} //type == password
                    value={password}
                    placeholder="Enter your password"
                    onChangeText={(text) => setPassword(text)}
                />

                {/* <Button
                    style={styles.button}
                    onPress={loginProcess}
                    title="Login" // this field must be present
                >
                    Login
                </Button> */}

                <TouchableOpacity onPress={loginProcess}>
                    <View style={styles.button}>
                        <Text style={styles.textBtn}>Login</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={loginProcess}>
                    <Text style={styles.forgotPwd}>Forgot Password ?</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.loginUsing}>Or Login Using</Text>

            <View style={styles.wrapperSSO}>
                <TouchableOpacity onPress={loginSSOFacebook}>
                    <Image style={styles.SSOItem} source={{ uri: "https://img.icons8.com/fluency/48/000000/facebook-new.png" }} />
                    <Text style={styles.SSOItemText}>Facebook</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={loginSSOGmail}>
                    <Image style={styles.SSOItem} source={{ uri: "https://img.icons8.com/color/48/000000/google-logo.png" }} />
                    <Text style={styles.SSOItemText}>Google</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={loginSSOOffice365}>
                    <Image style={styles.SSOItem} source={{ uri: "https://img.icons8.com/color/48/000000/office-365.png" }} />
                    <Text style={styles.SSOItemText}>Office365</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={loginSSOGithub}>
                    <Image style={styles.SSOItem} source={{ uri: "https://img.icons8.com/sf-regular-filled/48/000000/github.png" }} />
                    <Text style={styles.SSOItemText}>Github</Text>
                </TouchableOpacity>
            </View>
        </View>

    );

}


const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#EBEAED',
        paddingHorizontal: 15,
        paddingVertical: 15
    },

    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 50,
        backgroundColor: '#FFFFFF',
        marginTop: 10,
        alignItems: 'center',
        borderRadius: 15,
        borderWidth: 0.5,
    },

    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 20
    },

    input: {
        paddingHorizontal: 15, // placeholder + password + email will auto be pulled from the left
        backgroundColor: '#FFFFFF',
        width: '90%',
        height: 60,
        borderRadius: 15,
        marginBottom: 20,
        fontSize: 16,
        borderWidth: 0.5,
    },

    button: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1E90FF',
        width: 120,
        height: 50,
        borderRadius: 10,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        marginBottom: 10
    },

    textBtn: {
        color: '#FFFFFF',
        fontSize: 20,
    },

    forgotPwd: {
        color: '#1E90FF',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10
    },

    loginUsing: {
        padding: 8,
        marginVertical: 12,
        textAlign: 'center',
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
    },

    wrapperSSO: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        marginVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        borderWidth: 0.5,
    },

    SSOItem: {
        width: 50,
        height: 50,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 3
    },

    SSOItemText: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center'
    }
    //SSO = Single Sign On
});
export default Login;