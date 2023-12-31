import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import zhCN from "antd/lib/locale/zh_CN"
import { ConfigProvider } from "antd"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ConfigProvider locale={zhCN}>
            <App />
        </ConfigProvider>
    </React.StrictMode>
)
