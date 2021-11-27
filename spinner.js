export const spinner = document.createElement("div");

spinner.className = "lds-roller";

document.head.insertAdjacentHTML(
  "beforeend",
  `<style id='spinner-styles'>
.lds-roller {
position: absolute;
display: inline-block;
left: calc(50% - 40px);
top: calc(50% - 40px);
}
.lds-roller div {
animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
transform-origin: 40px 40px;
}
.lds-roller div:after {
content: " ";
display: block;
position: absolute;
width: 7px;
height: 7px;
border-radius: 50%;
background: rgb(25, 98, 255);
margin: -4px 0 0 -4px;
}
.lds-roller div:nth-child(1) {
animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
top: 63px;
left: 63px;
}
.lds-roller div:nth-child(2) {
animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
top: 68px;
left: 56px;
}
.lds-roller div:nth-child(3) {
animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
top: 71px;
left: 48px;
}
.lds-roller div:nth-child(4) {
animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
top: 72px;
left: 40px;
}
.lds-roller div:nth-child(5) {
animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
top: 71px;
left: 32px;
}
.lds-roller div:nth-child(6) {
animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
top: 68px;
left: 24px;
}
.lds-roller div:nth-child(7) {
animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
top: 63px;
left: 17px;
}
.lds-roller div:nth-child(8) {
animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
top: 56px;
left: 12px;
}
@keyframes lds-roller {
0% {
transform: rotate(0deg);
}
100% {
transform: rotate(360deg);
}
}</style>`
);

spinner.insertAdjacentHTML(
  "beforeend",
  "<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>"
);
document.getElementById("widget").append(spinner);