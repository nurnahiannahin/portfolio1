import Link from 'next/link';

export default function HeroContent() {
  return (
    /* THE CONTENT CONTAINER
       This block manages your content alignment and sets the boundaries 
       for the text so it matches your site's main content layout grid.
    */
    <div className="w-full max-w-[1200px] mx-auto px-6 py-12 flex flex-col items-start mt-25">
      
      {/* Eyebrow Label */}
      <p className="text-[14px] sm:text-[15px] font-medium text-gray-400 tracking-tight mb-8">
        Nur Nahian Nahin <span className="text-gray-300 mx-2">•</span> based in Dhaka
      </p>

      {/* Headline Text Block */}
      {/* FIX: Changed text color to text-[#111111] for crystal clear light-mode contrast, 
        and added dark:text-[#ffffff] to ensure it turns pure white in dark-mode!
      */}
      <h1 className="text-[36px] sm:text-[48px] md:text-[64px] font-normal tracking-tight text-[#111111] dark:text-[#ffffff] leading-[1.12] max-w-[820px]">
        I’m a product designer focused on Web apps, previously{" "}
        
        {/* Primary Interactive Text Link */}
        <Link 
          href="/work/revolut" 
          className="text-[#1d2bf1] dark:text-[#4d59ff] hover:text-[#12185c] dark:hover:text-[#808aff] inline-block transition-colors duration-200"
        >
          at Revolut.
        </Link>
      </h1>

    </div>
  );
}