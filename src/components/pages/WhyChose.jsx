
import { FaQuestionCircle } from "react-icons/fa";

export default function WhyChooseSection() {
  return (
    <section className="w-full bg-[#eadcdc] py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* LEFT */}
          <div className="lg:col-span-8">
            <h3 className="mb-3 flex items-center gap-2 text-lg font-extrabold text-[#111]">
              <FaQuestionCircle className="text-[#111]" />
              Why Choose
            </h3>

            <div className="rounded-md bg-white p-6 shadow-[0_0_0_2px_#8fb8ff,0_10px_18px_rgba(0,0,0,0.18)]">
              <div className="flex items-start gap-6">
                {/* Hexagon image */}
                <div className="shrink-0">
                  <div className="hex w-[110px] h-[110px] overflow-hidden">
                    <img
                      src="/gate.jpg"   // ✅ put in public/gate.jpg
                      alt="School gate"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Empty space like screenshot (you can put text here) */}
                <div className="min-h-[90px] w-full" />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-4">
            {/* Facebook Page */}
            <h3 className="mb-2 text-lg font-extrabold text-[#111]">
              Facebook Page
            </h3>
            <div className="h-10 rounded-sm bg-white shadow-[0_0_0_2px_#8fb8ff,0_10px_18px_rgba(0,0,0,0.12)]" />

            {/* School Video */}
            <h3 className="mb-2 mt-6 text-lg font-extrabold text-[#111]">
              School Video
            </h3>
            <div className="overflow-hidden rounded-md bg-white p-3 shadow-[0_0_0_2px_#8fb8ff,0_10px_18px_rgba(0,0,0,0.18)]">
              <div className="aspect-video w-full overflow-hidden rounded-md">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/ScMzIvxBSi4"
                  title="School Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hexagon CSS */}
      <style>{`
        .hex{
          clip-path: polygon(
            25% 6.7%,
            75% 6.7%,
            100% 50%,
            75% 93.3%,
            25% 93.3%,
            0% 50%
          );
          border: 3px solid #9cc3ff;
          box-shadow: 0 6px 14px rgba(0,0,0,.18);
          background: white;
          padding: 2px;
        }
      `}</style>
    </section>
  );
}
