import React, { useState } from 'react';
import { View, Text, Button,TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import { styles } from './Styles'


const SignUp = ({ navigation }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [createPassword, setCreatePassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignup = () => {
        // Implement user registration logic here, e.g., with Firebase or your server.
        // You can use the email and password state values to create a new user account.

        // After successful registration, you can navigate to another screen.
        navigation.navigate('Home');
    };
    return (
        <View style={styles.container}>
            <Text>Sign Up</Text>
            <Input
                placeholder="Name"
                style={styles.input}
                onChangeText={(text) => setName(text)}
                value={name}
            />
            <Input
                placeholder="Email"
                style={styles.input}
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <Input
                placeholder="Phone Number"
                style={styles.input}
                onChangeText={(text) => setPhoneNumber(text)}
                value={phoneNumber}
            />
            <Input
                placeholder="Create Password"
                style={styles.input}
                secureTextEntry
                onChangeText={(text) => setCreatePassword(text)}
                value={createPassword}
            />
            <Input
                placeholder="Confirm Password"
                style={styles.input}
                onChangeText={(text) => setConfirmPassword(text)}
                value={confirmPassword}
            />
            <Button style={styles.button} title="Sign Up" onPress={handleSignup} />
            <View style={styles.row}>
                <Text style={styles.label}>Already Registered? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                    <Text style={styles.link}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


export default SignUp;