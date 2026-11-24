
import { useState } from 'react'
import { Plus } from 'lucide-react'

export default function AddProductForm({ onAdd, loading = false }) {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    category: '',
    description: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (
      !formData.title.trim() ||
      !formData.category.trim() ||
      !formData.description.trim() ||
      Number(formData.price) <= 0
    ) {
      return
    }

    onAdd({
      ...formData,
      title: formData.title.trim(),
      category: formData.category.trim(),
      description: formData.description.trim(),
      price: Number(formData.price),
    })

    setFormData({
      title: '',
      price: '',
      category: '',
      description: '',
    })
  }

  return (
    <section
      id="add-product"
      className="rounded-2xl border border-[#E7E0D3] bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A98250]">
          Expand the collection
        </p>
        <h2 className="mt-1 text-xl font-bold text-[#263D35]">
          Add a new product
        </h2>
        <p className="mt-2 text-sm text-[#7B8278]">
          Enter the details below to add a product to the shop.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="title" className="text-sm font-medium text-[#263D35]">
            Product name
          </label>
          <input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter product name"
            required
            className="w-full rounded-xl border border-[#DDD5C7] bg-[#FAF8F3] px-4 py-3 text-sm outline-none transition focus:border-[#668477] focus:ring-2 focus:ring-[#668477]/20"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="price" className="text-sm font-medium text-[#263D35]">
            Price ($)
          </label>
          <input
            id="price"
            name="price"
            type="number"
            min="0.01"
            step="0.01"
            value={formData.price}
            onChange={handleChange}
            placeholder="0.00"
            required
            className="w-full rounded-xl border border-[#DDD5C7] bg-[#FAF8F3] px-4 py-3 text-sm outline-none transition focus:border-[#668477] focus:ring-2 focus:ring-[#668477]/20"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="category"
            className="text-sm font-medium text-[#263D35]"
          >
            Category
          </label>
          <input
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="e.g. beauty"
            required
            className="w-full rounded-xl border border-[#DDD5C7] bg-[#FAF8F3] px-4 py-3 text-sm outline-none transition focus:border-[#668477] focus:ring-2 focus:ring-[#668477]/20"
          />
        </div>

        <div className="space-y-2 sm:col-span-2">
          <label
            htmlFor="description"
            className="text-sm font-medium text-[#263D35]"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe the product..."
            rows="3"
            required
            className="w-full resize-y rounded-xl border border-[#DDD5C7] bg-[#FAF8F3] px-4 py-3 text-sm outline-none transition focus:border-[#668477] focus:ring-2 focus:ring-[#668477]/20"
          />
        </div>

        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-2 rounded-xl bg-[#263D35] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#38564A] disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Plus size={18} />
            {loading ? 'Adding product...' : 'Add product'}
          </button>
        </div>
      </form>
    </section>
  )
}
