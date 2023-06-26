/* eslint-disable no-undef */
import "./App.css";
import "primereact/resources/themes/tailwind-light/theme.css";
import "primereact/resources/primereact.min.css";
import "./style/tailwind.css";
import Main from "./page/Main/main";

function App() {
  $(document).scroll(() => {
    const navbar = $(".nav-header")[0];
    if (document.documentElement.scrollTop > 0) {
      navbar.classList.add("active");
    } else {
      navbar.classList.remove("active");
    }
  });

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
