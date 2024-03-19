import { MaterialIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import Animated, { BounceOutDown, SlideInDown } from "react-native-reanimated";
import { theme } from "../../theme";
import { styles } from "./styles";
import { Button } from "../button";

type Props = {
  quantity: number;
  onClear: () => void;
  onSearch: () => void;
};

export function Selected({ quantity, onClear, onSearch }: Props) {
  const isPlural = quantity > 1 ? "s" : "";

  return (
    <Animated.View
      style={styles.container}
      entering={SlideInDown.duration(500)}
      exiting={BounceOutDown}
    >
      <View style={styles.header}>
        <Text style={styles.label}>
          {quantity} ingrediente{isPlural} selecionado
        </Text>

        <MaterialIcons
          name="close"
          size={24}
          onPress={onClear}
          color={theme.colors.gray_400}
        />
      </View>

      <Button title="Encontrar" onPress={onSearch} />
    </Animated.View>
  );
}
