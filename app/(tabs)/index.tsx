import { createHomeStyles } from "@/styles/home.styles";
import Header from "@/components/Header";
import useTheme from "@/hooks/useTheme";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AdicionarTodo from "@/components/AdicionarTodo";


export default function Index() {
  const { toggleDarkMode, colors } = useTheme();
  const homeStyles = createHomeStyles(colors)

  return (
    <LinearGradient colors={colors.gradients.background} style={homeStyles.container}>
    <SafeAreaView style={homeStyles.safeArea}>
        <Header />
        <AdicionarTodo />
        <TouchableOpacity onPress={toggleDarkMode}>MUDA TEMA</TouchableOpacity>
    </SafeAreaView>
  </LinearGradient> 
  ) 
}