
export default function CategoryList({
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  return (
    <section id="categories" className="space-y-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A98250]">
          Browse collection
        </p>
        <h2 className="mt-1 text-xl font-bold text-[#263D35]">
          Shop by category
        </h2>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => onSelectCategory('')}
          className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
            selectedCategory === ''
              ? 'bg-[#263D35] text-white'
              : 'border border-[#DDD5C7] bg-white text-[#52665B] hover:border-[#263D35]'
          }`}
        >
          All Products
        </button>

        {categories.map((category) => {
          const categoryName =
            typeof category === 'string' ? category : category.name

          const categorySlug =
            typeof category === 'string' ? category : category.slug

          return (
            <button
              key={categorySlug}
              onClick={() => onSelectCategory(categorySlug)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium capitalize transition ${
                selectedCategory === categorySlug
                  ? 'bg-[#263D35] text-white'
                  : 'border border-[#DDD5C7] bg-white text-[#52665B] hover:border-[#263D35]'
              }`}
            >
              {categoryName.replaceAll('-', ' ')}
            </button>
          )
        })}
      </div>
    </section>
  )
}
