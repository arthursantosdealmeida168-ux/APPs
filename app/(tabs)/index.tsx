import { LinearGradient } from "expo-linear-gradient";
import { createHomeStyles } from "@/styles/home.styles";
import useTheme from "@/hooks/useTheme";
import AdicionarTodo from "@/components/AdicionarTodo";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import { api } from "@/convex/_generated/api";
import { Doc } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Todo = Doc<"todo">;

export default function Index() {
  const { colors } = useTheme();
  const homeStyles = createHomeStyles(colors);

  const todos = useQuery(api.todo.getTodos);
  // const toggleTodo = useMutation(api.todos.toggleTodo);

  const isLoading = todos === undefined;
  if (isLoading) return <Loading />;

  // const handleToggleTodo = async (id: Id<"todos">) => {
  // };

  const renderTodoItem = ({ item }: { item: Todo }) => {
    return (
      <View style={homeStyles.todoItemWrapper}>
        <LinearGradient
          colors={colors.gradients.surface}
          style={homeStyles.todoItem}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View>
            <Text
              style={[
                homeStyles.todoText,
                item.isCompleted && {
                  textDecorationLine: "line-through",
                  color: colors.textMuted,
                  opacity: 0.6,
                },
              ]}
            >
              {item.text}
            </Text>
          </View>
        </LinearGradient>
      </View>
    );
  };

 return (
    <LinearGradient colors={colors.gradients.background} style={homeStyles.container}>
      <SafeAreaView style={homeStyles.safeArea}>
        <Header />
        <AdicionarTodo />

        <FlatList data={todos} renderItem={renderTodoItem} keyExtractor={(item) => item._id} style={homeStyles.todoList} contentContainerStyle={homeStyles.todoListContent} />

        {/* {todos?.map((todo) => <Text key={todo._id}>{todo.text}</Text>)} */}
      </SafeAreaView>
    </LinearGradient>
  )
}
