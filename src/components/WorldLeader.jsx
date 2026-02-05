import React from "react";

const WorldLeader = () => {
  return (
    



       <section className="w-full bg-[#e9f6fb] py-10">
      <div className="mx-auto max-w-6xl px-4">
        {/* TOP BOX (border + gradient bg) */}
        <div className="border-[10px] border-[#b9d9dc] bg-gradient-to-r from-[#86c9c6] via-[#a3d7d6] to-[#86c9c6] p-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* LEFT BIG CARD */}
            <div className="lg:col-span-7">
              <div className="rounded-md bg-white p-4 shadow-sm">
                <div className="bg-[#6f8f00] px-4 py-2 text-sm font-bold text-white">
                  বাংলাদেশ&apos;অন্তর্বর্তীন সরকারের মাননীয় প্রধান উপদেষ্টা।
                </div>

                <div className="mt-3 rounded-md border bg-white p-2">
                  

                  <img
                    src="/Gallery/bigLeader.jpg"
                    alt="World Leader"
                    className="h-[520px] w-full rounded-md object-cover"
                  />

                </div>
              </div>
            </div>

            {/* RIGHT 2 SMALL CARDS */}
            <div className="lg:col-span-5">
              <div className="rounded-md bg-white p-4 shadow-sm">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
                  {/* CARD 1 */}
                  <div className="border border-[#2aa04a] bg-white">
                    <div className="bg-[#6f8f00] px-3 py-2 text-center text-xs font-bold text-white">
                      বাংলাদেশ&apos;অন্তর্বর্তীন সরকারের
                      <br />
                      মাননীয় শিক্ষা উপদেষ্টা
                    </div>

                    <div className="p-4">
                      <div className="mx-auto h-40 w-40 overflow-hidden rounded-md bg-gray-100">
                      <img
                  src="/Gallery/bigLeader.jpg"
                    alt="World Leader"
                    // className="h-[520px] w-full rounded-md object-cover"
                    className="w-full h-full object-cover object-center block"
                  />
                      </div>

                      <p className="mt-3 text-center text-xs font-semibold text-gray-900">
                        অধ্যাপক ড. (নাম লিখুন)
                      </p>
                    </div>

                    <div className="border-t border-[#2aa04a] py-2 text-center">
                      <button className="rounded-full bg-[#1b1f23] px-8 py-1 text-xs font-bold text-yellow-400">
                        বিস্তারিত
                      </button>
                    </div>
                  </div>

                  {/* CARD 2 */}
                  <div className="border border-[#2aa04a] bg-white">
                    <div className="bg-[#6f8f00] px-3 py-2 text-center text-xs font-bold text-white">
                      মাধ্যমিক ও উচ্চ শিক্ষা বিভাগের
                      <br />
                      সচিব ড. (নাম লিখুন)
                    </div>

                    <div className="p-4">
                      <div className="mx-auto h-40 w-40 overflow-hidden rounded-md bg-gray-100">
                       <img
                    src="/Gallery/bigLeader.jpg"
                    alt="World Leader"
                    // className="h-[520px] w-full rounded-md object-cover"
                    className="w-full h-full object-cover object-center block"
                  />
                      </div>

                      <p className="mt-3 text-center text-xs font-semibold text-gray-900">
                        ড. (নাম লিখুন)
                      </p>
                    </div>

                    <div className="border-t border-[#2aa04a] py-2 text-center">
                      <button className="rounded-full bg-[#1b1f23] px-8 py-1 text-xs font-bold text-yellow-400">
                        বিস্তারিত
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end right */}
          </div>
        </div>






        {/* BOTTOM TWO MESSAGE CARDS */}
        <div className="mt-10 flex flex-col items-center justify-center gap-10 md:flex-row">
          {/* Chairman */}
          <div className="relative w-full max-w-[280px] bg-[#0e8796] pb-6 pt-14 text-center shadow-md">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <div className="h-28 w-28 overflow-hidden rounded-md bg-white p-1 shadow">
                <img
                     src="/Gallery/gallery_1.jpg"
                    alt="World Leader"
                    className="w-full h-full object-cover object-center block"
                  />
              </div>
            </div>

            <h3 className="text-lg font-bold text-white">Message of The Chairman</h3>
            <p className="mt-1 text-xs font-semibold text-white/90">নাম লিখুন</p>

            <button className="mt-4 rounded-full bg-[#c81515] px-6 py-1 text-xs font-bold text-white">
              View More..
            </button>
          </div>

          {/* Headmaster */}
          <div className="relative w-full max-w-[280px] bg-[#0e8796] pb-6 pt-14 text-center shadow-md">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <div className="h-28 w-28 overflow-hidden rounded-md bg-white p-1 shadow">
               <img
                     src="/Gallery/gallery_1.jpg"
                    alt="World Leader"
                    className="w-full h-full object-cover object-center block"
                  />
              </div>
            </div>

            <h3 className="text-lg font-bold text-white">Message of The Headmaster</h3>
            <p className="mt-1 text-xs font-semibold text-white/90">
              Mohammad Shahidul Islam
            </p>

            <button className="mt-4 rounded-full bg-[#c81515] px-6 py-1 text-xs font-bold text-white">
              View More..
            </button>
          </div>
        </div>
      </div>
    </section>














  );
};

export default WorldLeader;
