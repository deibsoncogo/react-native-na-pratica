import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Recipe } from "../../components/recipe";
import { Ingredients } from "../../components/ingredients";

export default function Recipes() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons
          name="arrow-back"
          size={32}
          onPress={() => router.back()}
        />
      </View>

      <Text style={styles.title}>Ingredientes</Text>

      <Ingredients ingredients={[]} />

      <FlatList
        data={["1"]}
        keyExtractor={(item) => item}
        renderItem={() => (
          <Recipe
            recipe={{
              name: "Omelete",
              image:
                "https://th.bing.com/th/id/OIP.pSGsMWhprQFtvbQJCouU0wHaE8?rs=1&pid=ImgDetMain",
              minutes: 10,
            }}
          />
        )}
      />
    </View>
  );
}
