import { Link, useLocation } from "react-router-dom";
import { RoutesTypes } from "../../types";
const SidebarLinks = (props: any) => {
  let location = useLocation();

  const { routes } = props;

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName: string) => {
    return location.pathname.includes(routeName);
  };

  const createLinks = (routes: RoutesTypes[]) => {
    return routes.map(
      ({ layout, path, component, icon: NavIcon, name, activeIcon }, index) => {
        if (layout === "/admin" || layout === "/auth") {
          return (
            <Link
              key={index}
              to={layout + "/" + path}
              className={`space-y-4 rounded-xl p-2  ${
                activeRoute(path) ? "bg-primary text-white" : "text-secondary"
              }`}
            >
              <div className="flex items-center justify-start space-x-4 font-medium">
                {activeRoute(path) ? activeIcon : NavIcon}
                <h2 className="flex-1">{name}</h2>
              </div>
            </Link>
          );
        }
      }
    );
  };

  return createLinks(routes);
};

export default SidebarLinks;
