import { StyleSheet, Text, View, Button } from "react-native";
import { useState } from "react";

const Device = (props) => {
  const [color, setColor] = useState("red");

  return (
    <View style={styles.container}>
      <View style={{ width: 20, height: 20, backgroundColor: color }} />

      <Text>{props.item.title}</Text>
      <View style={{ backgroundColor: "white" }}>
        <Button title="On" onPress={() => {
            if (color != "green") {
                setColor("green")
                props.minfunction((count) => count + 1);
            }
        }} />
        <Button title="Off" onPress={() => {
            if (color !="red") {
                setColor("red")
                props.minfunction((count) => count - 1);
            }
        }} />

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#ffeb7a",
    padding: 10,
    margin: 10,
  },

  rectangular: {
    width: 350,
    height: 90,
    backgroundColor: "yellow",
    justifyContent: "center",
    margin: 10,
  },
});

export default Device;
