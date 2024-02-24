import { Locale } from "@/i18n.config";
import NavBar from "./navbar";
 
interface StickyNavbarProps {
  lang: Locale;
}

const StickyNavbar = ({lang }: StickyNavbarProps) => {
  return (
    <NavBar lang={lang} />
  );
}

export default StickyNavbar;