import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb";

const Contact = () => {
  return (
    <div dir="rtl">
      <Navbar />
      <Breadcrumb title="تواصل معنا" />

      <div className="p-8 max-w-xl mx-auto">
        <input className="w-full border p-3 mb-4" placeholder="اسمك" />
        <input className="w-full border p-3 mb-4" placeholder="رقم الموبايل" />
        <textarea className="w-full border p-3 mb-4" placeholder="رسالتك" />
        <button className="bg-black text-white px-6 py-3 rounded">
          إرسال
        </button>
      </div>
    </div>
  );
};

export default Contact;
