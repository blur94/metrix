import React from "react";
import { Document, Font } from "@react-pdf/renderer";
import PageTwo from "./pdf/pageTwo";

Font.register({
  family: "Plus Jakarta Sans",
  fonts: [
    {
      src: "/fonts/plus-jakarta-sans/static/PlusJakartaSans-Bold.ttf",
      fontStyle: "normal",
      fontWeight: 700,
    },
    {
      src: "/fonts/plus-jakarta-sans/static/PlusJakartaSans-BoldItalic.ttf",
      fontStyle: "italic",
      fontWeight: 700,
    },
    {
      src: "/fonts/plus-jakarta-sans/static/PlusJakartaSans-ExtraBold.ttf",
      fontStyle: "bold",
      fontWeight: 800,
    },
    {
      src: "/fonts/plus-jakarta-sans/static/PlusJakartaSans-ExtraBoldItalic.ttf",
      fontStyle: "italic",
      fontWeight: 800,
    },
    {
      src: "/fonts/plus-jakarta-sans/static/PlusJakartaSans-ExtraLight.ttf",
      fontStyle: "normal",
      fontWeight: 200,
    },
    {
      src: "/fonts/plus-jakarta-sans/static/PlusJakartaSans-Italic.ttf",
      fontStyle: "italic",
      fontWeight: 200,
    },
    {
      src: "/fonts/plus-jakarta-sans/static/PlusJakartaSans-Light.ttf",
      fontStyle: "normal",
      fontWeight: 200,
    },
    {
      src: "/fonts/plus-jakarta-sans/static/PlusJakartaSans-LightItalic.ttf",
      fontStyle: "italic",
      fontWeight: 200,
    },
    {
      src: "/fonts/plus-jakarta-sans/static/PlusJakartaSans-Medium.ttf",
      fontStyle: "bold",
      fontWeight: 500,
    },
    {
      src: "/fonts/plus-jakarta-sans/static/PlusJakartaSans-MediumItalic.ttf",
      fontStyle: "italic",
      fontWeight: 500,
    },
    {
      src: "/fonts/plus-jakarta-sans/static/PlusJakartaSans-Regular.ttf",
      fontStyle: "bold",
      fontWeight: 400,
    },
    {
      src: "/fonts/plus-jakarta-sans/static/PlusJakartaSans-SemiBold.ttf",
      fontStyle: "bold",
      fontWeight: 600,
    },
    {
      src: "/fonts/plus-jakarta-sans/static/PlusJakartaSans-SemiBold.ttf",
    },
    {
      src: "/fonts/plus-jakarta-sans/static/PlusJakartaSans-SemiBoldItalic.ttf",
    },
    {
      src: "/fonts/plus-jakarta-sans/static/PlusJakartaSans-Light.ttf",
    },
  ],
});

const Viewer = () => (
  <Document
    author="Gilead"
    creator="Gilead"
    keywords="agreement, tenancy agreement"
    pdfVersion="1.7ext3"
    title="Tenancy Agreement"
    producer="Recurrent"
    subject="Sign Agreement"
  >
    <PageTwo />
  </Document>
);

export default Viewer;
