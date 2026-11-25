
export default function ProductDetailsSkeleton() {
  return (
    <section className="grid animate-pulse grid-cols-1 gap-8 rounded-2xl border border-[#E7E0D3] bg-white p-6 md:grid-cols-2 md:p-10">
      <div className="flex min-h-80 items-center justify-center rounded-2xl bg-[#F5F1E8] p-8">
        <div className="h-64 w-full rounded-xl bg-[#E7E0D3]" />
      </div>

      <div className="flex flex-col justify-center space-y-6">
        <div className="h-4 w-1/3 rounded bg-[#E7E0D3]" />

        <div className="space-y-3">
          <div className="h-7 w-full rounded bg-[#E7E0D3]" />
          <div className="h-7 w-2/3 rounded bg-[#E7E0D3]" />
        </div>

        <div className="h-6 w-24 rounded bg-[#E7E0D3]" />

        <div className="space-y-2">
          <div className="h-4 w-full rounded bg-[#E7E0D3]" />
          <div className="h-4 w-full rounded bg-[#E7E0D3]" />
          <div className="h-4 w-3/4 rounded bg-[#E7E0D3]" />
        </div>

        <div className="h-12 w-40 rounded-xl bg-[#E7E0D3]" />
      </div>
    </section>
  )
}
