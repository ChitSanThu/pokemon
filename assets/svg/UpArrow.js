import { SvgXml } from "react-native-svg";

const UpArrow = () => {
  let svg = `<svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.99998 0.739502C4.13027 0.739502 4.25998 0.783505 4.3657 0.872083L7.79433 3.72943C8.03662 3.93116 8.06977 4.29176 7.86748 4.53406C7.66576 4.77636 7.30575 4.80894 7.06289 4.60721L3.99369 2.04931L0.929634 4.5152C0.683915 4.71293 0.323908 4.67407 0.126191 4.42834C-0.0715275 4.18261 -0.03267 3.82315 0.213049 3.62485L3.64168 0.865797C3.74626 0.781791 3.87312 0.739502 3.99998 0.739502Z" fill="#298BFD"/>
  </svg>
`;
  return <SvgXml xml={svg} />;
};

export default UpArrow;





