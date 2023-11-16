import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            justifyContent: 'center',
            padding: 40,
        },
    
        label : {
            color: '#848484',
        },

        input: {
                width: "100%",
                height: 40,
                borderColor: "#848484",
                borderWidth: 1,
                marginTop: "3%",
                marginBottom: "5%",

        },

        createAccountForgot: {
            flexDirection: 'row',
            alignSelf: 'flex-end',
            marginBottom: "3%",
                
        },

        link: {
            color: '#2196F3',
            textDecorationLine: 'underline',
            marginLeft: "42%",
        },

        logo : {
            alignItems: 'center',
            marginBottom: "10%",

        },

        text: {
            fontSize: 34,
            color: '#848484',
        },
});

export default Styles;
