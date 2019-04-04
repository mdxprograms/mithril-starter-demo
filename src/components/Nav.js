import "../styles/nav.scss";

const Nav = {
  view: () =>
    m("nav", [
      m("a.nav-item", { href: "/", oncreate: m.route.link }, "NASA - APOD"),
      m(
        "a.nav-item",
        { href: "/hn", oncreate: m.route.link },
        "HN - Top 10 Stories"
      ),
      m(
        "a.nav-item",
        { href: "/got", oncreate: m.route.link },
        "GoT Characters"
      )
    ])
};

export default Nav;
