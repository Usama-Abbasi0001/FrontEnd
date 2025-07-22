
function Cardone() {
  return (
    <div className="md:w-[540px] md:h-[450px] mx-auto bg-white shadow-md rounded-xl p-8 text-center">
      {/* Quote Icon */}
      <div className="text-4xl text-indigo-100 mb-4">❝</div>

      {/* Testimonial Text */}
      <p className="text-gray-800 text-lg leading-relaxed mb-6">
        Frontend Mentor was absolutely pivotal in my career transition, offering portfolio-ready projects
        and a supportive community. The premium challenges stood out in my interviews and prepared me for a
        real-life workflow. Thanks to this platform, I transitioned from a newbie to a hired developer.
      </p>

      {/* Profile */}
      <div className="flex flex-col items-center">
        <img
          src="https://www.frontendmentor.io/_next/image?url=%2Fstatic%2Fimages%2Fpro-avatar-emmilie.webp&w=256&q=75"
          alt="Emmilie"
          className="w-16 h-16 rounded-full object-cover mb-2"
        />
        <h3 className="font-bold text-indigo-800 text-sm uppercase">Emmilie</h3>
        <p className="text-sm text-gray-500">@emestabillo</p>
      </div>
    </div>
  );
}

export default Cardone;
