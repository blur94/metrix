import { View, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 5,
    width: "90%",
    margin: "5 auto",
    fontSize: 10,
  },
  listItemText: {
    lineHeight: 2,
  },
});

interface ListItem {
  id: string;
  term: string;
}

export default function TermList({ data }: { data: ListItem[] }) {
  return (
    <>
      {data.map((item: ListItem, index) => {
        return (
          <View style={styles.listItem} key={index}>
            <Text>({item.id}).</Text>
            <Text style={styles.listItemText}>{item.term}</Text>
          </View>
        );
      })}
    </>
  );
}
