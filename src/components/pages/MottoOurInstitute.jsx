
import { FaLeaf } from "react-icons/fa";
import { Link } from "react-router-dom";

const notices = [
  {
    title: "মাধ্যমিক বিদ্যালয়ের ছুটির তালিকা-২০২৫",
    date: "November 2, 2025",
  },
  {
    title: "এসএসসি পরীক্ষা-২০২৫ এর সংশোধিত সিলেবাস।",
    date: "November 13, 2025",
  },
  {
    title: "আগামী ২০/১১/২০২৫ইং থেকে বার্ষিক/নির্বাচনি পরীক্ষা আরম্ভ হবে।",
    date: "November 2, 2025",
  },
  {
    title: "তৃতীয় বৃত্তি পরীক্ষা-২০২৫ এর প্রশ্নপত্রিত কপি।",
    date: "November 2, 2025",
  },
];

export default function MottoAndLatestNotices() {
  return (
    <section className="w-full bg-[#eeeeee] py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* LEFT: MOTTO */}
          <div className="lg:col-span-8">
            <div className="rounded-sm border border-[#8ec7e6] bg-white shadow-[0_0_0_3px_#8ec7e6,0_6px_14px_rgba(0,0,0,0.18)]">
              {/* header */}
              <div className="flex items-center gap-2 bg-[#064b4d] px-4 py-2 text-white">
                <FaLeaf className="text-[#ffcc33]" />
                <h3 className="text-sm font-extrabold">Motto of Our Institute</h3>
              </div>

              {/* body */}
              <div className="flex items-center justify-center p-8">
                {/* ✅ Put your image in: public/motto.png */}
                <img
                  src="/Gallery/motto.png"
                  alt="Motto"
                  className="max-h-[320px] w-full max-w-[520px] object-contain"
                />
              </div>
            </div>
          </div>

          {/* RIGHT: LATEST NOTICES */}
          <div className="lg:col-span-4">
            <div className="rounded-sm border border-[#8ec7e6] bg-white shadow-[0_0_0_3px_#8ec7e6,0_6px_14px_rgba(0,0,0,0.18)]">
              {/* header */}
              <div className="flex items-center gap-2 bg-[#064b4d] px-4 py-2 text-white">
                <FaLeaf className="text-[#ffcc33]" />
                <h3 className="text-sm font-extrabold uppercase">LATEST NOTICES</h3>
              </div>

              {/* list */}
              <div className="divide-y divide-[#b9d5e6]">
                {notices.map((n, i) => (
                  <div key={i} className="bg-[#eaf8e7] px-4 py-4">
                    <div className="flex items-start gap-2">
                      <span className="mt-1 inline-flex items-center rounded-full bg-[#19b64b] px-2 py-[2px] text-[10px] font-bold text-white">
                        New
                      </span>
                      <p className="text-sm font-semibold text-[#0b2b3a] leading-snug">
                        {n.title}
                      </p>
                    </div>

                    <p className="mt-2 text-[12px] font-semibold text-red-600">
                      <span className="mr-2 text-red-500">||</span>
                      Published: {n.date}
                    </p>
                  </div>
                ))}
              </div>

              {/* footer button */}
              <Link
                to="/notice"
                className="block bg-[#064b4d] py-2 text-center text-xs font-bold text-white hover:opacity-90"
              >
                VIEW MORE ALL NOTICE »
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
