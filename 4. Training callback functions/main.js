let showSuccessMessage = (message) => console.log(message);
let showErrorMessage = (message) => console.error(message);
const text = "Привет! Как дела! Давно мы с тобой не виделись.";

function checkTextOnErrorSymbol(
  text,
  errorSymbol,
  successCallback,
  errorCallback
) {
  for (let i = 0; i < text.length; i++) {
    if (text[i] === errorSymbol) {
      errorCallback(
        `Найден запрещенный символ "${errorSymbol}" под индексом ${i}`
      );
    }
    if (!text.includes([errorSymbol])) {
      successCallback("ok");
      return;
    }
  }
}
checkTextOnErrorSymbol(text, "о", showSuccessMessage, showErrorMessage);
