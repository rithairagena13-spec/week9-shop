
export default function Loading({ message = 'Loading...' }) {
  return (
    <div
      className="flex min-h-40 items-center justify-center gap-3 text-[#263D35]"
      role="status"
      aria-live="polite"
    >
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-[#D8D0C0] border-t-[#263D35]" />
      <p className="text-sm font-medium">{message}</p>
    </div>
  )
}
