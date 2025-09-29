import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { HashRouter } from "react-router-dom"
import App from "./App"
import GlobalStyles from "styles/GlobalStyles"
import { store } from "./store/store"

const container = document.getElementById("root")

if (!container) {
  throw new Error("Root element with ID 'root' was not found…")
}

createRoot(container).render(
  <Provider store={store}>
    <GlobalStyles />
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
)
