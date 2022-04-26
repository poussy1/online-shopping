import "./AppContainer.style.scss";

import Content from "../Content";
import SideSearch from "../SideSearch";
function AppContainer() {
  return (
    <div className="app-container">
      <SideSearch />
      <Content />
    </div>
  );
}

export default AppContainer;
