import { search } from "@/lib/search";
import { usePreviewFile } from "@/lib/search/use-preview-file";
import { useElementHeight, useElementWidth } from "@/lib/ui/use-element-size";
import type { PDFDocumentProxy } from "pdfjs-dist";
import { useCallback, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import PreviewBottomButton from "./PreviewBottomButton";

import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

function highlightPattern(text: string, pattern: string) {
  return text.replace(pattern, (value: any) => `<mark>${value}</mark>`);
}

export declare type PdfPreviewProps = {
  source: search.MoodleSource;
  searchText: string;
};

export default function PdfPreview({ source, searchText }: PdfPreviewProps) {
  const [pdfDocument, setPdfDocument] = useState<PDFDocumentProxy | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const { data: file } = usePreviewFile(source.resource_preview_url);

  const divRef = useRef<HTMLDivElement>(null);
  const divWidth = useElementWidth(divRef);
  const divHeight = useElementHeight(divRef);

  const numPages = pdfDocument?.numPages ?? 0;

  function onDocumentLoadSuccess(pdf: PDFDocumentProxy) {
    setPdfDocument(pdf);

    let pageIndex = source.preview_location?.page_index ?? 1;
    setCurrentPage(pageIndex);
  }

  function onDocumentLoadError(error: any) {
    if (error.name === "MissingPDFException") {
      setError("PDF file is missing");
    } else if (error.name === "InvalidPDFException") {
      setError("Not a valid PDF file");
    } else {
      setError("Error while loading PDF file");
    }
  }

  const textRenderer = useCallback(
    (textItem: { str: any }) => highlightPattern(textItem.str, searchText),
    [searchText],
  );

  const goToPrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage < numPages ? prevPage + 1 : prevPage,
    );
  };

  return (
    <>
      <Document
        inputRef={divRef}
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
        noData={<div className="skeleton flex h-[400px]" />}
        loading={<div className="skeleton flex h-[400px]" />}
        error={
          <div className="skeleton flex h-[400px] items-center justify-center text-lg font-semibold text-red-500">
            {error}
          </div>
        }
      >
        <div className="flex items-center justify-center">
          <div className="custom-preview-scrollbar overflow-hidden rounded-2xl shadow-lg">
            <Page
              noData={
                <div className="skeleton flex" style={{ height: divHeight }} />
              }
              loading={
                <div className="skeleton flex" style={{ height: divHeight }} />
              }
              error={<div className="skeleton flex h-[400px]" />}
              width={divWidth}
              pageNumber={currentPage}
              customTextRenderer={textRenderer}
              renderTextLayer={true}
              renderAnnotationLayer={false}
              renderForms={false}
            />
          </div>
        </div>
      </Document>
      <div className="mb-4 mt-2 flex flex-wrap justify-center gap-4 gap-y-4 md:flex-row">
        <div className="flex flex-row items-stretch gap-4">
          <PreviewBottomButton
            icon={<span className="icon-[material-symbols--download]"></span>}
            text="Download"
            href={source.resource_download_url}
            target="_blank"
            download
          />

          <div className="flex flex-row items-center rounded-lg bg-base-100 dark:bg-primary-hover">
            <button
              className="px-4"
              onClick={goToPrevPage}
              disabled={currentPage <= 1}
            >
              &lt;
            </button>
            <div className="max-w-4"></div>
            <span className="text-sm md:text-xs">{`${currentPage}/${numPages}`}</span>
            <div className="max-w-4"></div>
            <button
              className="px-4"
              onClick={goToNextPage}
              disabled={currentPage >= numPages}
            >
              &gt;
            </button>
          </div>
        </div>
        <div className="flex flex-row items-stretch gap-4">
          <PreviewBottomButton
            icon={<span className="icon-[material-symbols--open-in-new]" />}
            text="To source"
            href={source.link}
            target="_blank"
          />
          <PreviewBottomButton
            icon={<span className="icon-[material-symbols--open-in-new]" />}
            text="New tab"
            href={source.resource_download_url}
            target="_blank"
          />
        </div>
      </div>
    </>
  );
}
