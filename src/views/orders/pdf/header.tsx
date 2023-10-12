import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "90%",
    margin: "20 auto",
    fontSize: 10,
    fontWeight: "bold",
  },
});

export default function PDFHeader({ text }: { text: string }) {
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  );
}
