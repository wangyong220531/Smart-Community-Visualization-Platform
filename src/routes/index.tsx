import { ReactNode } from "react"
import PplManage from "../pages/PplManage"
import VehicleManage from "../pages/VehicleManage"
import SensoryDevice from "../pages/SenesoryDevice"
import JointCommand from "../pages/JointCommand"
import EventAnalysis from "../pages/EventAnalysis"
import SmartPartyBuild from "../pages/SmartPartyBuild"

interface Route {
    name: string
    path: string
    element: ReactNode
}

const RouteList: Route[] = [
    {
        name: "人员管理",
        path: "pplManage",
        element: <PplManage />
    },
    {
        name: "车辆管理",
        path: "vehicleManage",
        element: <VehicleManage />
    },
    {
        name: "感知设备",
        path: "sensoryDevice",
        element: <SensoryDevice />
    },
    {
        name: "联防指挥",
        path: "jointCommand",
        element: <JointCommand />
    },
    {
        name: "事件分析",
        path: "eventAnalysis",
        element: <EventAnalysis />
    },
    {
        name:"智慧党建",
        path:"smartPartyBuild",
        element:<SmartPartyBuild/>
    }
]

export default RouteList
