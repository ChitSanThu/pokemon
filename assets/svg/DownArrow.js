import { SvgXml } from "react-native-svg";

const DownArrow = () => {
  let svg = `<svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.99998 4C4.13027 4 4.25998 3.956 4.3657 3.86742L7.79433 1.01007C8.03662 0.808341 8.06977 0.447744 7.86748 0.205441C7.66576 -0.0368624 7.30575 -0.0694362 7.06289 0.132293L3.99369 2.69019L0.929634 0.224299C0.683915 0.0265708 0.323908 0.0654307 0.126191 0.311163C-0.0715275 0.556895 -0.03267 0.916349 0.213049 1.11465L3.64168 3.87371C3.74626 3.95771 3.87312 4 3.99998 4Z" fill="#298BFD"/>
  </svg>
  
`;
  return <SvgXml xml={svg} />;
};

export default DownArrow;





