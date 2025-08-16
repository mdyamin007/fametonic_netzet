import RightArrowIcon from "./icons/RightArrowIcon";

export default function Hero() {
  return (
    <>
      <section
        className="absolute top-[418px] left-0 w-[390px] h-[451px] px-5 pt-5 pl-5 md:top-[212px] md:left-[215px] md:w-[516px] md:h-[511px] md:p-0 z-10
    "
      >
        {/* For Mobile */}
        <div className="flex md:hidden flex-col gap-[22px]">
          <div className="flex flex-col text-center">
            <p className="font-urbanist font-bold text-[25px]/[100%] text-white ">
              Want to Turn Social Media Into a Profitable Career?
            </p>
            <p className="font-urbanist font-bold text-[25px]/[100%] text-[#00E7F9] text-shadow-[0px_4px_4px_#FC004E]">
              Discover your way to success with Fametonic:
            </p>
          </div>

          <div className="flex flex-col gap-[10px]">
            <div className="flex gap-2.5 items-center">
              <p>✨</p>
              <p className="font-figtree font-normal text-base leading-[22px] text-white">
                Start growing your influence right away—no waiting required!
              </p>
            </div>

            <div className="flex gap-2.5 items-center">
              <p>✨</p>
              <p className="font-figtree font-normal text-base leading-[22px] text-white">
                Create viral TikToks and Reels step by step with easy-to-follow
                lessons
              </p>
            </div>

            <div className="flex gap-2.5 items-center">
              <p>✨</p>
              <p className="font-figtree font-normal text-base leading-[22px] text-white">
                Use a Personal AI Worker to boost your content
              </p>
            </div>

            <div className="flex gap-2.5 items-center">
              <p>✨</p>
              <p className="font-figtree font-normal text-base leading-[22px] text-white">
                Learn from expert-led courses designed for aspiring influencers
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-[19px] text-center">
            <p className="font-figtree font-medium text-[12px]/[100%] text-[#ABABAB]">
              By clicking &ldquo;Get Started&rdquo;, you agree with Terms and
              Conditions, Privacy Policy, Subscription Terms
            </p>
            <p className="font-figtree font-medium text-[10px]/[100%] text-[#ABABAB]">
              Fametonic 2025 ©All Rights Reserved.
            </p>
          </div>
        </div>

        {/* For Desktop */}
        <div className="hidden md:flex flex-col gap-[30px]">
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col">
              <p className="font-urbanist font-bold text-[35px]/[100%] text-white ">
                Want to Turn Social Media Into a Profitable Career?
              </p>
              <p className="font-urbanist font-bold text-[35px]/[100%] text-[#00E7F9] text-shadow-[0px_4px_4px_#FC004E]">
                Discover your way to success with Fametonic:
              </p>
            </div>

            <div className="flex flex-col gap-[13px]">
              <div className="flex gap-2.5 items-center">
                <p>✨</p>
                <p className="font-figtree font-semibold text-base leading-[22px] text-white">
                  Start growing your influence right away—no waiting required!
                </p>
              </div>

              <div className="flex gap-2.5 items-center">
                <p>✨</p>
                <p className="font-figtree font-semibold text-base leading-[22px] text-white">
                  Create viral TikToks and Reels step by step with
                  easy-to-follow lessons
                </p>
              </div>

              <div className="flex gap-2.5 items-center">
                <p>✨</p>
                <p className="font-figtree font-semibold text-base leading-[22px] text-white">
                  Use a Personal AI Worker to boost your content
                </p>
              </div>

              <div className="flex gap-2.5 items-center">
                <p>✨</p>
                <p className="font-figtree font-semibold text-base leading-[22px] text-white">
                  Learn from expert-led courses designed for aspiring
                  influencers
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 w-[313px]">
            <button className="flex w-[313px] h-10 rounded-[10px] bg-primary justify-center items-center gap-2.5 shadow-[2px_2px_10px_#00E7F9] cursor-pointer">
              <p className="font-figtree font-bold text-xl leading-[100%] text-white">
                GET STARTED
              </p>
              <RightArrowIcon />
            </button>

            <p className="font-figtree font-normal leading-4 text-white text-xs text-center">
              1-minute quiz for personalized Insights
            </p>
          </div>

          <div className="w-full flex flex-col gap-3">
            <p className="font-figtree font-medium text-[12px]/[100%] text-[#ABABAB]">
              By clicking &ldquo;Get Started&rdquo;, you agree with Terms and
              Conditions, Privacy Policy, Subscription Terms
            </p>
            <p className="font-figtree font-medium text-[10px]/[100%] text-[#ABABAB]">
              Fametonic 2025 ©All Rights Reserved.
            </p>
          </div>
        </div>
      </section>

      {/* Get Started Button for Mobile */}
      <div className="md:hidden absolute top-[861px] w-[390px] px-5 py-10 gap-[19px]">
        <div className="flex flex-col gap-2.5 w-full">
          <button className="flex w-full h-10 rounded-[10px] bg-primary justify-center items-center gap-2.5 shadow-[2px_2px_10px_#00E7F9] cursor-pointer">
            <p className="font-urbanist font-bold text-xl leading-[100%] text-white">
              GET STARTED
            </p>
            <RightArrowIcon />
          </button>

          <p className="font-figtree font-normal leading-4 text-white text-xs text-center">
            1-minute quiz for personalized Insights
          </p>
        </div>
      </div>
    </>
  );
}
