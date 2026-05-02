
const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="max-w-md w-full text-center">
        {/* Animated Icon or Illustration Placeholder */}
        <div className="relative mb-8">
          <h1 className="text-9xl font-black text-gray-200 select-none">
            404
          </h1>
          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-gray-800 w-full">
            Oops! Page Not Found
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-gray-600 text-lg">
            The link you followed might be broken, or the page may have been removed. 
          </p>
          
          <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/'}
              className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:scale-105 transition-all duration-200"
            >
              Back to Home
            </button>
            
            <button 
              onClick={() => window.history.back()}
              className="px-8 py-3 bg-white text-gray-700 font-medium rounded-xl border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
            >
              Go Back
            </button>
          </div>
        </div>

        {/* Optional Footer Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Think this is a mistake? <a href="/contact" className="text-indigo-600 hover:underline font-medium">Report an issue</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;