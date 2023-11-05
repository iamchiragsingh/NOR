import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import { styles } from './Styles'

const VerifyOTP = ({ navigation }) => {
    const [OTP, setOTP] = useState('');

    const submit = () => {
        console.log('otp submitted');
    };
    return (
        <View style={styles.container}>
            <Input
                placeholder="Enter OTP"
                style={styles.input}
                secureTextEntry 
                onChangeText={(text) => setOTP(text)}
                value={OTP}
            />
            <Button mode="contained" title='Submit' onPress={submit}>
                Submit
            </Button>
            <View style={styles.row}>
                <TouchableOpacity style={{ marginRight: 30 }} onPress={() => navigation.navigate('Forgetpassword')}>
                    <Text style={styles.link}>Back</Text>
                    <TouchableOpacity style={{ marginRight: 30 }} onPress={() => navigation.navigate('Signin')}>
                        <Text style={styles.link}>Back To Login</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default VerifyOTP;