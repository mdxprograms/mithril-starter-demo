import router from "./router";
import "./styles/app.scss";

if (module.hot) {
  module.hot.accept();
}

m.route(document.getElementById("root"), "/", router);
