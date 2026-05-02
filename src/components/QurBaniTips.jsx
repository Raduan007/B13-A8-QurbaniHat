const QurBaniTips = () => {
  return (
    <div className="space-y-8 px-4 md:px-10 lg:px-20">

      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Qurbani Guidelines & Tips
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">

        <div className="p-5 border rounded-xl shadow-sm transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-xl active:scale-95 bg-white">
          <h3 className="font-bold text-lg">Choose Healthy Animal</h3>
          <p className="text-sm text-gray-600 mt-2">
            Select a strong, disease-free animal with good body condition and no visible defects.
          </p>
        </div>

        <div className="p-5 border rounded-xl shadow-sm transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-xl active:scale-95 bg-white">
          <h3 className="font-bold text-lg">Correct Age Requirement</h3>
          <p className="text-sm text-gray-600 mt-2">
            Ensure the animal meets the Islamic age requirement: goat (1+ year), cow (2+ years), camel (5+ years).
          </p>
        </div>

        <div className="p-5 border rounded-xl shadow-sm transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-xl active:scale-95 bg-white">
          <h3 className="font-bold text-lg">Proper Feeding & Care</h3>
          <p className="text-sm text-gray-600 mt-2">
            Provide clean water, nutritious food, and a stress-free environment before Qurbani.
          </p>
        </div>

        <div className="p-5 border rounded-xl shadow-sm transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-xl active:scale-95 bg-white">
          <h3 className="font-bold text-lg">Follow Islamic Rules</h3>
          <p className="text-sm text-gray-600 mt-2">
            Perform Qurbani with correct intention (niyyah) and follow Sunnah guidelines properly.
          </p>
        </div>

      </div>

    </div>
  );
};

export default QurBaniTips;