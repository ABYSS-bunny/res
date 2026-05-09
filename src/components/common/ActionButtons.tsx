type ActionButtonsProps = {
  onLoadSample: () => void
  onReset: () => void
  onExport: () => void
}

export const ActionButtons = ({ onLoadSample, onReset, onExport }: ActionButtonsProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        onClick={onLoadSample}
        className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
      >
        Load sample
      </button>
      <button
        type="button"
        onClick={onReset}
        className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
      >
        Reset
      </button>
      <button
        type="button"
        onClick={onExport}
        className="rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-800"
      >
        Download PDF
      </button>
    </div>
  )
}
