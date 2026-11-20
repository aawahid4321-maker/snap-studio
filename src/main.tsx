import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Force a full page reload on hot updates so stale Fast Refresh state
// (e.g. removed module-level constants) can never linger between edits.
if (import.meta.hot) {
  import.meta.hot.accept(() => {
    window.location.reload()
  })
}
