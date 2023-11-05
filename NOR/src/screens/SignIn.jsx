import React, { useState } from 'react';
import { View, Text, Button,TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import { styles } from './Styles'


const SignIn = ( { navigation }) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        // Implement user registration logic here, e.g., with Firebase or your server.
        // You can use the email and password state values to create a new user account.

        // After successful registration, you can navigate to another screen.
        navigation.navigate('Home');
    };
    const submit = () => {
        console.log('logged In');
    };
    return (
        <View style={styles.container}>
            <Text>Sign IN</Text>
            <Input
                placeholder="User Name"
                style={styles.input}
                onChangeText={(text) => setName(text)}
                value={name}
            />
            <Input
                placeholder="Password"
                style={styles.input}
                onChangeText={(text) => setPassword(text)}
                value={password}
            />
            <Button style={styles.button} title="Sign In" onPress={handleSignIn} />
            <View style={styles.forgotPassword}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Forgetpassword')}
                ><Text>Forgot your password?</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.link}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SignIn;