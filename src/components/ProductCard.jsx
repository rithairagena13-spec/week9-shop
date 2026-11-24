
import { Star, Trash2 } from 'lucide-react'

export default function ProductCard({ product, onDelete }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-[#E7E0D3] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative flex h-56 items-center justify-center bg-[#F5F1E8] p-6">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
        />

        <button
          onClick={() => onDelete(product.id)}
          aria-label={`Delete ${product.title}`}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#9B554B] shadow-sm transition hover:bg-red-50"
        >
          <Trash2 size={17} />
        </button>
      </div>

      <div className="space-y-3 p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#A98250]">
          {product.category}
        </p>

        <h3 className="line-clamp-2 min-h-12 font-semibold text-[#263D35]">
          {product.title}
        </h3>

        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-[#263D35]">
            ${product.price?.toFixed(2)}
          </p>

          <div className="flex items-center gap-1 text-sm text-[#A98250]">
            <Star size={15} fill="currentColor" />
            <span>{product.rating ?? 'New'}</span>
          </div>
        </div>
      </div>
    </article>
  )
}
