import "../styles/picture.scss";

const Picture = (element) => {
  const picture = document.createElement("section");
  picture.classList.add("picture");
  picture.innerHTML = `
<svg class = "picture__head" xmlns="http://www.w3.org/2000/svg" width="101" height="101" viewBox="0 0 101 101" fill="none">
<circle cx="50.5" cy="50.5" r="48" fill="white" stroke="#909090" stroke-width="5"/>
</svg>
<svg class = "picture__body" xmlns="http://www.w3.org/2000/svg" width="5" height="131" viewBox="0 0 5 131" fill="none">
<rect width="5" height="131" fill="#909090"/>
</svg>
<svg class = "picture__arm_left" xmlns="http://www.w3.org/2000/svg" width="68" height="81" viewBox="0 0 68 81" fill="none">
  <rect x="63.7964" width="5" height="100" transform="rotate(39.64 63.7964 0)" fill="#909090"/>
</svg>
<svg class = "picture__arm_rigth" xmlns="http://www.w3.org/2000/svg" width="68" height="81" viewBox="0 0 68 81" fill="none">
<rect y="3.18951" width="5" height="100" transform="rotate(-39.6353 0 3.18951)" fill="#909090"/>
</svg>
<svg class = "picture__leg_left" xmlns="http://www.w3.org/2000/svg" width="68" height="81" viewBox="0 0 68 81" fill="none">
  <rect x="63.7964" width="5" height="100" transform="rotate(39.64 63.7964 0)" fill="#909090"/>
</svg>
<svg class = "picture__leg_rigth" xmlns="http://www.w3.org/2000/svg" width="68" height="81" viewBox="0 0 68 81" fill="none">
  <rect y="3.18951" width="5" height="100" transform="rotate(-39.6353 0 3.18951)" fill="#909090"/>
</svg>

`;
  element.append(picture);
};

export { Picture };
