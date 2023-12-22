import { Left, Right } from "../../components/Area"
import Block from "../../components/Block"
import TopNav from "../../components/TopNav"
import Styles from "./index.module.less"
import WholeCard from "../../assets/WholeCard.png"
import { BarOption, Pie, PieOption } from "gskj-components"
import DeviceTotal from "../../assets/SensoryDevice/leftFirstPart/DeviceTotal.png"
import OnlineDevice from "../../assets/SensoryDevice/leftFirstPart/OnlineDevice.png"
import DeviceCategory from "../../assets/SensoryDevice/leftFirstPart/DeviceCategory.png"
import OfflineDevice from "../../assets/SensoryDevice/leftFirstPart/OfflineDevice.png"
import CellMornitoring from "../../assets/SensoryDevice/leftSecondPart/CellMornitoring.png"
import IntelligentFireHydrent from "../../assets/SensoryDevice/leftSecondPart/IntelligentFireHydrent.png"
import FaceRecognition from "../../assets/SensoryDevice/leftSecondPart/FaceRecognition.png"
import SmokeAlarm from "../../assets/SensoryDevice/leftSecondPart/SmokeAlarm.png"
import IntelligentMonitoring from "../../assets/SensoryDevice/leftSecondPart/IntelligentMonitoring.png"
import SmartManholeCover from "../../assets/SensoryDevice/leftSecondPart/SmartManholeCover.png"
import BarWrapper from "../../components/BarWrapper"
import Dashboard from "../../assets/SensoryDevice/right/Dashboard.png"

function c(...classNameList: (string | undefined | null | boolean)[]) {
    return (classNameList.filter(item => typeof item === "string") as string[]).map(className => (className.startsWith("_") ? className.slice(1) : Styles[className])).join(" ")
}

interface DeviceStatistic {
    imgSrc: string
    count: number
    name: string
}

interface Tip {
    key: number
    content: string
}

interface RunnningDetect {
    key: number
    title: string
    data: number
}

interface AlarmTableColumn {
    key: number
    name: string
    position: string
    level: "高" | "中" | "低"
    time: string
}

const SenesoryDevice: React.FC = () => {
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
                color: [
                    {
                        type: "linear",
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: "#8477ec"
                            },
                            {
                                offset: 1,
                                color: "#60d1f1"
                            }
                        ]
                    },
                    "transparent"
                ],
                emphasis: {
                    label: {
                        show: false,
                        fontSize: 10
                    }
                },
                data: [
                    { value: 85, name: "在线" },
                    { value: 15, name: "离线" }
                ]
            }
        ]
    }
    const FirstStatisticList: DeviceStatistic[] = [
        {
            imgSrc: DeviceTotal,
            count: 66,
            name: "设备总数"
        },
        {
            imgSrc: OnlineDevice,
            count: 188,
            name: "在线设备"
        },
        {
            imgSrc: DeviceCategory,
            count: 19,
            name: "设备种类"
        },
        {
            imgSrc: OfflineDevice,
            count: 76,
            name: "离线设备"
        }
    ]
    const SceondStatisticList: DeviceStatistic[] = [
        {
            imgSrc: CellMornitoring,
            count: 571,
            name: "小区监控"
        },
        {
            imgSrc: SmartManholeCover,
            count: 99,
            name: "智能井盖"
        },
        {
            imgSrc: FaceRecognition,
            count: 38,
            name: "人脸识别门禁"
        },
        {
            imgSrc: SmokeAlarm,
            count: 56,
            name: "智能烟感"
        },
        {
            imgSrc: IntelligentMonitoring,
            count: 101,
            name: "智能摄像头"
        },
        {
            imgSrc: IntelligentFireHydrent,
            count: 120,
            name: "智能消防栓"
        }
    ]
    const statusOption: PieOption = {
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
                radius: ["44%", "64%"],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: "center"
                },
                color: ["#0546ab", "#d2a120", "#26b27e"],
                emphasis: {
                    label: {
                        show: false,
                        fontSize: 10
                    }
                },
                data: [
                    { value: 1048, name: "正常数量占比" },
                    { value: 735, name: "异常数量" },
                    { value: 580, name: "失联数量占比" }
                ]
            }
        ]
    }
    const tipList: Tip[] = [
        {
            key: 0,
            content: "正常"
        },
        {
            key: 1,
            content: "异常"
        },
        {
            key: 2,
            content: "失恋"
        }
    ]
    const detectionOption: BarOption = {
        xAxis: {
            type: "category",
            data: ["3.10", "3.11", "3.12", "3.13", "3.14", "3.15", "3.16"],
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
            data: [0, 100, 200, 300, 400],
            axisLine: {
                show: true,
                symbolOffset: [0, 12],
                lineStyle: {
                    color: "#e0e6fe"
                }
            }
        },
        grid: [
            {
                backgroundColor: "rgba(0,0,0,0)"
            }
        ],
        series: [
            {
                data: [120, 110, 100, 90, 80, 60, 50],
                type: "bar",
                showBackground: true,
                backgroundStyle: {
                    color: "transparent"
                },
                barWidth: "20px",
                itemStyle: {
                    color: {
                        type: "linear",
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: "#3180fd"
                            },
                            {
                                offset: 1,
                                color: "#36bbff"
                            }
                        ]
                    }
                }
            }
        ]
    }
    const runnningDetectList: RunnningDetect[] = [
        {
            key: 0,
            title: "电梯运行次数/天",
            data: 264
        },
        {
            key: 1,
            title: "故障运行次数/天",
            data: 54
        }
    ]
    const stautsCase: Tip[] = [
        {
            key: 0,
            content: "在线"
        },
        {
            key: 1,
            content: "离线"
        }
    ]
    const barOption: BarOption = {
        grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true
        },
        xAxis: {
            type: "value",
            axisLine: {
                show: true,
                symbolOffset: [0, 12],
                lineStyle: {
                    color: "#e0e6fe"
                }
            },
            splitLine: {
                show: false
            }
        },
        yAxis: {
            type: "category",
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#e0e6fe"
                }
            },
            data: [10, 20, 30, 40, 50, 60, 70, 80]
        },
        series: [
            {
                name: "数量",
                type: "bar",
                stack: "total",
                label: {
                    show: false,
                    color: "#FFF"
                },
                emphasis: {
                    focus: "series"
                },
                data: [120, 140, 150, 160, 170, 180, 190],
                itemStyle: {
                    color: {
                        type: "linear",
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [
                            {
                                offset: 0,
                                color: "#fbad7e"
                            },
                            {
                                offset: 1,
                                color: "#f6c96b"
                            }
                        ]
                    }
                }
            },
            {
                name: "数量",
                type: "bar",
                stack: "total",
                label: {
                    show: false,
                    color: "#FFF"
                },
                emphasis: {
                    focus: "series"
                },
                data: [30, 50, 70, 80, 90, 100, 110],
                itemStyle: {
                    color: {
                        type: "linear",
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [
                            {
                                offset: 0,
                                color: "#3188fd"
                            },
                            {
                                offset: 1,
                                color: "#34b6ff"
                            }
                        ]
                    }
                }
            }
        ]
    }
    const tableHead: TableHead[] = [
        {
            key: 0,
            content: "设备名称"
        },
        {
            key: 1,
            content: "位置"
        },
        {
            key: 2,
            content: "预警等级"
        },
        {
            key: 3,
            content: "报警时间"
        }
    ]

    const tableData: AlarmTableColumn[] = [
        {
            key: 0,
            name: "智能井盖",
            position: "15号楼坐门前",
            level: "高",
            time: "2023-02-13 22:12:04"
        },
        {
            key: 1,
            name: "温感",
            position: "11号楼1单元101室",
            level: "中",
            time: "2023-02-23 17:55:22"
        },
        {
            key: 2,
            name: "燃气感",
            position: "15号楼2单元301室",
            level: "高",
            time: "2023-03-06 21:00:05"
        },
        {
            key: 3,
            name: "智能井盖",
            position: "南大门门前",
            level: "低",
            time: "2023-08-25 16:23:55"
        },
        {
            key: 4,
            name: "温感",
            position: "10号楼1单元101室",
            level: "中",
            time: "2023-01-06 22:33:26"
        },
        {
            key: 5,
            name: "燃气感",
            position: "15号楼5单元202室",
            level: "低",
            time: "2023-01-06 23:22:14"
        },
        {
            key: 6,
            name: "智能井盖",
            position: "10号楼8单元203室",
            level: "中",
            time: "2023-02-06 23:00:25"
        },
        {
            key: 7,
            name: "烟感",
            position: "12号楼2单元501室",
            level: "高",
            time: "2023-06-07 21:00:25"
        }
    ]
    return (
        <>
            <TopNav />
            <Left>
                <Block title>
                    <div className={Styles["container"]}>
                        <div className={Styles["wrapper"]}>
                            <div className={c("title", "first-title")}>设备统计</div>
                            <img className={Styles["first"]} src={WholeCard} alt="" />
                            <div className={Styles["device-statistic"]}>
                                <div className={Styles["pie-chart"]}>
                                    <Pie width={140} height={140} option={pieOption} />
                                </div>
                                <div className={Styles["detail"]}>
                                    {FirstStatisticList.map(item => {
                                        return (
                                            <>
                                                <div className={Styles["box"]}>
                                                    <img src={item.imgSrc} alt="" />
                                                    <div className={Styles["intro"]}>
                                                        <div className={Styles["count"]}>{item.count}</div>
                                                        <div className={Styles["name"]}>{item.name}</div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className={Styles["wrapper"]}>
                            <div className={Styles["title"]}>设备统计</div>
                            <img className={Styles["second"]} src={WholeCard} alt="" />
                            <div className={Styles["device-statistic-second"]}>
                                {SceondStatisticList.map(item => {
                                    return (
                                        <>
                                            <div className={Styles["box"]}>
                                                <img src={item.imgSrc} alt="" />
                                                <div className={Styles["intro"]}>
                                                    <div className={Styles["name"]}>{item.name}</div>
                                                    <div className={Styles["count"]}>{item.count}</div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={Styles["wrapper"]}>
                            <div className={Styles["title"]}>消防设备状态</div>
                            <img className={Styles["third"]} src={WholeCard} alt="" />
                            <div className={Styles["device-status"]}>
                                <div className={Styles["pie-chart"]}>
                                    <Pie width={180} height={180} option={statusOption} />
                                </div>
                                <div className={Styles["tips"]}>
                                    {tipList.map(item => {
                                        return (
                                            <>
                                                <div className={Styles["box"]} key={item.key}>
                                                    {item.key === 0 && <div className={c("color", "blue")}></div>}
                                                    {item.key === 1 && <div className={c("color", "yellow")}></div>}
                                                    {item.key === 2 && <div className={c("color", "green")}></div>}
                                                    <div className={Styles["content"]}>{item.content}</div>
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className={Styles["wrapper"]}>
                            <div className={Styles["title"]}>设备故障检测</div>
                            <img className={Styles["fourth"]} src={WholeCard} alt="" />
                            <div className={Styles["fault-detection"]}>
                                <div className={Styles["bar-chart"]}>
                                    <BarWrapper width={400} height={260} option={detectionOption} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Block>
            </Left>
            <Right>
                <Block title>
                    <div className={Styles["container-right"]}>
                        <div className={Styles["wrapper-right"]}>
                            <div className={Styles["title"]}>电梯运行监测</div>
                            <img src={WholeCard} alt="" />
                            <div className={Styles["detect"]}>
                                <img src={Dashboard} alt="" />
                                <div className={Styles["data"]}>25%</div>
                                <div className={Styles["info"]}>
                                    {runnningDetectList.map(item => {
                                        return (
                                            <>
                                                <div className={Styles["item"]} key={item.key}>
                                                    <div className={Styles["title"]}>{item.title}</div>
                                                    {item.key === 0 && (
                                                        <div className={c("detail", "elevator")}>
                                                            {item.data}
                                                            <span className={Styles["unit"]}>/次</span>
                                                        </div>
                                                    )}
                                                    {item.key === 1 && (
                                                        <div className={c("detail", "failure")}>
                                                            {item.data}
                                                            <span className={Styles["unit"]}>/次</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className={Styles["wrapper-right"]}>
                            <div className={c("title", "second-title")}>设备状态情况</div>
                            <img className={Styles["right-second"]} src={WholeCard} alt="" />
                            <div className={Styles["status-case"]}>
                                <div className={Styles["header"]}>
                                    {stautsCase.map(item => {
                                        return (
                                            <>
                                                <div className={Styles["tip"]}>
                                                    {item.key === 0 && <div className={c("color", "online")}></div>}
                                                    {item.key === 1 && <div className={c("color", "offline")}></div>}
                                                    <div className={Styles["content"]}>{item.content}</div>
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                                <div className={Styles["bar-chart"]}>
                                    <BarWrapper width={300} height={300} option={barOption} />
                                </div>
                            </div>
                        </div>
                        <div className={Styles["wrapper-right"]}>
                            <div className={c("title", "third-title")}>设备预警</div>
                            <img className={Styles["third"]} src={WholeCard} alt="" />
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
                                    {tableData.map(item => {
                                        return (
                                            <>
                                                <div className={Styles["column"]} key={item.key}>
                                                    <div className={Styles["name"]}>{item.name}</div>
                                                    <div className={Styles["position"]}>{item.position}</div>
                                                    {item.level === "低" && <div className={c("level", "low")}>{item.level}</div>}
                                                    {item.level === "中" && <div className={c("level", "mid")}>{item.level}</div>}
                                                    {item.level === "高" && <div className={c("level", "high")}>{item.level}</div>}
                                                    <div className={Styles["time"]}>{item.time}</div>
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

export default SenesoryDevice
