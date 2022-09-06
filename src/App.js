// Imports the react router dom functions
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Imports the style "AppStyles" from styles folder file app.styles.js
// This is a styled component
import { AppStyles } from "./styles/app.styles";

// Imports the components Navbar, header and footer from components folder
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";

// Import pages Home and About from pages folder
import Home from "./pages/home";
import About from "./pages/about";

// The App function that runs the whole up
const App = () => {
  return (
    // The style component `AppStyles`
    <AppStyles>
      {/* BrowserRouter function - routes pages */}
      <BrowserRouter>
        {/* Header Component */}
        <Header />
        {/* Navbar Component */}
        <Navbar />
        {/* Routes each page URL */}
        <Routes>
          {/* Home page url */}
          <Route path="/" element={<Home />} />
          {/* About page url */}
          <Route path="/about" element={<About />} />
          {/* Clode Routes functions */}
        </Routes>
        {/* Footer Component */}
        <Footer />
        {/* End of BrowserRouter function */}
      </BrowserRouter>
      {/* End of App styles component */}
    </AppStyles>
  );
};

// Exports the App function
export default App;
