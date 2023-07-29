import Navbar from "./components/Navbar";
import Home from "./home";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../theme";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Business from "./categories/business";
import Sports from "./categories/sports";
import Health from "./categories/health";
import Entertainment from "./categories/entertainment";
import Technology from "./categories/technology";
import ArticleDetails from "./categories/articleDetails";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/business" element={<Business />}></Route>
          <Route path="business/:slug" element={<ArticleDetails />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="entertainment/:slug" element={<ArticleDetails />} />
          <Route path="/health" element={<Health />} />
          <Route path="health/:slug" element={<ArticleDetails />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="sports/:slug" element={<ArticleDetails />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="technology/:slug" element={<ArticleDetails />} />
        </Routes>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
