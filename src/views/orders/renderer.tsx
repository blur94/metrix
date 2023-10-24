import { BlobProvider } from "@react-pdf/renderer";
import axios from "axios";

import Viewer from "./agreementPdfViewer";
import { CORE } from "@/constants/url";
import RenderPdf from "./renderPDF";
import EmbedPDF from "./embedPDF";

export default function Renderer() {
  const handleUpload = async (blob: Blob) => {
    try {
      const formData = new FormData();
      formData.append("file", blob, `AGR-${Math.floor(Date.now() / 1000)}.pdf`);
      const { data: res } = await axios.post(`${CORE}/upload`, formData);

      console.log(res.data);
    } catch (error) {
      return;
    }
  };

  return (
    <div>
      <BlobProvider document={<Viewer />}>
        {({ blob, url, loading, error }) => (
          <div>
            {loading && "Loading document..."}
            {error && "Error loading document :("}
            {blob && url && (
              <div
                style={{
                  width: "100%",
                  margin: "0 auto",
                }}
              >
                {/* <RenderPdf pdfUrl={url} /> */}
                <EmbedPDF pdfUrl={url} />

                {/* <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  download={`AGR-${Math.floor(Date.now() / 1000)}.pdf`}
                >
                  Download PDF
                </a>
                <button onClick={() => handleUpload(blob)}>Upload PDF</button> */}
              </div>
            )}
          </div>
        )}
      </BlobProvider>
    </div>
  );
}
