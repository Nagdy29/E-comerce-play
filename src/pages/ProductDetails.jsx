import { useState } from "react";
import { useParams } from "react-router-dom";
import { FaWhatsapp, FaCreditCard, FaCopy, FaCheckCircle } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb";
import { products } from "../data/products";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  const vodafoneCashNumber = "01044353453";
  // eslint-disable-next-line no-unused-vars
  const whatsappNumber = "01289063900";

  const [mobileType, setMobileType] = useState("");
  const [receiptImage, setReceiptImage] = useState(null);
  const [phoneImage, setPhoneImage] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [copied, setCopied] = useState(false);
  const [confirmMessage, setConfirmMessage] = useState("");

  const copyNumber = () => {
    navigator.clipboard.writeText(vodafoneCashNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = () => {
    if (!mobileType || !receiptImage || !phoneImage) {
      alert("من فضلك اكمل كل البيانات وارفع الصور المطلوبة");
      return;
    }

    const message = `👋 مرحبا  
تم الدفع عبر فودافون كاش  

🛒 المنتج: ${product.name}  
💰 السعر: ${product.price}  
📱 نوع الموبايل: ${mobileType}  
📲 رقم الدفع: ${vodafoneCashNumber}  

📌 مرفق صورة الإيصال + صورة التليفون  
يرجى التأكيد وشكراً`;

    const whatsappURL = `https://wa.me/201289063900?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");

    setConfirmMessage(
      "✅ تم إرسال الطلب، سيتم التواصل معك على واتساب فور مراجعة الإيصال."
    );
    setShowForm(false);
  };

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50">
      <Navbar />
      <Breadcrumb title={product.name} />

      <div className="p-4 md:p-8 flex flex-col md:flex-row gap-8">
        <img
          src={product.image}
          className="w-full md:w-96 mx-auto rounded-xl shadow-lg"
        />

        <div className="flex-1">
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className="my-4 text-gray-700">{product.description}</p>
          <p className="font-bold text-xl mb-6">{product.price}</p>
<button
  onClick={() => {
    const message = `👋 مرحبا،
أرغب في طلب المنتج التالي:

🛒 المنتج: ${product.name}
💰 السعر: ${product.price}

🖼️ صورة المنتج:
${product.image}

يرجى التواصل معي لتأكيد الطلب، شكراً 🙏`;

    const whatsappURL = `https://wa.me/201289063900?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  }}
  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 mb-3"
>
  <FaWhatsapp /> اطلب عبر واتساب
</button>


          <button
            onClick={() => setShowForm(!showForm)}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg flex items-center justify-center gap-2"
          >
            <FaCreditCard /> دفع فودافون كاش
          </button>

          <AnimatePresence>
            {showForm && (
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="mt-4 p-4 bg-white rounded-xl shadow-md"
              >
                {/* رقم الدفع */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-lg text-red-600">
                    📲 {vodafoneCashNumber}
                  </span>
                  <button
                    onClick={copyNumber}
                    className="flex items-center gap-1 text-sm bg-gray-200 px-3 py-1 rounded"
                  >
                    <FaCopy /> نسخ
                  </button>
                </div>

                {copied && (
                  <p className="text-green-600 text-sm mb-2 flex items-center gap-1">
                    <FaCheckCircle /> تم نسخ الرقم
                  </p>
                )}

                {/* تنبيه */}
                <div className="bg-yellow-100 border border-yellow-400 p-3 rounded mb-4 text-sm">
                  ⚠️ برجاء إرسال **صورة الإيصال + صورة التليفون فور الدفع**
                عبر الواتس اب   لتأكيد الطلب والتوصيل السريع 🚀
                </div>

                {/* نوع الموبايل */}
                <select
                  className="w-full mb-3 p-2 border rounded"
                  value={mobileType}
                  onChange={(e) => setMobileType(e.target.value)}
                >
                  <option value="">اختر نوع الموبايل</option>
                  <option>iPhone</option>
                  <option>Samsung</option>
                  <option>Huawei</option>
                  <option>Oppo</option>
                  <option>Xiaomi</option>
                </select>

                {/* صورة الإيصال */}
                <label className="font-semibold">📄 صورة الإيصال</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setReceiptImage(e.target.files[0])}
                  className="mb-3"
                />

                {/* صورة التليفون */}
                <label className="font-semibold">📱 صورة التليفون</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setPhoneImage(e.target.files[0])}
                  className="mb-3"
                />

                {/* معاينة */}
                <div className="flex gap-3 mb-3">
                  {receiptImage && (
                    <img
                      src={URL.createObjectURL(receiptImage)}
                      className="w-24 rounded border"
                    />
                  )}
                  {phoneImage && (
                    <img
                      src={URL.createObjectURL(phoneImage)}
                      className="w-24 rounded border"
                    />
                  )}
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
                >
                  إرسال للتأكيد عبر واتساب
                </button>

                {confirmMessage && (
                  <p className="mt-3 text-green-600 font-semibold">
                    {confirmMessage}
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
