import {
  Worker,
  Viewer,
  SpecialZoomLevel,
  ProgressBar,
} from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
interface Prop {
  pdfUrl: string;
}
export default function PdfViewer({ pdfUrl }: Prop) {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <div
        style={{
          border: "1px solid rgba(0, 0, 0, 0.3)",
          height: "750px",
        }}
      >
        <Viewer
          fileUrl={pdfUrl}
          plugins={[defaultLayoutPluginInstance]}
          //   defaultScale={SpecialZoomLevel.ActualSize}
          //   initialPage={1}
          renderLoader={(percentages: number) => (
            <div style={{ width: "240px" }}>
              <ProgressBar progress={Math.round(percentages)} />
            </div>
          )}
        />
      </div>
    </Worker>
  );
}
