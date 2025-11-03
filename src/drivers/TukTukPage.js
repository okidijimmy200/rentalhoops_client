import React from "react";

function TukTukPage() {
  const drivers = [
    {
      id: 1,
      name: "Stewart Ochoa",
      type: "Tuk Tuk",
      stage: "Layibi Railway",
      phone: "0791 712 133",
    },
    {
      id: 2,
      name: "Patrick Komagum",
      type: "Tuk Tuk",
      stage: "Layibi Railway",
      phone: "0774 544 300",
    },
    {
      id: 3,
      name: "Simon Peter Oryema",
      type: "Tuk Tuk",
      stage: "Layibi Industrial Area",
      phone: "0765 846 261 | 0785 205 885",
    },
    {
      id: 4,
      name: "Steven Peko-Odiya",
      type: "Tuk Tuk",
      stage: "Layibi Industrial Area",
      phone: "0779 628 707 | 0705 099 702",
    },
  ];

  return (
    <section className="py-12 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Tuk Tuk Drivers
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {drivers.map((driver) => (
            <div
              key={driver.id}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center"
            >
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-4 shadow-lg">
                {driver.name.charAt(0)}
              </div>

              <h3 className="text-lg font-semibold text-gray-800">
                {driver.name}
              </h3>
              <p className="text-sm text-gray-500">{driver.type}</p>
              <p className="text-sm text-gray-500">{driver.stage}</p>

              {/* Split phone numbers and render each one */}
              <div className="mt-3">
                {driver.phone.split("|").map((num, index) => (
                  <a
                    key={index}
                    href={`tel:${num.trim().replace(/\s+/g, "")}`}
                    className="block text-blue-600 font-medium hover:underline"
                  >
                    {num.trim()}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TukTukPage;
