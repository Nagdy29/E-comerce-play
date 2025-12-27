const Breadcrumb = ({ title }) => {
  return (
    <div className="bg-gray-100 py-4 px-8 text-gray-600">
      الرئيسية / {title}
    </div>
  );
};

export default Breadcrumb;
