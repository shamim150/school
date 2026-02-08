

import { FaLeaf } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function HomeMiddleSection() {
  return (
    <section className="w-full bg-[#eaf3f8] py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* TOP LEFT: HISTORY */}
          <div className="lg:col-span-7">
            <Panel title="নিয়াজ মুহাম্মদ উচ্চ বিদ্যালয়ের প্রতিষ্ঠা ইতিহাস।">
              <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-12">
                <div className="md:col-span-4">
                  <div className="overflow-hidden border border-[#b9d5e6] bg-white p-2">
                    <img
                      src="/school.jpg"
                      alt="School"
                      className="h-[140px] w-full object-cover"
                    />
                  </div>
                </div>

                <div className="md:col-span-8">
                  <p className="text-[13px] leading-relaxed text-[#1a2b34]">
                    ভাষার বিকাশে সরকারী কাজে ভাষা পরিবর্তনের ইংরেজী রাষ্ট্রভাষা করার পর
                    জাতীয় উন্নয়নে ইংরেজী বন্ধ করে। ফলে জাতীয় উন্নয়ন কাজে নিয়াজ মুহাম্মদ
                    অবস্থা ধরণের পথে গঠিত হয়। তার নাম ছিলো আহমেদ... (আপনার টেক্সট বসান)
                  </p>

                  <Link
                    to="/about"
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#ffcc33] px-4 py-1 text-xs font-bold text-[#0b2b3a] shadow hover:brightness-95"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </Panel>
          </div>

          {/* TOP RIGHT: FEATURES */}
          <div className="lg:col-span-5">
            <Panel title="OUR SCHOOL FEATURES">
              <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-12">
                <div className="md:col-span-5">
                  <div className="overflow-hidden border border-[#b9d5e6] bg-white p-2">
                    <img
                      src="/school.jpg"
                      alt="Features"
                      className="h-[140px] w-full object-cover"
                    />
                  </div>
                </div>

                <div className="md:col-span-7">
                  <p className="text-[13px] leading-relaxed text-[#1a2b34]">
                    কম্পিউটার, অডিও-ভিজুয়াল ও মাল্টিমিডিয়ার আধুনিক শিক্ষা উপকরণের
                    মাধ্যমে শিক্ষার্থীদের অংশগ্রহণ ও সহায়তা।
                  </p>

                  <Link
                    to="/features"
                    className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#ffcc33] px-4 py-1 text-xs font-bold text-[#0b2b3a] shadow hover:brightness-95"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </Panel>
          </div>

          {/* BOTTOM LEFT: NEWS & EVENTS */}
          <div className="lg:col-span-7">
            <Panel title="News & Events">
              <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-12">
                <div className="md:col-span-4">
                  <div className="overflow-hidden border border-[#b9d5e6] bg-white p-2">
                    <img
                      src="/news.jpg"
                      alt="News"
                      className="h-[140px] w-full object-cover"
                    />
                  </div>
                </div>

                <div className="md:col-span-8">
                  <h4 className="text-sm font-extrabold text-[#0b2b3a] leading-snug">
                    আমাদের সাফল্য: ৪৫ তম জাতীয় বিজ্ঞান মেলা (দেবিদ্বার ক্লাব, নিয়াজ মুহাম্মদ উচ্চ বিদ্যালয়)
                    জেলা পর্যায়ে ১ম স্থান অর্জন করেছে।
                  </h4>

                  <p className="mt-2 text-[12px] font-semibold text-red-600">
                    <span className="mr-2 text-red-500">📌</span>
                    Published: May 15, 2024
                  </p>

                  <p className="mt-2 text-[13px] leading-relaxed text-[#1a2b34]">
                    ৪৫ তম জাতীয় বিজ্ঞান মেলা (দেবিদ্বার ক্লাব, নিয়াজ মুহাম্মদ উচ্চ বিদ্যালয়)
                    ব্রাহ্মণবাড়িয়া জেলা পর্যায়ে ১ম স্থান অর্জন করেছে।
                  </p>
                </div>
              </div>
            </Panel>
          </div>

          {/* BOTTOM RIGHT: ACHIEVEMENTS (stack) */}
          <div className="lg:col-span-5">
            <Panel title="Achievements">
              <div className="space-y-6 p-4">
                <AchievementCard
                  img="/teacher1.jpg"
                  title="আমাদের সাফল্যঃ"
                  date="May 23, 2023"
                  text="ব্রাহ্মণবাড়িয়া জেলার শ্রেষ্ঠ জেলা জাতীয় শিক্ষা সপ্তাহ-২০২৩ এ শ্রেষ্ঠ প্রতিষ্ঠান প্রধান (পুরুষ) নিয়াজ মুহাম্মদ উচ্চ বিদ্যালয়ের সহকারী প্রধান শিক্ষক মোহাম্মদ শাহিদুল ইসলাম সম্মানিত হয়েছেন।"
                />
                <AchievementCard
                  img="/teacher2.jpg"
                  title="আমাদের সাফল্যঃ"
                  date="May 23, 2023"
                  text="ব্রাহ্মণবাড়িয়া জেলার শ্রেষ্ঠ জেলা জাতীয় শিক্ষা সপ্তাহ-২০২৩ এ নিয়াজ মুহাম্মদ উচ্চ বিদ্যালয়ের সহকারী শিক্ষক (বিজ্ঞান) সম্মানিত হয়েছেন।"
                />
                <AchievementCard
                  img="/achievement3.jpg"
                  title="মিলনমেলা কাব্যচর্চা"
                  date="July 28, 2026"
                  text=""
                  small
                />
              </div>
            </Panel>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- UI HELPERS -------------------- */

function Panel({ title, children }) {
  return (
    <div className="rounded-sm border border-[#8ec7e6] bg-[#f2fbff] shadow-[0_0_0_3px_#8ec7e6,0_6px_14px_rgba(0,0,0,0.18)]">
      <div className="flex items-center gap-2 bg-[#064b4d] px-4 py-2 text-white">
        <FaLeaf className="text-[#ffcc33]" />
        <h3 className="text-sm font-extrabold">{title}</h3>
      </div>
      <div className="bg-[#f2fbff]">{children}</div>
    </div>
  );
}

function AchievementCard({ img, title, date, text, small = false }) {
  return (
    <div className="bg-white shadow-[0_0_0_3px_#8ec7e6,0_6px_14px_rgba(0,0,0,0.18)]">
      <div className="grid grid-cols-12 gap-4 p-4">
        <div className="col-span-4">
          <div className="overflow-hidden border border-[#b9d5e6] bg-white p-2">
            <img
              src={img}
              alt={title}
              className={`w-full object-cover ${small ? "h-[90px]" : "h-[110px]"}`}
            />
          </div>
        </div>

        <div className="col-span-8">
          <h4 className="text-sm font-extrabold text-[#0b2b3a]">{title}</h4>
          <p className="mt-1 text-[12px] font-semibold text-red-600">
            <span className="mr-2">📌</span>Published: {date}
          </p>

          {text ? (
            <p className="mt-2 text-[13px] leading-relaxed text-[#1a2b3a]">
              {text}
            </p>
          ) : null}

          <Link
            to="/achievements"
            className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#ffcc33] px-4 py-1 text-xs font-bold text-[#0b2b3a] shadow hover:brightness-95"
          >
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
}
