export default function DriverContacts() {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-8">Get Driver Contacts</h2>
      <div className="grid gap-6 md:grid-cols-3">
        
        {/* Tuk Tuk */}
        <div className="p-6 bg-white shadow-md rounded-lg text-center">
          <h3 className="text-lg font-semibold mb-2">Tuk Tuk Drivers</h3>
          <p className="text-gray-600">Find reliable Tuk Tuk drivers in your area.</p>
        </div>

        {/* Lorry */}
        <div className="p-6 bg-white shadow-md rounded-lg text-center">
          <h3 className="text-lg font-semibold mb-2">Lorry Drivers</h3>
          <p className="text-gray-600">Connect with trusted lorry drivers for transport.</p>
        </div>

        {/* Boda Boda */}
        <div className="p-6 bg-white shadow-md rounded-lg text-center">
          <h3 className="text-lg font-semibold mb-2">Boda Boda Drivers</h3>
          <p className="text-gray-600">Get fast and safe boda boda riders near you.</p>
        </div>
      </div>
    </section>
  );
}
