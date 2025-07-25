function Cardone({ quote, text, imgSrc, name, username }) {
  return (
    <div className="md:w-[540px] md:h-[450px] mx-auto bg-white shadow-md rounded-xl p-8 text-center">
      {/* Quote Icon */}
      <div className="text-4xl text-indigo-100 mb-4">{quote}</div>

      {/* Testimonial Text */}
      <p className="text-gray-800 text-lg leading-relaxed mb-6">
        {text}
      </p>

      {/* Profile */}
      <div className="flex flex-col items-center">
        <img
          src={imgSrc}
          alt={name}
          className="w-16 h-16 rounded-full object-cover mb-2"
        />
        <h3 className="font-bold text-indigo-800 text-sm uppercase">{name}</h3>
        <p className="text-sm text-gray-500">@{username}</p>
      </div>
    </div>
  );
}

export default Cardone;
