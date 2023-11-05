import React, { useState } from 'react';
import { View, Text, Button,TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import { styles } from './Styles'

const Forgetpassword = ({ navigation}) => {
    const [ userName, setUserName ] = useState('');

    const submit = () => {
        console.log('otp generated');
        navigation.navigate('VerifyOTP');
    };

    return(
        <View style={styles.container}>
        <Input
                placeholder="User Name"
                style={styles.input}
                secureTextEntry
                onChangeText={(text) => setUserName(text)}
                value={userName}
        />
        <Button mode="contained" title='Get OTP'  onPress={submit}>
          Send OTP
        </Button>
        <View style={styles.row}>
                <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                    <Text style={styles.link}>Back To Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Forgetpassword;