import { BlobProvider } from "@react-pdf/renderer";
import axios from "axios";

import Viewer from "../orders/agreementPdfViewer";
import { CORE } from "@/constants/url";
import PdfViewer from "./pdfViewer";

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
                <PdfViewer pdfUrl={url} />
              </div>
            )}
          </div>
        )}
      </BlobProvider>
    </div>
  );
}
