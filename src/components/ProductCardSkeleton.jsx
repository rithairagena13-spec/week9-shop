
export default function ProductCardSkeleton() {
  return (
    <article className="overflow-hidden rounded-2xl border border-[#E7E0D3] bg-white">
      <div className="flex h-56 items-center justify-center bg-[#F5F1E8] p-6">
        <div className="h-full w-full animate-pulse rounded-xl bg-[#E7E0D3]" />
      </div>

      <div className="space-y-3 p-5">
        <div className="h-3 w-1/3 animate-pulse rounded bg-[#E7E0D3]" />

        <div className="space-y-2">
          <div className="h-4 w-full animate-pulse rounded bg-[#E7E0D3]" />
          <div className="h-4 w-2/3 animate-pulse rounded bg-[#E7E0D3]" />
        </div>

        <div className="flex items-center justify-between">
          <div className="h-6 w-20 animate-pulse rounded bg-[#E7E0D3]" />
          <div className="h-4 w-12 animate-pulse rounded bg-[#E7E0D3]" />
        </div>
      </div>
    </article>
  )
}
