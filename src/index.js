import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import App from "./App"
import { store } from "./redux/store"
import { Provider } from "react-redux"
import { disableReactDevTools } from "@fvilers/disable-react-devtools"

if (process.env.NODE_ENV === "production") disableReactDevTools()

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
