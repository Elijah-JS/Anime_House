export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-10">
      
      {/* Grid Layout For The 1x3 Table. Section 1 - 3 Are Commented Below Accordingly */}
      <div className="max-w-6xl w-full grid grid-cols-3 gap-8">
        
        {/* Section 1 - What is Anime? */}
        <div className="text-center border-r-2 border-gray-400 pr-8">
          <h2 className="text-4xl font-extrabold mb-4 text-emerald-400">What Is Anime?</h2>
          <p className="text-lg leading-relaxed">
            Anime isn’t just cartoons—it’s a powerful storytelling medium that blends <b>breathtaking animation</b>,  
            <b>deep emotions</b>, and <b>epic adventures</b>. From heartwarming slice-of-life moments to mind-blowing  
            sci-fi battles, anime captures the <b>imagination of fans worldwide</b>. Whether you're into  
            <b>shonen action, shojo romance, or isekai adventures</b>, there's an anime for <b>everyone!</b> 🎌🔥
          </p>
        </div>

        {/* Section 2 - Our Mission */}
        <div className="text-center border-r-2 border-gray-400 px-8">
          <h2 className="text-4xl font-extrabold mb-4 text-emerald-400">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            At <span className="text-emerald-300 font-semibold">AnimeHouse</span>, we live and breathe anime!  
            Our mission is to create a vibrant, inclusive space where anime fans of all backgrounds  
            can explore, discuss, and fall in love with their favorite series.  
            Whether you're a lifelong otaku or just starting your anime journey, we're here to make your experience legendary. 🚀
          </p>
        </div>

        {/* Section 3 - Our Vision */}
        <div className="text-center pl-8">
          <h2 className="text-4xl font-extrabold mb-4 text-emerald-400">Our Vision</h2>
          <p className="text-lg leading-relaxed">
            We’re more than just a website—we’re a passionate team based in <b>California</b>,  
            working tirelessly to build the <b>ultimate</b> anime hub.  
            Our vision? To become the <b>#1 go-to platform</b> for anime lovers worldwide,  
            connecting fans with the latest news, deep-dive discussions, and an ever-growing  
            community of like-minded enthusiasts. Let's build something amazing together! 🌟
          </p>
        </div>

      </div>

      {/* Contact Us Section */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold text-emerald-300">💌 Get in Touch!</h3>
        <p className="text-lg mt-2">
          Have questions, suggestions, or just want to geek out about your favorite anime?  
          Drop us a message at /* This can maybe get turned into a functional link?? */ 
          <span className="text-emerald-400 font-semibold"> animehousewebsite@gmail.com</span>  
           and let’s chat! 🎉✨
        </p>
      </div>

    </div>
  );
}
