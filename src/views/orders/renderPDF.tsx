import { useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import type { PDFDocumentProxy } from "pdfjs-dist";
import { Flex, ThemeIcon } from "@mantine/core";
import { IconMinus, IconPlus } from "@tabler/icons-react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/standard_fonts/",
};

type PDFFile = string | File | null;

export default function RenderPdf({ pdfUrl }: { pdfUrl: string }) {
  const [file, setFile] = useState<PDFFile>(pdfUrl);
  const [numPages, setNumPages] = useState<number>();
  const [scale, setScale] = useState(1);

  const increaseScale = () => setScale((scale) => scale + 0.1);
  const decreaseScale = () => setScale((scale) => scale - 0.1);

  function onFileChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const { files } = event.target;

    if (files && files[0]) {
      setFile(files[0] || null);
    }
  }

  function onDocumentLoadSuccess({
    numPages: nextNumPages,
  }: PDFDocumentProxy): void {
    setNumPages(nextNumPages);
  }

  return (
    <div style={{ width: "100%", margin: "1em 0" }}>
      <Flex gap={10} pos="fixed" top={85}>
        <ThemeIcon radius="md" onClick={increaseScale}>
          <IconPlus />
        </ThemeIcon>
        <ThemeIcon radius="md" onClick={decreaseScale}>
          <IconMinus />
        </ThemeIcon>
      </Flex>
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        options={options}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            scale={scale}
          />
        ))}
      </Document>
    </div>
  );
}
