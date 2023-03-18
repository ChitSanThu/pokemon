import { SvgXml } from "react-native-svg";

const Close = () => {
  let svg = `<svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_d_2985_173)">
  <rect x="10" y="7" width="35" height="35" rx="10" fill="#FD2929"/>
  </g>
  <path d="M30.5244 28.9269L27.5731 25.9756L24.5487 29L23 27.4513L26.0244 24.4269L23.0731 21.4756L24.4756 20.0731L27.4269 23.0244L30.4513 20L32 21.5487L28.9756 24.5731L31.9269 27.5244L30.5244 28.9269Z" fill="white"/>
  <defs>
  <filter id="filter0_d_2985_173" x="0" y="0" width="55" height="55" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feOffset dy="3"/>
  <feGaussianBlur stdDeviation="5"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2985_173"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2985_173" result="shape"/>
  </filter>
  </defs>
  </svg>
  
`;
  return <SvgXml xml={svg} />;
};

export default Close;

