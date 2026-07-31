export default function MovieCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/8 bg-surface">
      <div className="flex flex-col sm:flex-row">
        <div className="aspect-[2/3] w-full shrink-0 shimmer sm:w-32 sm:aspect-auto sm:h-48" />
        <div className="flex flex-1 flex-col gap-3 p-4">
          <div className="h-5 w-2/3 rounded shimmer" />
          <div className="h-4 w-1/3 rounded shimmer" />
          <div className="h-4 w-full rounded shimmer" />
          <div className="h-4 w-5/6 rounded shimmer" />
          <div className="mt-2 h-10 w-28 rounded-xl shimmer" />
        </div>
      </div>
    </div>
  )
}
