import Styles from "./index.module.less"
import HeaderCenter from "../../assets/HeaderCenter.png"
import LeftNavItem from "../../assets/BlueLeft.png"
import RightNavItem from "../../assets/BlueRight.png"
import OrangeLeft from "../../assets/OrangeLeft.png"
import OrangeRight from "../../assets/OrangeRight.png"
import Shadow from "../../assets/Shadow.png"
import { useEffect, useState } from "react"
import RouteList from "../../routes"
import { useLocation, useNavigate } from "react-router-dom"

interface NavItem {
    key: number
    content: string
    path: string
}

const leftList: NavItem[] = [
    {
        key: 0,
        content: "人员管理",
        path: "/pplManage"
    },
    {
        key: 1,
        content: "车辆管理",
        path: "/vehicleManage"
    },
    {
        key: 2,
        content: "感知设备",
        path: "/sensoryDevice"
    }
]

const rightList: NavItem[] = [
    {
        key: 3,
        content: "联防指挥",
        path: "/jointCommand"
    },
    {
        key: 4,
        content: "事件分析",
        path: "/eventAnalysis"
    },
    {
        key: 5,
        content: "智慧党建",
        path: "/smartPartyBuild"
    }
]

const TopNav: React.FC = () => {
    const location = useLocation()
    useEffect(() => {
        const navKey = (leftList.find(e => e.path === location.pathname) || rightList.find(e => e.path === location.pathname))?.key
        
        navKey && setNavKey(navKey)
    }, [])
    const LeftList: React.FC = () => {
        return (
            <>
                {leftList.map(e => {
                    return (
                        <>
                            <div key={e.key} className={Styles["item"]} onClick={() => navClick(e)}>
                                {navKey === e.key ? (
                                    <>
                                        <div className={Styles["content-actived"]}>{e.content}</div>
                                        <img src={OrangeLeft} alt="" />
                                    </>
                                ) : (
                                    <>
                                        <div className={Styles["content"]}>{e.content}</div>
                                        <img src={LeftNavItem} alt="" />
                                    </>
                                )}
                            </div>
                        </>
                    )
                })}
            </>
        )
    }

    const RightList: React.FC = () => {
        return (
            <>
                {rightList.map(e => {
                    return (
                        <>
                            <div className={Styles["item"]} onClick={() => navClick(e)} key={e.key}>
                                {navKey === e.key ? (
                                    <>
                                        <div className={Styles["content-actived"]}>{e.content}</div>
                                        <img src={OrangeRight} alt="" />
                                    </>
                                ) : (
                                    <>
                                        <div className={Styles["content"]}>{e.content}</div>
                                        <img src={RightNavItem} alt="" />
                                    </>
                                )}
                            </div>
                        </>
                    )
                })}
            </>
        )
    }
    const [navKey, setNavKey] = useState(0)

    const navigate = useNavigate()
    const navClick = (e: NavItem) => {
        const item = RouteList.find(r => r.name === e.content)
        navigate(`/${item?.path}`, { replace: true })
    }
    return (
        <>
            <div className={Styles["home"]}>
                <img className={Styles["bgImg"]} src={Shadow} alt="" />
                <div className={Styles["header"]}>
                    <div className={Styles["center"]}>
                        <div className={Styles["content"]}>智慧社区可视化平台</div>
                        <img src={HeaderCenter} alt="" />
                    </div>
                    <div className={Styles["box"]}>
                        <div className={Styles["left"]}>
                            <LeftList />
                        </div>
                        <div className={Styles["right"]}>
                            <RightList />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopNav
