import html2pdf from 'html2pdf.js'

export const exportResumePdf = async (element: HTMLElement | null, filename: string) => {
  if (!element) {
    return
  }

  await html2pdf()
    .set({
      margin: [10, 10, 10, 10],
      filename,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
    })
    .from(element)
    .save()
}
