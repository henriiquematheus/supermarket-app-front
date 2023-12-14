import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import io, { Socket } from 'socket.io-client';
import Icon from 'react-native-vector-icons/AntDesign';

interface Message {
    sender: string;
    text: string;
}

const Chat = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [socket, setSocket] = useState<Socket | null>(null);

    useEffect(() => {
        const newSocket = io('http://localhost:8000'); // Use the server address of Socket.io
        setSocket(newSocket);
    
        newSocket.emit('login', 'username'); // Replace 'username' with the actual username
    
        newSocket.on('message', (message: Message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });
    
        return () => {
            newSocket.emit('disconnect');
            newSocket.close();
        };
    }, []);
    

    const renderItem = ({ item }: { item: Message }) => (
        <View style={styles.messageContainer}>
            <Text style={styles.senderText}>{item.sender}</Text>
            <Text style={styles.messageText}>{item.text}</Text>
        </View>
    );

    const sendMessage = (message: string) => {
        if (socket) {
            socket.emit('sendMessage', { sender: 'username', text: message }); // Replace 'username' with the actual username
        }
    };

    return (
        <View style={styles.container}>
            <Icon
                name="arrowleft"
                size={30}
                color="#000"
                style={styles.backButton}
                onPress={() => navigation.goBack()}
            />
            <FlatList
                data={messages}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={input}
                    onChangeText={setInput}
                    placeholder="Type a message..."
                />
            
                <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
    <Text style={styles.sendButtonText}>Send</Text>
</TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    messageContainer: {
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 10,
        borderRadius: 8,
        backgroundColor: '#ffffff',
    },
    senderText: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    messageText: {
        fontSize: 16,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        padding: 5,
        backgroundColor: '#ffffff',
        borderRadius: 25,
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
    },
    backButton: {
        position: 'absolute',
        top: 10,
        left: 10,
    },
    sendButton: {
        backgroundColor: '#007BFF', // Change this to the color of your button
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sendButtonText: {
        color: '#FFFFFF', // Change this to the color of your button text
        fontSize: 16,
    },
});

export default Chat;
