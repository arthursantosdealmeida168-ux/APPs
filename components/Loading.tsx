import useTheme from '@/hooks/useTheme'
import { LinearGradient } from 'expo-linear-gradient'
import { createHomeStyles } from '@/styles/home.styles'
import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

const Loading = () => {
    const { colors } = useTheme();

    const homeStyles = createHomeStyles(colors)

  return (
    <LinearGradient colors={colors.gradients.background} style={homeStyles.container}>
    <View style={homeStyles.loadingContainer}>
        <ActivityIndicator size='large' color={colors.primary} />
        <Text style={homeStyles.loadingText}>CARREGANDO...</Text>
     </View>

    </LinearGradient>
 
   ) 
}

export default Loading