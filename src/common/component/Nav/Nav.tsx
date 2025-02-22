import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as styles from "./Nav.css";
import { NAV_CONTENT } from "./constant";
import { PATH } from "@route/path";

type CommunityContent = {
  id: string;
  name?: string;
  image?: string;
  type?: string;
};

type Props = {
  content: CommunityContent[] | typeof NAV_CONTENT;
  type?: "nav" | "community";
};

const Nav = ({ content, type = "nav" }: Props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const extractFirstPath = (): string => {
    const pathName = location.pathname;
    const parts = pathName.split("/");
    const basePath = `/${parts[1]}`;
    return basePath;
  };

  const [activeItem, setActiveItem] = useState<string>(extractFirstPath());

  const handleClick = (itemId: string, path: string) => {
    if (itemId === "/review") {
      alert("추후 구현 예정입니다.");
    } else {
      setActiveItem(itemId);
      navigate(path);
    }
  };

  return (
    <div className={styles.container} data-type={type}>
      {content.map((item) => {
        if (type === "community") {
          const communityItem = item as CommunityContent;
          const communityPath = `${PATH.COMMUNITY.CATEGORY}?type=${communityItem.type}&id=${communityItem.id}`;

          return (
            <button
              key={communityItem.id}
              type="button"
              onClick={() => handleClick(communityItem.id, communityPath)}
              className={styles.navItem({
                state: activeItem === communityItem.id,
                type,
              })}
            >
              <img
                src={communityItem.image || "default-image-url"}
                alt={communityItem.name || "Unnamed"}
                style={{ width: "7.2rem" }}
              />
              <span>{communityItem.name || "Unnamed"}</span>
            </button>
          );
        }

        const navItem = item as (typeof NAV_CONTENT)[number];
        const SvgComponent = activeItem === navItem.id ? navItem.activeSvg : navItem.svg;

        return (
          <button
            key={navItem.id}
            type="button"
            onClick={() => handleClick(navItem.id, navItem.path)}
            className={styles.navItem({
              state: activeItem === navItem.id,
              type,
            })}
          >
            <SvgComponent style={{ width: "2.8rem", height: "2.8rem" }} />
            {navItem.label}
          </button>
        );
      })}
    </div>
  );
};

export default Nav;
