const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-16">
      <h3 className="text-3xl font-bold text-center mb-10">
        آراء عملائنا
      </h3>

      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 px-6">
        {["خدمة ممتازة", "أسعار حلوة", "توصيل سريع"].map((text, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow text-center"
          >
            ⭐⭐⭐⭐⭐
            <p className="mt-4 text-gray-600">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
