import Header from "./Header";
import Main from "./Main";
import Skills from "./Skills";
import ProjectsCard from "./ProjectsCard";
import Contact from "./Contact";

import "./index.css";
import Footer from "./Footer";

function App() {
  return (
    <div className="App overflow-hidden">
      <Header />
      <Main />
      <Skills />
      <ProjectsCard />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
