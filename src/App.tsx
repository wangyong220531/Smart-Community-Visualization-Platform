import { ReactNode } from "react"
import { BrowserRouter, Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom"
import "./App.css"
import RouteList from "./routes/index"

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={RouteList[0].element}></Route>
                    {RouteList.map(item => (
                        <Route path={item.path} key={item.path} element={item.element}></Route>
                    ))}
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
