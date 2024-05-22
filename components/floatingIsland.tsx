import { IconType } from "react-icons";
import styles from "./floatingIsland.module.css";
import {
  PiSubtitlesBold,
  PiAirplayBold,
  PiGridFourBold,
  PiEnvelopeBold,
} from "react-icons/pi";

interface FloatingIslandIconAndLocation {
  icon: IconType;
  locationID: string;
}
export default function FloatingIsland() {
  const icons: FloatingIslandIconAndLocation[] = [
    { icon: PiSubtitlesBold, locationID: "title" },
    { icon: PiAirplayBold, locationID: "projects" },
    { icon: PiGridFourBold, locationID: "technologies" },
    { icon: PiEnvelopeBold, locationID: "mail" },
  ];

  return (
    <div className={styles.container}>
      {icons.map((Icon, index) => (
        <Icon.icon
          key={index}
          className={styles.icon}
          onClick={() => {
            const element = document.getElementById(Icon.locationID);
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
        />
      ))}
    </div>
  );
}
