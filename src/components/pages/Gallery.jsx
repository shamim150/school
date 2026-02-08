
import { Link } from "react-router-dom";

export default function GallerySection() {
  return (
    <section className="w-full bg-[#eaf6ff] py-10">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-6 text-center text-2xl font-extrabold text-[#0b2b3a]">
          গ্যালারি
        </h2>

        <div className="rounded-md bg-white p-6 shadow-[0_0_0_3px_#8ec7e6,0_10px_18px_rgba(0,0,0,0.18)]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* VIDEO GALLERY */}
            <GalleryCard
              to="/video-gallery"
              img="/gallery/video.jpg"   // put in public/gallery/video.jpg
              btnText="ভিডিও গ্যালারি"
            />

            {/* PHOTO GALLERY */}
            <GalleryCard
              to="/photo-gallery"
              img="/gallery/photo.jpg"   // put in public/gallery/photo.jpg
              btnText="ফটো গ্যালারি"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function GalleryCard({ img, btnText, to }) {
  return (
    <div className="relative overflow-hidden bg-white">
      <img src={img} alt={btnText} className="h-[240px] w-full object-cover" />

      {/* bottom dark overlay */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-black/45" />

      {/* yellow button */}
      <Link
        to={to}
        className="absolute left-1/2 bottom-4 -translate-x-1/2 rounded-sm bg-[#f4c533] px-5 py-2 text-sm font-bold text-[#1b1b1b] shadow hover:brightness-95"
      >
        {btnText}
      </Link>
    </div>
  );
}
