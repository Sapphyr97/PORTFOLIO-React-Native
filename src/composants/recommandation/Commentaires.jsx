
import { Text, StyleSheet, View,TouchableOpacity } from 'react-native'
import * as React from 'react'

import { useState, useEffect } from 'react';
import axios from 'axios'


export default function Commentaires() {

    const [comments, setComments] = useState([]);
    const [currentCommentIndex, setCurrentCommentIndex] = useState(0);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(res => {
                setComments(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const currentComments = comments[currentCommentIndex];

    const handleNextComment= () => {
        if (currentCommentIndex < comments.length - 1) {
            setCurrentCommentIndex(currentCommentIndex + 1);
        }
    }

    const handlePreviousComment = () => {
        if (currentCommentIndex> 0) {
            setCurrentCommentIndex(currentCommentIndex - 1);
        }
    }


    return (
        <View style={styles.fontText}>
            <Text style={styles.texto}>COMMENTAIRES</Text>
            <Text style={styles.texto}>{currentComments?.title}</Text>
            <Text style={styles.texto}>{currentComments?.body}</Text>

            <View style={styles.fontText2}>
                <TouchableOpacity  onPress={handlePreviousComment}style={styles.touchableOpacity} >
                <Text>Précédent</Text></TouchableOpacity>
                <TouchableOpacity  onPress={handleNextComment} style={styles.touchableOpacity}>
                <Text>Suivant</Text></TouchableOpacity>
            </View>
        </View>
    )

}


const styles = StyleSheet.create({
    fontText: {
        backgroundColor: '#FDF5E6',
        marginBottom:30,
        padding:20,
        borderRadius:8,
        marginTop:20
    },
    texto: {
        paddingBottom: 15,
        color: 'black',
        textAlign: 'center',
    },
    fontText2:{
        flexDirection:"row",
        justifyContent:'space-between'
    },
    touchableOpacity:{
        backgroundColor: '#FFDAB9',
        borderRadius:10,
        padding:10
    }
})