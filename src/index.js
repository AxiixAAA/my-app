import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux-store";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

ReactDOM.render(
// StrictMode — инструмент для обнаружения потенциальных проблем в приложении.
// Строгий режим активирует дополнительные проверки и предупреждения для своих потомков.
  <React.StrictMode>
      {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
    <HashRouter >
{/* Provider - выступает в роле проводника, в качестве аргумента мы передаём созданный нами store, теперь этот store будет доступен в child компонетнте App */}
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
    {/* </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById("root")
);

//reportWebVitals(console. log); Эта функция запускается, когда окончательные значения для любого из показателей завершили вычисление на странице. Вы можете использовать его для записи любых результатов на консоль или для отправки на конкретную конечную точку.
reportWebVitals();
