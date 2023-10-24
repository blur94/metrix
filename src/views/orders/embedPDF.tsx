import { Box, Center } from "@mantine/core";
import React from "react";
import { randomId } from "@mantine/hooks"; 
import ReactViewAdobe from "react-adobe-embed";
import { adobe_api_key } from "@/constants/url";

interface Prop {
  pdfUrl: string;
}

export default function EmbedPDF({ pdfUrl }: Prop) {
  return (
    <Center w="70vw" h="calc(100vh - 100px)">
      <ReactViewAdobe
        url={pdfUrl}
        // clientId="324caa2a91b84f688935436cd2d25217"
        clientId={`${adobe_api_key}`}
        useReactHookWhenCallingAdobeAPI="useEffect"
        useReactHookWhenLoadingAdobeAPI="useMemo"
        useReactHookForAdobeAPIConfigs="useMemo"
        // id={`${randomId()}`}
        id="adobe-dc-view"
        // className="row"
        previewConfig={{
          embedMode: "FULL_WINDOW",
          showAnnotationTools: true,
          showDownloadPDF: true,
          showLeftHandPanel: true,
        }}
        fileMeta={{
          fileName: "Recurrent Files",
          id: "adobe-dc-view-annotation",
        }}
      />
    </Center>
  );
}
