
import ProductCardSkeleton from './ProductCardSkeleton'

export default function ProductGridSkeleton() {
  return (
    <div
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      aria-label="Loading products"
      role="status"
    >
      {Array.from({ length: 12 }, (_, index) => (
        <ProductCardSkeleton key={index} />
      ))}

      <span className="sr-only">Loading products...</span>
    </div>
  )
}
