import { Left, Right } from "../../components/Area"
import Block from "../../components/Block"
import TopNav from "../../components/TopNav"
import WholeCard from "../../assets/WholeCard.png"
import Styles from "./index.module.less"
import OwnerCar from "../../assets/VehicleManage/OwnerCar.png"
import TempCar from "../../assets/VehicleManage/TempCar.png"
import SpecialtyCar from "../../assets/VehicleManage/SpecialtyCar.png"
import { LineOption, Pie, PieOption } from "gskj-components"
import LineWrapper from "../../components/LineWrapper"
import { useState } from "react"
import CardHead from "../../assets/CardHead.png"
import CardMid from "../../assets/cardMid.png"
import CardBottom from "../../assets/cardBottom.png"
import Bujiadi from "../../assets/VehicleManage/Bujiadi.webp"
import Asidunmartin from "../../assets/VehicleManage/Asidunmartin.webp"
import Falari from "../../assets/VehicleManage/Falari.webp"
import Lamborginee from "../../assets/VehicleManage/Lamborginee.webp"
import Motor from "../../assets/VehicleManage/Motor.png"
import NoMotor from "../../assets/VehicleManage/NoMotor.png"
import { Image } from "antd"

function c(...classNameList: (string | undefined | null | boolean)[]) {
    return (classNameList.filter(item => typeof item === "string") as string[]).map(className => (className.startsWith("_") ? className.slice(1) : Styles[className])).join(" ")
}

interface IO {
    key: number
    title: string
    sub: string
    data: string
}

interface Vehicle {
    imgSrc: string
    title: string
    count: number
}

interface Tab {
    key: number
    content: string
}

interface Tip {
    key: number
    content: string
}

interface Car {
    imgSrc: string
    no: string
    address: string
    time: string
    flag: boolean
}

const VehicleManage: React.FC = () => {
    const IOList: IO[] = [
        {
            key: 0,
            title: "机动车出入车次",
            sub: "16.8",
            data: "255.325"
        },
        {
            key: 1,
            title: "非机动车出入车次",
            sub: "14.3",
            data: "025.170"
        }
    ]

    const VehicleList: Vehicle[] = [
        {
            imgSrc: OwnerCar,
            title: "业主车辆",
            count: 236
        },
        {
            imgSrc: TempCar,
            title: "临时车辆",
            count: 39
        },
        {
            imgSrc: SpecialtyCar,
            title: "特种车辆",
            count: 2
        }
    ]

    const tabList: Tab[] = [
        {
            key: 0,
            content: "车辆出入趋势"
        },
        {
            key: 1,
            content: "非机动车辆流量"
        }
    ]

    const [tabClicked, setTabClicked] = useState(0)

    const tabClick = (e: number) => {
        setTabClicked(e)
    }

    const carList: Car[] = [
        {
            imgSrc: Bujiadi,
            no: "苏H·98U23",
            address: "洪福小区南一门出口",
            time: "2023-03-27 17:23:55",
            flag: false
        },
        {
            imgSrc: Asidunmartin,
            no: "苏H·D08663",
            address: "洪福小区南一门入口",
            time: "2023-03-30 12:33:43",
            flag: true
        },
        {
            imgSrc: Falari,
            no: "苏H·D15651",
            address: "金满华府东一门入口",
            time: "2023-03-25 14:55:23",
            flag: true
        },
        {
            imgSrc: Lamborginee,
            no: "苏H·D85673",
            address: "樱花小区北门",
            time: "2023-03-24 15:24:17",
            flag: false
        }
    ]

    const lineOption: LineOption = {
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "cross",
                label: {
                    backgroundColor: "#6a7985"
                }
            }
        },
        xAxis: {
            type: "category",
            boundaryGap: false,
            data: [],
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                show: true,
                symbolOffset: [0, 12],
                lineStyle: {
                    color: "#e0e6fe"
                }
            }
        },
        yAxis: {
            type: "value",
            splitLine: {
                show: true
            },
            axisLine: {
                show: true,
                symbolOffset: [0, 12],
                lineStyle: {
                    color: "#e0e6fe"
                }
            }
        },
        series: [
            {
                type: "line",
                smooth: true,
                symbol: "none",
                lineStyle: {
                    color: "#18d5ea"
                },
                areaStyle: {
                    color: {
                        type: "linear",
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: "#18d5ea"
                            },
                            {
                                offset: 1,
                                color: "#18d5ea00"
                            }
                        ]
                    }
                },
                emphasis: {
                    focus: "series"
                },
                data: [30, 100, 40, 180, 50, 230, 20]
            },
            {
                type: "line",
                smooth: true,
                symbol: "none",
                lineStyle: {
                    color: "#3e9dde"
                },
                areaStyle: {
                    color: {
                        type: "linear",
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: "#6abdfa"
                            },
                            {
                                offset: 1,
                                color: "#6abefa00"
                            }
                        ]
                    }
                },
                emphasis: {
                    focus: "series"
                },
                data: [220, 20, 150, 40, 290, 60, 310]
            }
        ]
    }

    const tips: Tip[] = [
        {
            key: 0,
            content: "自行车"
        },
        {
            key: 1,
            content: "电瓶车"
        },
        {
            key: 2,
            content: "三轮车"
        },
        {
            key: 3,
            content: "摩托车"
        }
    ]

    const pieOption: PieOption = {
        tooltip: {
            trigger: "item",
            backgroundColor: "transparent",
            textStyle: {
                color: "#fff",
                fontSize: 12
            }
        },
        series: [
            {
                type: "pie",
                radius: ["48%", "70%"],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: "center"
                },
                color: ["#00bd8d", "#ffbe00", "#01b4d2", "#d90051"],
                emphasis: {
                    label: {
                        show: false,
                        fontSize: 10
                    }
                },
                data: [
                    { value: 1048, name: "自行车" },
                    { value: 735, name: "电瓶车" },
                    { value: 580, name: "三轮车" },
                    { value: 484, name: "摩托车" }
                ]
            }
        ]
    }

    const tableHead: TableHead[] = [
        {
            key: 0,
            content: "序号"
        },
        {
            key: 1,
            content: "地点"
        },
        {
            key: 2,
            content: "车牌"
        },
        {
            key: 3,
            content: "时间"
        }
    ]

    const tableData: TableData[] = [
        {
            key: 0,
            column: ["0", "南大门", "苏H602DK", "09:55"]
        },
        {
            key: 1,
            column: ["1", "东大门", "苏H852LD", "09:45"]
        },
        {
            key: 2,
            column: ["2", "西大门", "苏H89890", "05:48"]
        },
        {
            key: 3,
            column: ["3", "北大门", "苏H67D56", "12:30"]
        },
        {
            key: 4,
            column: ["4", "南大门", "苏H64312", "13:25"]
        },
        {
            key: 5,
            column: ["5", "东大门", "苏H92812", "11:25"]
        },
        {
            key: 6,
            column: ["6", "西大门", "苏H85272", "13:47"]
        },
        {
            key: 7,
            column: ["7", "北大门", "苏H46232", "06:25"]
        }
    ]

    const warningHead: TableHead[] = [
        {
            key: 0,
            content: "序号"
        },
        {
            key: 1,
            content: "地点"
        },
        {
            key: 2,
            content: "预警事件"
        },
        {
            key: 3,
            content: "时间"
        }
    ]

    const wariningData: TableData[] = [
        {
            key: 0,
            column: ["0", "南大门", "陌生车辆", "09:55"]
        },
        {
            key: 1,
            column: ["1", "东大门", "陌生车辆", "08:50"]
        },
        {
            key: 2,
            column: ["2", "西大门", "陌生车辆", "08:43"]
        },
        {
            key: 3,
            column: ["3", "北大门", "陌生车辆", "10:50"]
        },
        {
            key: 4,
            column: ["4", "南大门", "陌生车辆", "16:57"]
        },
        {
            key: 5,
            column: ["5", "东大门", "陌生车辆", "15:23"]
        },
        {
            key: 6,
            column: ["6", "西大门", "陌生车辆", "22:33"]
        },
        {
            key: 7,
            column: ["7", "北大门", "陌生车辆", "23:00"]
        }
    ]

    return (
        <>
            <TopNav />
            <Left>
                <Block title>
                    <div className={Styles["container"]}>
                        <div className={Styles["wrapper"]}>
                            <div className={Styles["title"]}>实时出入车次</div>
                            <img src={WholeCard} alt="" />
                            <div className={Styles["vehicle-ionum"]}>
                                {IOList.map(e => {
                                    return (
                                        <>
                                            <div className={e.key === 0 ? Styles["left"] : Styles["right"]}>
                                                <img src={e.key === 0 ? Motor : NoMotor} alt="" />
                                                <div className={c("info")}>
                                                    <div className={c("data")}>{e.data}</div>
                                                    <div className={c("sub-title")}>{e.title}</div>
                                                    <div className={c("sub")}>
                                                        <div className={c("text")}>同比+ </div>
                                                        <div className={c("detail")}>{e.sub}%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={Styles["wrapper"]}>
                            <div className={Styles["title"]}>车辆统计</div>
                            <img className={Styles["second-img"]} src={WholeCard} alt="" />
                            <div className={Styles["vehicle-manage"]}>
                                <div className={Styles["parking-search"]}>车位查询</div>
                                <div className={Styles["category"]}>
                                    {VehicleList.map(item => {
                                        return (
                                            <>
                                                <div className={Styles["box"]}>
                                                    <img src={item.imgSrc} alt="" />
                                                    <div className={Styles["car-title"]}>{item.title}</div>
                                                    {item.title === "业主车辆" && (
                                                        <div className={Styles["owner"]}>
                                                            {item.count}
                                                            <span style={{ fontSize: "12px", marginLeft: "2px" }}>辆</span>
                                                        </div>
                                                    )}
                                                    {item.title === "临时车辆" && (
                                                        <div className={Styles["temp"]}>
                                                            {item.count}
                                                            <span style={{ fontSize: "12px", marginLeft: "2px" }}>辆</span>
                                                        </div>
                                                    )}
                                                    {item.title === "特种车辆" && (
                                                        <div className={Styles["specialty"]}>
                                                            {item.count}
                                                            <span style={{ fontSize: "12px", marginLeft: "2px" }}>辆</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className={Styles["wrapper"]}>
                            <div className={Styles["title"]}>车辆出入趋势</div>
                            <img className={Styles["third-img"]} src={WholeCard} alt="" />
                            <div className={Styles["io-trends"]}>
                                <div className={Styles["tabs"]}>
                                    {tabList.map(item => {
                                        return (
                                            <>
                                                <div key={item.key} className={tabClicked === item.key ? c("item", "actived-tab") : c("item")} onClick={() => tabClick(item.key)}>
                                                    {item.content}
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                                <div className={Styles["intro"]}>
                                    <div className={Styles["box"]}>
                                        <div className={Styles["motor"]}></div>
                                        <div className={Styles["text"]}>机动车</div>
                                    </div>
                                    <div className={Styles["box"]}>
                                        <div className={Styles["non-motor"]}></div>
                                        <div className={Styles["text"]}>机动车</div>
                                    </div>
                                </div>
                                <div className={Styles["line-option"]}>
                                    <LineWrapper width={360} height={260} option={lineOption} />
                                </div>
                            </div>
                        </div>
                        <div className={Styles["wrapper"]}>
                            <div className={Styles["title"]}>非机动车分析</div>
                            <img className={Styles["fourth-img"]} src={WholeCard} alt="" />
                            <div className={Styles["non-motor-analysis"]}>
                                <div className={Styles["tips"]}>
                                    {tips.map(item => {
                                        return (
                                            <>
                                                <div className={Styles["box"]} key={item.key}>
                                                    {item.key === 0 && <div className={c("color", "green")}></div>}
                                                    {item.key === 1 && <div className={c("color", "yellow")}></div>}
                                                    {item.key === 2 && <div className={c("color", "blue")}></div>}
                                                    {item.key === 3 && <div className={c("color", "red")}></div>}
                                                    <div className={Styles["content"]}>{item.content}</div>
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                                <div className={Styles["piechart"]}>
                                    <Pie width={160} height={160} option={pieOption}></Pie>
                                </div>
                                <div className={Styles["notes"]}>非机动车各类型占比</div>
                            </div>
                        </div>
                    </div>
                </Block>
            </Left>
            <Right>
                <Block title>
                    <div className={c("container-right")}>
                        <div className={Styles["wrapper-right"]}>
                            <div className={Styles["title"]}>实时出行记录</div>
                            <img className={c("head-img")} src={CardHead} alt="" />
                            <img className={c("mid-img")} src={CardMid} alt="" />
                            <img className={c("bottom-img")} src={CardBottom} alt="" />
                            <div className={Styles["recorder-list"]}>
                                {carList.map(item => {
                                    return (
                                        <>
                                            <div className={Styles["box"]} key={item.no}>
                                                <Image src={item.imgSrc} alt="" />
                                                <div className={Styles["right"]}>
                                                    <div className={item.flag ? c("tag", "in") : c("tag", "out")}>{item.flag ? "进" : "出"}</div>
                                                    <div className={Styles["name"]}>{item.no}</div>
                                                    <div className={Styles["address"]}>{item.address}</div>
                                                    <div className={Styles["time"]}>{item.time}</div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={Styles["wrapper-right"]}>
                            <div className={Styles["title"]}>违停抓拍</div>
                            <img src={WholeCard} alt="" />
                            <div className={Styles["table"]}>
                                <div className={Styles["header"]}>
                                    {tableHead.map(item => {
                                        return (
                                            <>
                                                <div className={Styles["content"]} key={item.key}>
                                                    {item.content}
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                                <div className={Styles["table-data"]}>
                                    {tableData.map(c => {
                                        return (
                                            <>
                                                <div className={Styles["column"]} key={c.key}>
                                                    <div className={Styles["no"]}>{c.column[0]}</div>
                                                    <div className={Styles["address"]}>{c.column[1]}</div>
                                                    <div className={Styles["car-no"]}>{c.column[2]}</div>
                                                    <div className={Styles["time"]}>{c.column[3]}</div>
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className={Styles["wrapper-right"]}>
                            <div className={Styles["title"]}>车辆预警记录</div>
                            <img src={WholeCard} alt="" />
                            <div className={Styles["table"]}>
                                <div className={Styles["header"]}>
                                    {warningHead.map(item => {
                                        return (
                                            <>
                                                <div className={Styles["content"]} key={item.key}>
                                                    {item.content}
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                                <div className={Styles["table-data"]}>
                                    {wariningData.map(c => {
                                        return (
                                            <>
                                                <div className={Styles["column"]} key={c.key}>
                                                    <div className={Styles["no"]}>{c.column[0]}</div>
                                                    <div className={Styles["address"]}>{c.column[1]}</div>
                                                    <div className={Styles["car-no"]}>{c.column[2]}</div>
                                                    <div className={Styles["time"]}>{c.column[3]}</div>
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </Block>
            </Right>
        </>
    )
}

export default VehicleManage
