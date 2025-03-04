export default function AuthSkeleton() {
    return (
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left Side */}
        <div className="flex-1 flex flex-col p-4 sm:p-6 md:p-8 lg:p-12 max-w-full md:max-w-md mx-auto w-full">
          {/* Logo */}
          <div className="mb-8 md:mb-12">
            <div className="h-8 md:h-10 w-20 md:w-24 bg-gray-200 rounded-lg animate-pulse"></div>
          </div>
  
          <div className="w-full space-y-6 md:space-y-8 mt-4 md:mt-0">
            {/* Welcome Text */}
            <div className="space-y-2">
              <div className="h-7 md:h-8 w-32 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-5 md:h-6 w-48 bg-gray-200 rounded animate-pulse"></div>
            </div>
  
            {/* Social Login Buttons */}
            <div className="space-y-3 md:space-y-4">
              <div className="h-11 md:h-12 w-full bg-gray-200 rounded-full animate-pulse"></div>
              <div className="h-11 md:h-12 w-full bg-gray-200 rounded-full animate-pulse"></div>
            </div>
  
            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-gray-200"></div>
              <div className="h-4 w-12 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-px flex-1 bg-gray-200"></div>
            </div>
  
            {/* Email Input */}
            <div className="space-y-2">
              <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-11 md:h-12 w-full bg-gray-200 rounded-lg animate-pulse"></div>
            </div>
  
            {/* Continue Button */}
            <div className="h-11 md:h-12 w-full bg-gray-200 rounded-full animate-pulse"></div>
  
            {/* Checkbox */}
            <div className="flex items-start gap-3">
              <div className="h-5 w-5 rounded bg-gray-200 animate-pulse mt-0.5 flex-shrink-0"></div>
              <div className="h-4 w-full md:w-3/4 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
  
        {/* Right Side - Visible on all screens */}
        <div className="flex-1 bg-purple-600 p-4 sm:p-6 md:p-8 lg:p-12">
          <div className="w-full max-w-2xl mx-auto flex flex-col justify-center h-full">
            {/* Heading */}
            <div className="space-y-2 md:space-y-3 mb-6 md:mb-12">
              <div className="h-6 sm:h-7 md:h-8 w-full md:w-3/4 bg-purple-500 rounded animate-pulse"></div>
              <div className="h-6 sm:h-7 md:h-8 w-2/3 md:w-1/2 bg-purple-500 rounded animate-pulse"></div>
            </div>
  
            {/* Image Placeholder */}
            <div className="aspect-[4/3] md:aspect-video w-full bg-purple-500 rounded-2xl animate-pulse mb-6 md:mb-8"></div>
  
            {/* Role Cards - Stack on mobile, side by side on larger screens */}
            <div className="grid gap-3 md:gap-4">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 md:p-4 bg-purple-500 rounded-lg animate-pulse"
                >
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-purple-400"></div>
                    <div className="h-4 w-20 md:w-24 bg-purple-400 rounded"></div>
                  </div>
                  <div className="h-7 md:h-8 w-16 md:w-20 bg-purple-400 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  