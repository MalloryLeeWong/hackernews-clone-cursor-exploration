export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-2">
      <div className="animate-pulse">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="py-1.5">
            <div className="h-5 bg-gray-200 rounded w-3/4 mb-1"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  )
} 