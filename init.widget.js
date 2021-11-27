import { spinner } from "./spinner.js";

(() => {
  const iframe = document.createElement("iframe"); // iframe позволяет сделать инкапсуляцию стилей и скриптов

  function resize({ target }) {
    // позволяет убрать scrollBar и задать корректную высоту
    document.head.removeChild(document.getElementById('spinner-styles'))
    document.getElementById("widget").removeChild(spinner); // после загрузки iframe удаляем spinner из DOM
    target.style.height =
      target.contentWindow.document.body.scrollHeight + "px";
  }

  iframe.onload = resize;
  iframe.style.display = "block";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.borderWidth = 0;
  iframe.src = "./widget/index.html";
  document.getElementById("widget").append(iframe);

  // Позволяет пересчитывать высоту. PS - закомментируй это слушатель,
  // и загрузи страницу в полную ширину, а потом измени ширину и
  // когда начнет сжиматься iframe, будет понятен эффект данного слушателя.
  window.addEventListener("resize", function () {
    iframe.style.height =
      iframe.contentWindow.document.body.scrollHeight + "px";
  });
})();
