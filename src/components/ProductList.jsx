
import ProductCard from './ProductCard'

export default function ProductList({ products, onDelete }) {
  if (products.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-[#D8D0C0] bg-white/60 px-6 py-16 text-center">
        <h3 className="text-lg font-semibold text-[#263D35]">
          No products found
        </h3>
        <p className="mt-2 text-sm text-[#7B8278]">
          Try selecting another category or adding a new product.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}
