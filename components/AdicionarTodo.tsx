import { Alert, Image, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import useTheme from "@/hooks/useTheme";
import { createHomeStyles } from '@/styles/home.styles';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const AdicionarTodo = () => {
    const { colors } = useTheme();
    const homeStyles = createHomeStyles(colors);

    const [newTodo, setNewTodo] = useState("");
    const addTodo = useMutation(api.todo.addTodo);

    const handleAddTodo = async () => {
        if (newTodo.trim()){
            try {
                await addTodo({ text : newTodo.trim()})
            } catch (error) {
                console.log("Erro ao adicionar o todo ",error);
                Alert.alert("Error","Error ao adicionar");
            }
        }
    }

    return (
        <View style={homeStyles.inputSection}>
           <View style={homeStyles.inputWrapper}>
             <TextInput style={homeStyles.input} placeholder='Digite uma tarefa' placeholderTextColor={colors.textMuted} multiline value={newTodo} onChangeText={setNewTodo} />
             {/* onSubmitEditing={} */}
             <TouchableOpacity>
                <LinearGradient style={homeStyles.addButton} colors={colors.gradients.primary}>
                    <Ionicons name='add' size={24} color={"#fff"}></Ionicons>
                </LinearGradient>
             </TouchableOpacity>
          </View>
          <Image style={homeStyles.img} source={{uri:""}} />
        </View>
    )
}

export default AdicionarTodo