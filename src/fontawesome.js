import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAt,
  faCode,
  faHighlighter,
  faMapMarkerAlt,
  faMobileAlt
} from "@fortawesome/free-solid-svg-icons";

const solid = [faCode, faHighlighter, faAt, faMapMarkerAlt, faMobileAlt];
const brands = [faLinkedinIn, faGithub, faInstagram];

library.add(...solid, ...brands);
