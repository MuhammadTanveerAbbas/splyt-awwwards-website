import { useMediaQuery } from "react-responsive";

const FooterSection = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <footer className="footer-section">
      <img
        src="/images/footer-dip.png"
        alt="Footer decorative dip"
        className="w-full object-cover -translate-y-1"
      />

      <div className="relative pt-[10vh] md:pt-[20vh] 2xl:h-[110vh]">
        <div className="z-10 overflow-hidden">
          <h1 className="general-title text-center text-milk py-5">
            #CHUGRESPONSIBLY
          </h1>
        </div>

        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {isMobile ? (
            <img
              src="/images/footer-drink.png"
              alt="Drink illustration"
              className="w-full h-full object-contain"
            />
          ) : (
            <video
              src="/videos/splash.mp4"
              autoPlay
              playsInline
              muted
              loop={false}
              className="w-full h-full object-contain mix-blend-lighten"
            />
          )}
        </div>

        <div className="relative z-10 flex justify-center gap-5 mt-5 md:mt-20">
          {[
            { src: "./images/yt.svg", alt: "YouTube" },
            { src: "./images/insta.svg", alt: "Instagram" },
            { src: "./images/tiktok.svg", alt: "TikTok" },
          ].map(({ src, alt }, index) => (
            <div className="social-btn" key={index}>
              <img src={src} alt={alt} />
            </div>
          ))}
        </div>

        <div className="relative z-10 mt-20 px-5 md:px-10 flex flex-col md:flex-row justify-between gap-10 text-milk font-paragraph font-medium md:text-lg">
          <div className="flex flex-col md:flex-row items-start md:gap-16 gap-5">
            <div>
              <p>Chug Club</p>
              <p>Student Marketing</p>
              <p>Dairy Dealers</p>
            </div>
            <div>
              <p>Company</p>
              <p>Contacts</p>
              <p>Tasty Talk</p>
            </div>
          </div>

          <div className="md:max-w-lg w-full">
            <p>
              Get Exclusive Early Access and Stay Informed About Product
              Updates, Events, and More!
            </p>
            <form className="flex items-center justify-between border-b border-[#D9D9D9] py-5 md:mt-10">
              <input
                type="email"
                name="newsletter"
                aria-label="Email Address"
                placeholder="Enter your email"
                className="w-full bg-transparent placeholder:text-[#999999] focus:outline-none"
                required
              />
              <button type="submit" aria-label="Subscribe">
                <img src="/images/arrow.svg" alt="Submit" />
              </button>
            </form>
          </div>
        </div>

        <div className="relative z-10 py-5 px-5 md:px-10 flex flex-col md:flex-row justify-between items-center text-sm text-milk">
          <p>© 2025 Spylt - All Rights Reserved</p>
          <div className="flex gap-5 mt-3 md:mt-0">
            <a href="/privacy" className="hover:underline">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:underline">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
