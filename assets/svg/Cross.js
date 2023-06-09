
import { SvgXml } from "react-native-svg";

const Cross = () => {
  let svg = `<svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.68831 8.67457L4.06494 6.05119L1.37662 8.7395L0 7.36288L2.68831 4.67457L0.0649348 2.05119L1.31169 0.804437L3.93506 3.42781L6.62338 0.739502L8 2.11613L5.31169 4.80444L7.93506 7.42781L6.68831 8.67457Z" fill="#FD2929"/>
  </svg>
`;
  return <SvgXml xml={svg} />;
};

export default Cross;