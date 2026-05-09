declare module 'html2pdf.js' {
  type Html2PdfChain = {
    set: (options: Record<string, unknown>) => Html2PdfChain
    from: (element: HTMLElement) => Html2PdfChain
    save: () => Promise<void>
  }

  export default function html2pdf(): Html2PdfChain
}
