import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 py-12">
      <div className="w-full max-w-7xl bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
        {/* Header with gradient background */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-12">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-white rounded-full shadow-lg">
              <svg
                className="w-16 h-16 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-7xl font-black text-center text-white drop-shadow-lg">
            404
          </h1>
        </div>

        {/* Content */}
        <div className="px-8 py-10 text-center space-y-6">
          {/* Title */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              পৃষ্ঠাটি খুঁজে পাওয়া যায়নি
            </h2>
            <p className="text-sm text-gray-500">
              এই পৃষ্ঠাটি অস্তিত্ব নেই বা অ্যাক্সেস করা যায় না
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
            দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন তা স্থানান্তরিত হয়েছে অথবা এটি
            বর্তমানে উপলব্ধ নেই। অনুগ্রহ করে হোম পেজে ফিরে যান বা আমাদের
            সাথে যোগাযোগ করুন।
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 pt-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
              হোম পেজে ফিরুন
            </Link>

            <a
              href="tel:01772084789"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg font-semibold hover:shadow-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-200 transform hover:scale-105"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              সহায়তার জন্য কল করুন
            </a>
          </div>

          {/* Quick Links */}
          <div className="pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500 mb-3 uppercase tracking-widest font-semibold">
              দ্রুত লিঙ্ক
            </p>
            <div className="grid grid-cols-3 gap-2">
              <Link
                href="/blog"
                className="text-xs text-blue-600 hover:text-blue-700 font-medium hover:underline"
              >
                ব্লগ
              </Link>
              <Link
                href="/about"
                className="text-xs text-blue-600 hover:text-blue-700 font-medium hover:underline"
              >
                আমাদের সম্পর্কে
              </Link>
              <Link
                href="/docs"
                className="text-xs text-blue-600 hover:text-blue-700 font-medium hover:underline"
              >
                ডকুমেন্টেশন
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-8 py-4 border-t border-gray-100 text-center">
          <p className="text-gray-700 text-sm font-medium">
            প্রিচ ইসলাম অ্যাসোসিয়েশন
          </p>
          <p className="text-gray-400 text-xs mt-1">রাজশাহী, বাংলাদেশ</p>
        </div>
      </div>
    </div>
  );
}
