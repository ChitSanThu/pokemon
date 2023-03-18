
import { SvgXml } from "react-native-svg";

const Logo = () => {
  let svg = `<svg width="68" height="42" viewBox="0 0 68 42" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M45.5431 33.6425C42.8157 39.87 35.5165 42.7307 29.2399 40.0322C22.9634 37.3337 20.0862 30.0977 22.8137 23.8702C25.5411 17.6427 32.8403 14.782 39.1168 17.4805C45.3934 20.179 48.2705 27.415 45.5431 33.6425Z" fill="#252525"/>
  <path d="M45.6623 35.2914C42.3412 41.0357 35.1265 43.5106 28.8625 40.8174C22.5958 38.1231 19.4921 31.2068 21.4629 24.8776C21.5535 24.5865 21.8811 24.4456 22.1628 24.5668L45.4138 34.5725C45.6954 34.6937 45.8152 35.027 45.6623 35.2914Z" fill="#F8F8F8"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M45.1906 35.0501C41.9973 40.5501 35.08 42.917 29.0739 40.3347C23.0652 37.7514 20.085 31.1242 21.9628 25.0544L45.1906 35.0501ZM28.8625 40.8174C35.1265 43.5106 42.3412 41.0357 45.6623 35.2914C45.8152 35.027 45.6954 34.6937 45.4138 34.5725L22.1628 24.5668C21.8811 24.4456 21.5535 24.5865 21.4629 24.8776C19.4921 31.2068 22.5958 38.1231 28.8625 40.8174Z" fill="#252525"/>
  <path d="M46.8577 32.6387C48.8234 26.3117 45.7195 19.4005 39.4555 16.7073C33.1888 14.013 25.9705 16.4915 22.6512 22.2409C22.4986 22.5054 22.6185 22.8387 22.9002 22.9597L46.158 32.95C46.4397 33.071 46.7672 32.9299 46.8577 32.6387Z" fill="#FF4C41"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M46.3576 32.4622C48.2306 26.3945 45.2503 19.7723 39.2441 17.19C33.2354 14.6066 26.3146 16.977 23.1231 22.482L46.3576 32.4622ZM39.4555 16.7073C45.7195 19.4005 48.8234 26.3117 46.8577 32.6387C46.7672 32.9299 46.4397 33.071 46.158 32.95L22.9002 22.9597C22.6185 22.8387 22.4986 22.5054 22.6512 22.2409C25.9705 16.4915 33.1888 14.013 39.4555 16.7073Z" fill="#252525"/>
  <path d="M38.6431 30.6759C37.5716 33.1224 34.7041 34.2463 32.2383 33.1861C29.7725 32.126 28.6422 29.2833 29.7137 26.8368C30.7852 24.3903 33.6527 23.2664 36.1185 24.3265C38.5843 25.3867 39.7146 28.2294 38.6431 30.6759Z" fill="#252525"/>
  <path d="M37.0195 29.978C36.3377 31.5348 34.5129 32.25 32.9437 31.5754C31.3746 30.9008 30.6553 29.0918 31.3372 27.5349C32.019 25.978 33.8438 25.2628 35.413 25.9375C36.9821 26.6121 37.7014 28.4211 37.0195 29.978Z" fill="#F8F8F8"/>
  <path d="M36.2077 29.629C35.7207 30.741 34.4173 31.2519 33.2964 30.77C32.1756 30.2881 31.6619 28.996 32.1489 27.8839C32.6359 26.7719 33.9394 26.261 35.0602 26.7429C36.181 27.2248 36.6948 28.5169 36.2077 29.629Z" fill="#F8F8F8"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M33.5078 30.2873C34.36 30.6537 35.351 30.2653 35.7212 29.4198C36.0915 28.5743 35.7009 27.5919 34.8488 27.2256C33.9966 26.8592 33.0057 27.2476 32.6354 28.0931C32.2651 28.9385 32.6557 29.9209 33.5078 30.2873ZM33.2964 30.77C34.4173 31.2519 35.7207 30.741 36.2077 29.629C36.6948 28.5169 36.181 27.2248 35.0602 26.7429C33.9394 26.261 32.6359 26.7719 32.1489 27.8839C31.6619 28.996 32.1756 30.2881 33.2964 30.77Z" fill="#252525"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M28.961 19.6129C28.961 19.6129 32.408 18.6504 34.4254 17.7018C34.562 17.6376 34.6995 17.5791 34.8314 17.523C35.1412 17.3913 35.4195 17.273 35.5796 17.1252C35.9948 16.7421 34.6085 16.6063 33.981 16.5897C31.6092 16.5268 28.8572 17.4016 27.4568 19.0164C27.0748 19.4568 26.9138 19.9088 27.3373 20.0507C27.6271 20.1478 28.961 19.6129 28.961 19.6129ZM25.689 20.3046C25.4855 20.5325 25.3485 20.8831 25.5848 21.077C25.8175 21.2681 26.3251 20.8519 26.3251 20.8519C26.3251 20.8519 26.8106 20.3689 26.6099 20.1516C26.4575 19.9867 25.9372 20.0267 25.689 20.3046ZM24.7347 21.6982C24.6552 21.6022 24.6664 21.4974 24.7102 21.381C24.7865 21.1788 25.1135 20.9835 25.225 21.1688C25.2833 21.2658 25.2647 21.3529 25.223 21.4581C25.1451 21.6545 24.8697 21.8611 24.7347 21.6982Z" fill="white" fill-opacity="0.8"/>
  <path d="M4.29657 14.8528L2.93266 15.2353L2.19172 12.0265C6.25389 10.8221 8.88537 10.4898 10.0861 11.0297C11.292 11.5633 12.0556 12.5933 12.3768 14.1199C12.7163 16.4828 11.3191 18.3015 8.18524 19.5762L8.7059 23.5327L6.75777 23.8932L4.29657 14.8528ZM7.70537 16.7607C9.24691 16.0515 9.94881 15.3141 9.81107 14.5483C9.6739 14.0982 9.43187 13.8234 9.08497 13.7237C8.74379 13.6234 8.09727 13.7174 7.14543 14.0057L7.70537 16.7607Z" fill="#FDCE29"/>
  <path d="M16.5098 11.2454C17.8365 11.0996 19.0192 11.4261 20.0579 12.2249C21.096 13.0181 21.6857 14.0472 21.8272 15.3121C21.9693 16.5828 21.6219 17.7206 20.7849 18.7255C19.9473 19.7248 18.8652 20.2974 17.5385 20.4432C16.2118 20.589 15.0294 20.2653 13.9913 19.4721C12.9526 18.6733 12.3622 17.6385 12.2201 16.3679C12.0786 15.103 12.4267 13.9708 13.2643 12.9715C14.1013 11.9666 15.1831 11.3912 16.5098 11.2454ZM19.9946 14.4541C19.9672 14.727 19.8589 14.9743 19.6695 15.1961C19.4083 15.5004 19.0747 15.6749 18.6687 15.7195C18.2627 15.7642 17.8989 15.6692 17.5775 15.4346C17.2611 15.1938 17.0816 14.8833 17.0391 14.5033C16.9966 14.1232 17.1034 13.7842 17.3595 13.4862C17.6214 13.1875 17.9553 13.0159 18.3613 12.9713C18.4414 12.9625 18.5163 12.96 18.5862 12.9638C18.2539 12.8395 17.8962 12.7984 17.5131 12.8405C16.8783 12.9103 16.3595 13.1884 15.9566 13.6748C15.5588 14.1549 15.3941 14.7013 15.4626 15.3139C15.5311 15.9265 15.8125 16.4239 16.3068 16.806C16.8068 17.1874 17.3741 17.3433 18.0089 17.2735C18.6436 17.2038 19.1599 16.9288 19.5578 16.4487C19.9613 15.9679 20.1288 15.4213 20.0603 14.8086C20.0464 14.6838 20.0245 14.5657 19.9946 14.4541Z" fill="#FDCE29"/>
  <path d="M20.4335 11.5463L20.2555 10.4203L23.7296 9.41835L24.2941 13.4562L27.2055 8.89855L29.9614 10.792L26.7126 15.4385L32.5163 18.3407L32.5807 20.8573L25.5848 17.1558L26.075 21.3052L23.7132 21.849L21.9327 11.2093L20.4335 11.5463Z" fill="#FDCE29"/>
  <path d="M38.5157 13.4437L40.4102 15.0098C39.5019 16.6715 38.056 17.6142 36.0723 17.8379C32.9157 18.1848 31.1613 16.9392 30.8091 14.1011C30.4843 10.9901 31.7284 9.27718 34.5412 8.96231C36.7816 8.75629 38.2098 9.56976 38.8258 11.4027L35.1235 15.0998C36.7964 15.0997 37.9272 14.5477 38.5157 13.4437ZM33.6702 14.2949L36.343 11.7186C35.3653 11.0509 34.4586 11.0701 33.623 11.7764C32.8909 12.632 32.9066 13.4715 33.6702 14.2949Z" fill="#FDCE29"/>
  <path d="M39.8159 17.771L40.0653 8.35523L42.4204 7.90692L43.5186 12.2909L44.1218 6.81556L46.4303 6.26041L49.9763 19.4882L46.5767 19.4484L44.8986 12.6733L43.8694 17.1361L42.5977 13.6066L42.1471 18.1178L39.8159 17.771Z" fill="#FDCE29"/>
  <path d="M52.6393 7.27485C53.966 7.12905 55.1487 7.45558 56.1874 8.25443C57.2255 9.04761 57.8153 10.0767 57.9568 11.3416C58.0989 12.6122 57.7514 13.75 56.9145 14.755C56.0769 15.7543 54.9947 16.3269 53.668 16.4727C52.3413 16.6185 51.159 16.2948 50.1209 15.5016C49.0822 14.7028 48.4918 13.668 48.3497 12.3974C48.2082 11.1325 48.5562 10.0003 49.3938 9.00102C50.2308 7.99604 51.3126 7.42065 52.6393 7.27485ZM56.1241 10.4836C56.0968 10.7565 55.9884 11.0038 55.799 11.2256C55.5378 11.5299 55.2042 11.7044 54.7982 11.749C54.3922 11.7936 54.0285 11.6987 53.707 11.4641C53.3906 11.2233 53.2112 10.9128 53.1687 10.5328C53.1262 10.1527 53.233 9.81367 53.4891 9.51565C53.7509 9.21699 54.0848 9.04536 54.4908 9.00074C54.5709 8.99194 54.6459 8.98944 54.7158 8.99324C54.3835 8.86898 54.0258 8.8279 53.6426 8.87001C53.0079 8.93977 52.489 9.21786 52.0861 9.70428C51.6883 10.1844 51.5237 10.7308 51.5922 11.3434C51.6607 11.956 51.9421 12.4534 52.4363 12.8355C52.9363 13.2169 53.5037 13.3728 54.1384 13.303C54.7732 13.2332 55.2895 12.9583 55.6873 12.4782C56.0909 11.9974 56.2584 11.4507 56.1899 10.8381C56.1759 10.7133 56.154 10.5952 56.1241 10.4836Z" fill="#FDCE29"/>
  <path d="M58.2561 16.3474L57.4923 7.49949L56.8109 7.53993L56.6472 6.07644L59.6027 5.87223L62.3904 11.3884L62.1389 5.02503L64.4083 4.50863L65.0485 17.4528L62.5886 17.2753L59.9543 11.8112L60.4596 16.3292L58.2561 16.3474Z" fill="#FDCE29"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.75781 23.8932L4.29661 14.8528L2.9327 15.2353L2.19176 12.0264C6.25394 10.8221 8.88541 10.4898 10.0862 11.0297C10.804 11.3473 11.3651 11.8408 11.7694 12.5103C12.0443 12.9655 12.2468 13.502 12.3768 14.1199C12.3929 14.2317 12.4051 14.3424 12.4134 14.4519C12.4544 14.3313 12.5011 14.2124 12.5534 14.0949C12.5553 14.0907 12.5572 14.0864 12.5591 14.0821C12.7329 13.6953 12.968 13.3251 13.2643 12.9715C13.3392 12.8816 13.416 12.7951 13.4948 12.7121C14.2968 11.867 15.3018 11.3781 16.5098 11.2453C17.2668 11.1621 17.977 11.2327 18.6402 11.4571C18.7436 11.4921 18.8458 11.5308 18.9469 11.5732C18.9951 11.5934 19.043 11.6145 19.0906 11.6364C19.0926 11.6373 19.0946 11.6383 19.0967 11.6392C19.1566 11.6669 19.2162 11.6959 19.2753 11.7263C19.5447 11.8646 19.8056 12.0308 20.0579 12.2249C20.299 12.4091 20.5159 12.606 20.7086 12.8156C20.7153 12.823 20.7221 12.8304 20.7288 12.8378C20.7639 12.8764 20.7981 12.9155 20.8315 12.9549C21.3939 13.6194 21.7258 14.4051 21.8273 15.3121C21.9176 16.1198 21.8101 16.8738 21.5048 17.5742C21.3299 17.9756 21.0899 18.3594 20.785 18.7255C19.9474 19.7248 18.8652 20.2974 17.5385 20.4432C16.2118 20.589 15.0295 20.2653 13.9914 19.4721C13.477 19.0765 13.0726 18.6231 12.7781 18.1118C12.4779 17.5906 12.2919 17.0093 12.2202 16.3679C12.2116 16.291 12.2048 16.2146 12.1998 16.1386C12.1707 16.2202 12.1387 16.3009 12.104 16.3807C11.8747 16.9075 11.5231 17.3961 11.0492 17.8463C10.3561 18.5049 9.40149 19.0815 8.18528 19.5762L8.70594 23.5327L6.75781 23.8932ZM9.08501 13.7237C8.74383 13.6233 8.09732 13.7174 7.14547 14.0057L7.70541 16.7607C8.2633 16.504 8.71122 16.2437 9.04917 15.9796C9.64503 15.514 9.89901 15.0369 9.81111 14.5482C9.67394 14.0982 9.43191 13.8233 9.08501 13.7237ZM9.78659 20.4571L10.347 24.7153L5.69059 25.577L3.26323 16.6609L1.84286 17.0592L0.448 11.0185L1.76975 10.6266C3.83815 10.0133 5.59753 9.60496 7.02579 9.42463C8.38613 9.25287 9.69472 9.25135 10.6898 9.69704C11.5625 10.084 12.2526 10.6542 12.7726 11.3681C13.7585 10.4749 14.9646 9.94517 16.3474 9.7932C17.1622 9.70366 17.9462 9.7554 18.6899 9.94752L18.5996 9.37627L24.9545 7.54348L25.201 9.30665L26.7826 6.83078L30.4958 9.38194C31.4347 8.25518 32.8102 7.68573 34.3759 7.51047L34.3905 7.50884L34.4051 7.50749C35.7194 7.38664 36.9678 7.54814 38.026 8.1509C38.2256 8.26454 38.4126 8.39058 38.5874 8.52804L38.6241 7.14184L42.6895 6.36796L42.77 5.63724L47.4834 4.50371L48.3965 7.90953C49.4638 6.70513 50.8478 6.00173 52.477 5.82269C53.4192 5.71913 54.3202 5.80453 55.1654 6.07745L55.0141 4.72467L60.4795 4.34704L60.6516 4.68764L60.6194 3.87177L65.7933 2.69442L66.6012 19.0297L61.6289 18.6708L61.2014 17.7841L56.905 17.8197L56.819 16.8241C55.9535 17.4327 54.9495 17.8018 53.8305 17.9248C52.8359 18.0341 51.8871 17.9339 51.001 17.6254L51.8981 20.9718L45.4186 20.8959L44.9499 19.0034L44.1805 22.34L43.2506 19.7592L38.3094 19.0242L38.3159 18.7761C37.679 19.034 36.9849 19.2054 36.239 19.2896L36.2347 19.29C35.464 19.3747 34.7174 19.381 34.0139 19.2859L34.1173 23.326L27.3753 19.7589L27.6912 22.433L22.5173 23.6243L21.8643 19.7225C20.7846 20.98 19.3709 21.7118 17.701 21.8953C16.0034 22.0819 14.439 21.6582 13.0927 20.6295L13.089 20.6267C12.5453 20.2085 12.0909 19.7326 11.7299 19.2038C11.1685 19.676 10.5151 20.0911 9.78659 20.4571ZM23.7132 21.849L26.075 21.3052L25.5849 17.1558L32.5807 20.8573L32.5163 18.3407L26.7127 15.4384L29.9615 10.792L27.2055 8.89852L24.2941 13.4562L23.7296 9.41833L20.2555 10.4203L20.4336 11.5463L21.9328 11.2092L23.7132 21.849ZM29.3429 14.2404L28.8885 14.8904L29.5147 15.2035C29.4419 14.9048 29.3866 14.596 29.3473 14.2793L29.3455 14.2654L29.3441 14.2514C29.3437 14.2477 29.3433 14.2441 29.3429 14.2404ZM31.4804 16.1865C31.5414 16.2855 31.6062 16.3801 31.6748 16.4704C31.6981 16.5011 31.7218 16.5313 31.746 16.561C32.0693 16.9583 32.4708 17.2668 32.9504 17.4865C33.2597 17.6283 33.6016 17.7331 33.9759 17.801C34.5879 17.9119 35.2867 17.9242 36.0723 17.8379C36.9368 17.7404 37.6992 17.5063 38.3594 17.1358C38.9413 16.8091 39.4439 16.3764 39.8672 15.8376L39.816 17.771L42.1471 18.1177L42.5977 13.6066L43.8695 17.1361L44.8986 12.6733L46.5768 19.4483L49.9764 19.4882L46.4303 6.26038L44.1219 6.81553L43.5186 12.2909L42.4205 7.90689L40.0654 8.3552L39.9003 14.5882L38.5158 13.4436C38.4959 13.481 38.4754 13.5176 38.4543 13.5537C38.2647 13.8771 38.0253 14.1498 37.736 14.3718C37.1035 14.8571 36.2327 15.0997 35.1235 15.0998L38.8259 11.4027C38.7421 11.1534 38.6433 10.9231 38.5295 10.7115C37.8064 9.36736 36.477 8.78428 34.5413 8.96228C33.2864 9.10275 32.3437 9.52148 31.7133 10.2185C31.3919 10.5738 31.1517 11.0015 30.9926 11.5015C30.9338 11.6864 30.886 11.8812 30.8494 12.086C30.7439 12.6756 30.7305 13.3473 30.8092 14.1011C30.9124 14.9331 31.1361 15.6282 31.4804 16.1865ZM34.7158 11.2497C35.2344 11.1756 35.7768 11.3319 36.3431 11.7186L33.6702 14.2948C33.2151 13.8041 33.0256 13.3075 33.1019 12.8053C33.1536 12.4649 33.3273 12.122 33.623 11.7764C33.9747 11.4791 34.339 11.3036 34.7158 11.2497ZM48.884 9.72831C48.4196 10.5403 48.2415 11.43 48.3497 12.3974C48.4918 13.668 49.0822 14.7027 50.1209 15.5016C50.2463 15.5973 50.3737 15.6862 50.5032 15.7683C51.4466 16.3661 52.5016 16.6008 53.6681 16.4727C54.8664 16.341 55.8652 15.8611 56.6644 15.0332C56.7501 14.9444 56.8335 14.8517 56.9145 14.755C57.4669 14.0918 57.806 13.3707 57.932 12.5917L58.2562 16.3474L60.4597 16.3292L59.9544 11.8111L62.5887 17.2752L65.0485 17.4528L64.4083 4.5086L62.139 5.025L62.3905 11.3884L59.6027 5.8722L56.6472 6.07641L56.8109 7.5399L57.4924 7.49946L57.7386 10.3523C57.5685 9.85415 57.312 9.40145 56.9693 8.99415C56.9445 8.96469 56.9192 8.93547 56.8935 8.90649C56.6873 8.67382 56.4519 8.45646 56.1875 8.2544C56.1491 8.22488 56.1105 8.19601 56.0718 8.16779C55.8383 7.99783 55.5977 7.85125 55.35 7.72804C55.309 7.70762 55.2677 7.68783 55.2262 7.66869C55.2242 7.66775 55.2222 7.66682 55.2201 7.66589C55.0725 7.59799 54.9224 7.53822 54.7698 7.4866C54.1065 7.26222 53.3964 7.19163 52.6394 7.27482C51.3127 7.42062 50.2309 7.99601 49.3939 9.00099C49.1968 9.23608 49.0269 9.47852 48.884 9.72831ZM51.6869 10.4039C51.5866 10.6975 51.555 11.0107 51.5922 11.3434C51.6607 11.956 51.9421 12.4533 52.4364 12.8354C52.9364 13.2169 53.5037 13.3727 54.1385 13.303C54.2869 13.2867 54.4289 13.2591 54.5643 13.2204C54.698 13.1822 54.8253 13.133 54.9463 13.073C55.2273 12.9335 55.4743 12.7353 55.6874 12.4782C55.932 12.1867 56.0899 11.8711 56.161 11.5312C56.1609 11.5317 56.1611 11.5308 56.161 11.5312C56.207 11.3108 56.2168 11.0789 56.1899 10.8381C56.176 10.7133 56.1541 10.5951 56.1242 10.4836C56.1112 10.6134 56.0798 10.7374 56.0302 10.8557C55.9754 10.986 55.8984 11.1093 55.7991 11.2256C55.5391 11.5285 55.2073 11.7028 54.8038 11.7484C54.802 11.7486 54.8001 11.7488 54.7983 11.749C54.7967 11.7492 54.7952 11.7493 54.7937 11.7495C54.6361 11.7664 54.4849 11.7623 54.3401 11.7371C54.1135 11.6977 53.9025 11.6067 53.7071 11.4641C53.4306 11.2537 53.2588 10.9901 53.1914 10.6734C53.1858 10.6471 53.1809 10.6205 53.1768 10.5934C53.1768 10.5933 53.1768 10.5935 53.1768 10.5934C53.1737 10.5735 53.171 10.553 53.1687 10.5327C53.1262 10.1527 53.233 9.81364 53.4891 9.51562C53.5528 9.44296 53.6208 9.37781 53.693 9.32019C53.9177 9.14097 54.1837 9.03447 54.4909 9.00071C54.5295 8.99647 54.5668 8.9937 54.603 8.99238C54.642 8.99097 54.6796 8.99124 54.7158 8.99322C54.6392 8.96456 54.5612 8.94034 54.4819 8.92053C54.4443 8.91113 54.4063 8.90272 54.368 8.89531C54.1373 8.85063 53.8955 8.84219 53.6427 8.86998C53.3932 8.8974 53.1616 8.957 52.948 9.04879C52.9455 9.04982 52.9431 9.05086 52.9407 9.0519C52.6138 9.19372 52.329 9.41117 52.0862 9.70425C51.9044 9.92363 51.7713 10.1568 51.6869 10.4039ZM17.0618 14.6439C17.0563 14.6176 17.0514 14.591 17.0472 14.5639C17.0472 14.5638 17.0472 14.5641 17.0472 14.5639C17.0442 14.544 17.0415 14.5236 17.0392 14.5033C16.9967 14.1232 17.1035 13.7842 17.3596 13.4861C17.4233 13.4135 17.4913 13.3483 17.5635 13.2907C17.7882 13.1115 18.0541 13.005 18.3613 12.9712C18.3999 12.967 18.4373 12.9642 18.4735 12.9629C18.5124 12.9615 18.55 12.9618 18.5863 12.9637C18.5097 12.9351 18.4317 12.9109 18.3524 12.891C18.3147 12.8816 18.2768 12.8732 18.2385 12.8658C18.0078 12.8212 17.766 12.8127 17.5131 12.8405C17.2636 12.8679 17.0321 12.9275 16.8184 13.0193C16.816 13.0203 16.8136 13.0214 16.8112 13.0224C16.4842 13.1642 16.1994 13.3817 15.9566 13.6748C15.7749 13.8941 15.6418 14.1274 15.5573 14.3744C15.457 14.668 15.4255 14.9812 15.4627 15.3139C15.5312 15.9265 15.8126 16.4239 16.3068 16.8059C16.8068 17.1874 17.3742 17.3432 18.0089 17.2735C18.1574 17.2572 18.2993 17.2296 18.4348 17.1909C18.5684 17.1527 18.6958 17.1035 18.8168 17.0435C19.0978 16.904 19.3448 16.7058 19.5578 16.4487C19.8024 16.1573 19.9603 15.8416 20.0315 15.5018C20.0314 15.5022 20.0316 15.5013 20.0315 15.5018C20.0775 15.2813 20.0873 15.0494 20.0604 14.8086C20.0464 14.6838 20.0245 14.5656 19.9946 14.4541C19.9816 14.5839 19.9503 14.7079 19.9006 14.8262C19.8458 14.9565 19.7688 15.0798 19.6695 15.1961C19.4095 15.499 19.0778 15.6733 18.6742 15.7189C18.6724 15.7191 18.6706 15.7193 18.6687 15.7195C18.6672 15.7197 18.6656 15.7198 18.6641 15.72C18.5065 15.7369 18.3554 15.7328 18.2106 15.7076C17.9839 15.6682 17.7729 15.5772 17.5775 15.4346M17.2084 15.6507C17.0273 15.5096 16.9507 15.3688 16.9266 15.153C16.9042 14.9527 16.9401 14.8056 17.0618 14.6439" fill="#225FA8"/>
  </svg>
  
`;
  return <SvgXml xml={svg} />;
};

export default Logo;