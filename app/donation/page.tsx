
import DonatorForm from "@/components/home/donationForm";

export default function DonationPage() {
  const locale = "bn";
  return (
    <div className="mx-auto px-4 max-w-6xl">
      {/* Hadith Section */}
      <div className="mb-12 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-2xl p-8 shadow-xl">
        <div className="text-center">
          <h4 className="text-xl md:text-2xl font-bold text-blue-800 mb-4 flex items-center justify-center gap-2">
            <span className="text-xl">📖</span>
            {locale === "bn" ? "হাদিস" : "Hadith"}
          </h4>
          <div className="text-base  text-gray-800 leading-relaxed space-y-3">
            {locale === "bn" ? (
              <>
                <p className="font-semibold  text-blue-900">
                  &quot;বান্দা বলে: আমার সম্পদ! আমার সম্পদ! অথচ সে মাত্র তিনটি বস্তুর মালিক:&quot;
                </p>
                <ul className="text-left max-w-3xl mx-auto">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>যা খেয়ে হজম করেছে</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>অথবা যা পরিধান করে পুরান করেছে</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>
                      অথবা যা সদকা করে সঞ্চয় করেছে <span className="text-sm text-gray-600">(অর্থাৎ সদকা করে কিয়ামতের দিনের জন্য নিজের নেকি উপার্জন করেছে)</span>
                    </span>
                  </li>
                </ul>
                <p className=" text-gray-700 italic">
                  এ ছাড়া বাকিসব ধ্বংস হবে ও তা মানুষের জন্য রেখে যাবে।
                </p>
                <p className=" text-sm text-blue-700 font-medium">
                  — সহীহ মুসলিম, হাদিস: ৩৯৫৯
                </p>
              </>
            ) : (
              <>
                <p className="font-semibold text-lg md:text-xl text-blue-900">
                  &quot;The servant says: My wealth! My wealth! Yet he is only the owner of three things:&quot;
                </p>
                <ul className="text-left max-w-3xl mx-auto ">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>What he has eaten and digested</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Or what he has worn out</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>
                      Or what he has given in charity and saved <span className="text-sm text-gray-600">(i.e., earned his good deeds for the Day of Judgment by giving charity)</span>
                    </span>
                  </li>
                </ul>
                <p className=" text-gray-700 italic">
                  Everything else will perish, and he will leave it for others.
                </p>
                <p className="text-sm text-blue-700 font-medium">
                  — Sahih Muslim, Hadith No. 3959
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Donation Form */}
      <DonatorForm locale={locale} />
    </div>
  );
}
