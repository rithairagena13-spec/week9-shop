
import { useState } from 'react'
import { createProduct, deleteProduct } from '../api/products'
import useProducts from '../hooks/useProducts'
import useCategories from '../hooks/useCategories'
import useUrlState from '../hooks/useUrlState'
import useDelayedFlag from '../hooks/useDelayedFlag'
import Navbar from '../components/Navbar'
import CategoryList from '../components/CategoryList'
import ProductList from '../components/ProductList'
import AddProductForm from '../components/AddProductForm'
import ErrorMessage from '../components/ErrorMessage'
import ProductGridSkeleton from '../components/ProductGridSkeleton'

const LIMIT = 12

export default function HomePage() {
  const { params, setParams } = useUrlState()

  const selectedCategory = params.get('category') || ''
  const page = Math.max(1, Number(params.get('page')) || 1)
  const skip = (page - 1) * LIMIT

  const {
    products,
    setProducts,
    total,
    loading: productsLoading,
    refreshing,
    error: productsError,
  } = useProducts({
    category: selectedCategory,
    limit: LIMIT,
    skip,
  })

  const {
    categories,
    loading: categoriesLoading,
    error: categoriesError,
  } = useCategories()

  const [adding, setAdding] = useState(false)
  const [mutationError, setMutationError] = useState(null)

  const showProductsSkeleton = useDelayedFlag(productsLoading)
  const showCategoriesSkeleton = useDelayedFlag(categoriesLoading)

  const totalPages = Math.max(1, Math.ceil(total / LIMIT))

  const handleCategorySelect = (category) => {
    setParams({
      category: category || null,
      page: null,
    })
  }

  const handlePageChange = (newPage) => {
    setParams({ page: newPage === 1 ? null : newPage })
  }

  const handleAddProduct = async (productData) => {
    setAdding(true)
    setMutationError(null)

    try {
      const newProduct = await createProduct(productData)
      setProducts((current) => [newProduct, ...current].slice(0, LIMIT))
    } catch (err) {
      setMutationError(err.message || 'Failed to add product')
    } finally {
      setAdding(false)
    }
  }

  const handleDeleteProduct = async (id) => {
    const previousProducts = products

    setMutationError(null)
    setProducts((current) => current.filter((product) => product.id !== id))

    try {
      await deleteProduct(id)
    } catch (err) {
      setProducts(previousProducts)
      setMutationError(err.message || 'Failed to delete product')
    }
  }

  return (
    <div className="min-h-screen bg-[#F5F1E8] text-[#263D35]">
      <Navbar />

      <main className="mx-auto max-w-7xl space-y-12 px-6 py-10 sm:py-14">
        <section className="relative overflow-hidden rounded-3xl bg-[#263D35] px-8 py-14 text-[#F5F1E8] sm:px-12 sm:py-20">
          <div className="relative z-10 max-w-2xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C6A678]">
              Welcome to Mini Shop
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Discover everyday essentials.
            </h1>

            <p className="max-w-lg text-sm leading-7 text-[#D5DDD5] sm:text-base">
              Explore a collection of products designed to make everyday life a
              little more enjoyable.
            </p>

            <a
              href="#products"
              className="inline-flex rounded-xl bg-[#C6A678] px-6 py-3 text-sm font-semibold text-[#263D35] transition hover:bg-[#D5B88F]"
            >
              Explore products
            </a>
          </div>

          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-10 -top-14 h-52 w-52 rounded-full border border-white/10" />
        </section>

        <CategoryList
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategorySelect}
        />

        <section id="products" className="space-y-6">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A98250]">
                Curated for everyday
              </p>

              <h2 className="mt-1 text-2xl font-bold">
                {selectedCategory
                  ? selectedCategory.replaceAll('-', ' ')
                  : 'All products'}
              </h2>
            </div>

            <p className="text-sm text-[#7B8278]">
              {total} products available
            </p>
          </div>

          {productsError && <ErrorMessage message={productsError} />}
          {categoriesError && <ErrorMessage message={categoriesError} />}
          {mutationError && <ErrorMessage message={mutationError} />}

          {productsLoading && !products.length && showProductsSkeleton ? (
            <ProductGridSkeleton />
          ) : (
            <>
              <div
                className={`transition-opacity duration-300 ${
                  refreshing ? 'opacity-50' : 'opacity-100'
                }`}
                aria-busy={refreshing}
              >
                <ProductList
                  products={products}
                  onDelete={handleDeleteProduct}
                />
              </div>

              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-4 pt-6">
                  <button
                    onClick={() => handlePageChange(page - 1)}
                    disabled={page <= 1}
                    className="rounded-xl border border-[#DDD5C7] px-5 py-2.5 text-sm font-medium transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Previous
                  </button>

                  <span className="text-sm font-medium">
                    Page {page} of {totalPages}
                  </span>

                  <button
                    onClick={() => handlePageChange(page + 1)}
                    disabled={page >= totalPages}
                    className="rounded-xl border border-[#DDD5C7] px-5 py-2.5 text-sm font-medium transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}

          {showCategoriesSkeleton && (
            <p className="sr-only">Loading categories...</p>
          )}
        </section>

        <AddProductForm onAdd={handleAddProduct} loading={adding} />
      </main>

      <footer className="border-t border-[#E7E0D3] px-6 py-8 text-center text-sm text-[#7B8278]">
        Mini Shop — Built with React and Axios
      </footer>
    </div>
  )
}
