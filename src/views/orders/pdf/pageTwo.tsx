import { Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import PDFHeader from "./header";
import TermList from "./termList";
import {
  LANDLORD_TENANT_TERMS,
  PROVIDE_ALWAYS,
  TENANT_LANDLORD_TERMS,
} from "@/constants/tenancyAgreement";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
dayjs.extend(advancedFormat);

const styles = StyleSheet.create({
  page: {
    width: "100%",
    marginVertical: 20,
    paddingVertical: 40,
    fontFamily: "Plus Jakarta Sans",
    fontWeight: "light",
    fontSize: 10,
  },
  section: {
    // flexGrow: 1,
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    width: "90%",
    margin: "20 auto",
  },
  listItem: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 5,
    width: "90%",
    margin: "5 auto",
  },
  listItemText: {
    fontSize: 10,
    lineHeight: 2,
    fontWeight: "light",
  },
  listItemNum: {
    fontSize: 10,
    fontWeight: "light",
  },
  underlined: {
    marginTop: 20,
    borderBottom: "1px solid black",
    flexGrow: 1,
    textAlign: "center",
    width: "10%",
    fontWeight: "bold",
  },
  underline: {
    textDecoration: "underline",
    fontWeight: "bold",
    textTransform: "uppercase",
    minWidth: "30px",
  },
});

export default function PageTwo() {
  return (
    <Page size="A4" wrap={true} style={styles.page}>
      <PDFHeader text="THE TENANTS HEREBY AGREES WITH THE LANDLORD AS FOLLOWS:" />

      <TermList data={TENANT_LANDLORD_TERMS} />

      <PDFHeader text=" THE LANDLORD HEREBY AGREES WITH THE TENANT AS FOLLOWS:" />

      <TermList data={LANDLORD_TENANT_TERMS} />

      <View style={styles.container}>
        <Text style={{ fontWeight: "bold" }}>
          PROVIDE ALWAYS{" "}
          <Text style={styles.listItemText}>
            and it is hereby declared and agreed as follows:
          </Text>
        </Text>
      </View>

      <TermList data={PROVIDE_ALWAYS} />
    </Page>
  );
}
