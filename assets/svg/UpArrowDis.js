import { SvgXml } from "react-native-svg";

const UpArrowDis = () => {
  let svg = `<svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.99998 0.479004C4.13027 0.479004 4.25998 0.523007 4.3657 0.611585L7.79433 3.46893C8.03662 3.67066 8.06977 4.03126 7.86748 4.27356C7.66576 4.51587 7.30575 4.54844 7.06289 4.34671L3.99369 1.78881L0.929634 4.2547C0.683915 4.45243 0.323908 4.41357 0.126191 4.16784C-0.0715275 3.92211 -0.03267 3.56265 0.213049 3.36435L3.64168 0.605299C3.74626 0.521293 3.87312 0.479004 3.99998 0.479004Z" fill="#BCBBBB"/>
  </svg>
  
`;
  return <SvgXml xml={svg} />;
};

export default UpArrowDis;