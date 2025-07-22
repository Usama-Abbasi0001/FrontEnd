
function Cardtwo() {
  return (
    <div className="md:w-[540px] mx-auto bg-white shadow-md rounded-xl p-8 text-center">
      {/* Quote Icon */}
      <div className="text-4xl text-indigo-100 mb-4">❝</div>

      {/* Testimonial Text */}
      <p className="text-gray-800 text-lg leading-relaxed mb-6">
       Frontend Mentor is the best platform for honing real-world coding skills. After starting with a free membership, I quickly upgraded to PRO, thoroughly enjoying the premium challenges. These projects paved the way for my first professional programming job. The community they’ve cultivated is also invaluable, with countless members collaboratively learning and supporting each other.
      </p>

      {/* Profile */}
      <div className="flex flex-col items-center">
        <img
          src="https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Fpro-avatar-kent.webp&w=256&q=75"
          alt="Emmilie"
          className="w-16 h-16 rounded-full object-cover mb-2"
        />
        <h3 className="font-bold text-indigo-800 text-sm uppercase">Kent</h3>
        <p className="text-sm text-gray-500">@12Kentos</p>
      </div>
    </div>
  );
}

export default Cardtwo;
