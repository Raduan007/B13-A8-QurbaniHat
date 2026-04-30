

const QurBaniTips = () => {
   return (
    <div className="space-y-6">

      <h2 className="text-3xl font-bold text-center">
        Qurbani Tips
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="p-5 border rounded-lg">
          <h3 className="font-bold">Healthy Animal Selection</h3>
          <p className="text-sm text-gray-500 mt-2">
            Choose strong, healthy animals without defects.
          </p>
        </div>

        <div className="p-5 border rounded-lg">
          <h3 className="font-bold">Proper Age</h3>
          <p className="text-sm text-gray-500 mt-2">
            Ensure animal meets required age for Qurbani.
          </p>
        </div>

        <div className="p-5 border rounded-lg">
          <h3 className="font-bold">Hygiene & Care</h3>
          <p className="text-sm text-gray-500 mt-2">
            Keep animals clean and well-fed before sacrifice.
          </p>
        </div>

      </div>

    </div>
  );
};

export default QurBaniTips;