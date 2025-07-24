import React from "react";
import Container from "./layer/Container";
import TitleHeader from "./layer/TitleHeader";

const WorldLeader = () => {
  return (
    <div className="bg-[#ECFAFE] md:p-6 p-2 ">
      <Container className="mb-10  ">
        <TitleHeader
          className="md:my-12 my-6  leading-snug text-center"
          headerText="আমার স্কুলের নাম সোনার বাংলা উচ্চ বিদ্যালয়। এটি একটি প্রাচীন ও সুপরিচিত শিক্ষা প্রতিষ্ঠান। এখানে ১ম শ্রেণি থেকে ১০ম শ্রেণি পর্যন্ত শিক্ষার্থী পড়াশোনা করে। বিদ্যালয়ে অভিজ্ঞ শিক্ষকগণ পাঠদান করেন। প্রতিদিন সকাল ৯টা থেকে বিকেল ৪টা পর্যন্ত ক্লাস চলে।"
        />
        <div className="md:flex md:gap-10 w-full">
          <div className="flex justify-center md:w-1/2">
            <img
              className="max-w-[700px] h-auto object-cover rounded-xl w-full"
              src="/WorldLeaderPuddyMachine/puddy1jpg.jpg"
              alt=""
            />
          </div>
          <p className="flex justify-center items-center mb-4 md:text-2xl text-sm text-justify text-gray-700 md:w-1/2">
         স্কুল হলো জ্ঞানের আলো অর্জনের প্রথম ধাপ। একজন মানুষ জীবনের ভিত্তি গড়ে তোলে এই বিদ্যালয় থেকেই। আমি যে স্কুলে পড়ি, তার নাম [আপনার স্কুলের নাম দিন]। এটি একটি পরিচ্ছন্ন, সুন্দর এবং শান্তিপূর্ণ পরিবেশে অবস্থিত। আমাদের স্কুলে দক্ষ ও আন্তরিক শিক্ষকগণ পাঠদান করেন।

প্রতিদিন সকালে জাতীয় সংগীতের মাধ্যমে স্কুল শুরু হয়। আমরা শ্রেণিকক্ষে নিয়মিত পাঠ গ্রহণ করি এবং পরীক্ষার মাধ্যমে নিজের মেধা যাচাই করি। স্কুলে পাঠদানের পাশাপাশি সাংস্কৃতিক অনুষ্ঠান, ক্রীড়া প্রতিযোগিতা ও বিভিন্ন সহশিক্ষা কার্যক্রম হয়, যা আমাদের মানসিক ও শারীরিক বিকাশে সহায়তা করে।

স্কুল আমাদের শৃঙ্খলা, নিয়মকানুন, সম্মান ও দায়িত্ববোধ শেখায়। এজন্য স্কুলকে বলা হয় মানুষের দ্বিতীয় ঘর। আমি আমার স্কুলকে খুব ভালোবাসি।
          </p>
        </div>
      </Container>
    </div>
  );
};

export default WorldLeader;
