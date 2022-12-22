import "./header.css";

export const Header = () => {
  const menuItems = [
    { label: "Home", href: "#header", id: 1 },
    { label: "About", href: "#about", id: 2 },
    { label: "Contact", href: "#contact", id: 3 },
  ];

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <ul role="menu">
            {menuItems.map(function (menuItem) {
              return (
                <li role="menuitem" key={menuItem.id}>
                  <a href={menuItem.href}> {menuItem.label}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};
