
import { AlertCircle } from 'lucide-react'

export default function ErrorMessage({ message = 'Something went wrong.' }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
      <AlertCircle size={20} />
      <p className="text-sm">{message}</p>
    </div>
  )
}
