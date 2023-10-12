import { Text } from "@react-pdf/renderer";

export default function UnderlinedText({ text }: { text: string }) {
  return (
    <Text
      style={{
        fontWeight: "bold",
        textDecoration: "underline",
        marginHorizontal: 10,
        textTransform: "uppercase",
      }}
    >
      {text}
    </Text>
  );
}
