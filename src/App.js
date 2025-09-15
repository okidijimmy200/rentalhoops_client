import DriverContacts from "./drivers/driver";
import Navbar from "./drivers/navbar";
import Footer from "./drivers/footer";
import { AboutSection } from "./drivers/about";

function App() {
  return (
    <div className="App">
      <Navbar />
      <DriverContacts />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;
