import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section Skeleton */}
      <section className="text-center mb-16">
        <Skeleton className="h-12 w-3/4 mx-auto mb-6" />
        <Skeleton className="h-6 w-2/3 mx-auto mb-8" />
        <Skeleton className="h-64 w-full mx-auto" />
      </section>

      {/* Features Overview Skeleton */}
      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-lg">
              <Skeleton className="h-14 w-14 rounded-full mb-4" />
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full mb-1" />
              <Skeleton className="h-4 w-full mb-1" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section Skeleton */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <Skeleton className="h-8 w-1/2 mx-auto mb-4" />
          <Skeleton className="h-6 w-2/3 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="border-2 border-gray-200 rounded-lg p-6">
              <div className="text-center mb-6">
                <Skeleton className="h-7 w-1/2 mx-auto mb-2" />
                <Skeleton className="h-5 w-2/3 mx-auto mb-4" />
                <Skeleton className="h-10 w-1/3 mx-auto" />
              </div>

              <div className="space-y-3 mb-6">
                {[...Array(5)].map((_, j) => (
                  <div key={j} className="flex items-center">
                    <Skeleton className="h-5 w-5 mr-2" />
                    <Skeleton className="h-5 w-full" />
                  </div>
                ))}
              </div>

              <Skeleton className="h-10 w-full" />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
