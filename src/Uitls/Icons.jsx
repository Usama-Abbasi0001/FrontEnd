export const Bars=()=>(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="30"
    height="30"><path fill="black" d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
)
export const X=()=>(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"  width="30"
    height="30"><path fill="black" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
)
export const Sun = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    stroke="currentColor"
    fill="none"
    viewBox="0 0 512 512"
    width="30"
    height="30"
  >
 <path fill="currentColor" d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/>
  </svg>
);
// export const Cross = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="36"
//     height="36"
//     viewBox="0 0 384 512"
//     className="text-black" // 👈 Tailwind class to make it black
//   >
//     <path
//       fill="currentColor"
//       d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
//     />
//   </svg>
// );

export const Plues = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    role="img"
    viewBox="0 0 36 36"
    width="36"
    height="36"
    className="text-black" // 👈 Tailwind class to make it black
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"
      fill="currentColor"
    ></path>
  </svg>
);
export const Minus=()=>(
  <svg xmlns="http://www.w3.org/2000/svg"  width="36"
    height="36"
    className="text-black"  viewBox="0 0 640 640"><path d="M96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320z"/></svg>
)