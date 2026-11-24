
import { ShoppingBag } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#E7E0D3] bg-[#F5F1E8]/95 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#263D35] text-[#F5F1E8]">
            <ShoppingBag size={21} />
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight text-[#263D35]">
              Mini Shop
            </h1>
            <p className="text-xs tracking-wide text-[#7B8278]">
              SIMPLE. THOUGHTFUL. EVERYDAY.
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-[#52665B] sm:flex">
          <a href="#products" className="transition hover:text-[#263D35]">
            Products
          </a>
          <a href="#categories" className="transition hover:text-[#263D35]">
            Categories
          </a>
          <a href="#add-product" className="transition hover:text-[#263D35]">
            Add Product
          </a>
        </div>
      </div>
    </nav>
  )
}
