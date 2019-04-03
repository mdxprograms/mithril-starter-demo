import Nav from "../components/Nav";

const Layout = {
  view: vnode => [
    m("h1.app-title", "Mithril App Demo"),
    m(Nav),
    m(".content", vnode.children)
  ]
};

export default Layout;
