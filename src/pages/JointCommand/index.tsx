import { Left, Right } from "../../components/Area"
import Block from "../../components/Block"
import TopNav from "../../components/TopNav"
import Styles from "./index.module.less"
import WholeCard from "../../assets/WholeCard.png"
import OldLiveAlone from "../../assets/JointDefense/KeyPpl/OldLiveAlone.png"
import DisabledPpl from "../../assets/JointDefense/KeyPpl/DisabledPpl.png"
import WeakChild from "../../assets/JointDefense/KeyPpl/WeakChild.png"
import PsychiatricPatient from "../../assets/JointDefense/KeyPpl/PsychiatricPatient.png"
import KeyYouth from "../../assets/JointDefense/KeyPpl/KeyYouth.png"
import Veteran from "../../assets/JointDefense/KeyPpl/Veteran.png"
import { LineOption, Pie } from "gskj-components"
import CardHead from "../../assets/CardHead.png"
import CardMid from "../../assets/cardMid.png"
import CardBottom from "../../assets/cardBottom.png"
import Delaiwen from "../../assets/delaiwen.jpg"
import TieNan from "../../assets/TieNan.jpg"
import RuiZi from "../../assets/RuiZi.jpg"
import ChuiShi from "../../assets/ChuiShi.jpg"
import MangSeng from "../../assets/MangSeng.jpg"
import LineWrapper from "../../components/LineWrapper"
import { Image } from "antd"

function c(...classNameList: (string | undefined | null | boolean)[]) {
    return (classNameList.filter(item => typeof item === "string") as string[]).map(className => (className.startsWith("_") ? className.slice(1) : Styles[className])).join(" ")
}

interface KeyPpl {
    key: number
    imgSrc: string
    content: string
    data: number
}

interface AlarmInfo {
    no: number
    name: string
    position: string
    src: string
    time: string
    level: string
}

interface pieOption {
    key: number
    option: {
        tooltip: {
            backgroundColor: "transparent"
        }
        series: [
            {
                type: "pie"
                radius: ["44%", "64%"]
                avoidLabelOverlap: false
                label: {
                    show: false
                    position: "center"
                }
                color: [string, string]
                emphasis: {
                    label: {
                        show: false
                        fontSize: 10
                    }
                }
                data: [{ value: number; name: string }, { value: number; name: string }]
            }
        ]
    }
    title: string
}

interface Portrait {
    imgSrc: string
    name: string
    type: "独居老人" | "弱小儿童" | "重点青年" | "伤残人士" | "精神病人" | "退伍军人"
    address: string
    inout: "进" | "出"
    time: string
}

interface PreAlarm {
    no: number
    position: string
    event: string
    time: string
}

const JointCommand: React.FC = () => {
    const keypplList: KeyPpl[] = [
        {
            key: 0,
            imgSrc: OldLiveAlone,
            content: "独居老人",
            data: 58
        },
        {
            key: 1,
            imgSrc: WeakChild,
            content: "弱小儿童",
            data: 66
        },
        {
            key: 2,
            imgSrc: KeyYouth,
            content: "重点青年",
            data: 68
        },
        {
            key: 3,
            imgSrc: DisabledPpl,
            content: "伤残人士",
            data: 89
        },
        {
            key: 4,
            imgSrc: PsychiatricPatient,
            content: "精神病人",
            data: 34
        },
        {
            key: 5,
            imgSrc: Veteran,
            content: "退伍军人",
            data: 166
        }
    ]

    const pieList: pieOption[] = [
        {
            key: 0,
            option: {
                tooltip: {
                    backgroundColor: "transparent"
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
                        color: ["#0292ff", "#262795"],
                        emphasis: {
                            label: {
                                show: false,
                                fontSize: 10
                            }
                        },
                        data: [
                            { value: 120, name: "" },
                            { value: 120, name: "" }
                        ]
                    }
                ]
            },
            title: "外来车辆"
        },
        {
            key: 1,
            option: {
                tooltip: {
                    backgroundColor: "transparent"
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
                        color: ["#efb574", "#262795"],
                        emphasis: {
                            label: {
                                show: false,
                                fontSize: 10
                            }
                        },
                        data: [
                            { value: 120, name: "" },
                            { value: 120, name: "" }
                        ]
                    }
                ]
            },
            title: "违法停车"
        },
        {
            key: 2,
            option: {
                tooltip: {
                    backgroundColor: "transparent"
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
                        color: ["#f072d6", "#262795"],
                        emphasis: {
                            label: {
                                show: false,
                                fontSize: 10
                            }
                        },
                        data: [
                            { value: 120, name: "" },
                            { value: 120, name: "" }
                        ]
                    }
                ]
            },
            title: "占用消防通道"
        },
        {
            key: 3,
            option: {
                tooltip: {
                    backgroundColor: "transparent"
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
                        color: ["#0197ff", "#262795"],
                        emphasis: {
                            label: {
                                show: false,
                                fontSize: 10
                            }
                        },
                        data: [
                            { value: 120, name: "" },
                            { value: 120, name: "" }
                        ]
                    }
                ]
            },
            title: "涉恐"
        },
        {
            key: 4,
            option: {
                tooltip: {
                    backgroundColor: "transparent"
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
                        color: ["#f7bf72", "#262795"],
                        emphasis: {
                            label: {
                                show: false,
                                fontSize: 10
                            }
                        },
                        data: [
                            { value: 120, name: "" },
                            { value: 120, name: "" }
                        ]
                    }
                ]
            },
            title: "涉稳"
        },
        {
            key: 5,
            option: {
                tooltip: {
                    backgroundColor: "transparent"
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
                        color: ["#f072d6", "#262795"],
                        emphasis: {
                            label: {
                                show: false,
                                fontSize: 10
                            }
                        },
                        data: [
                            { value: 120, name: "" },
                            { value: 120, name: "" }
                        ]
                    }
                ]
            },
            title: "在逃"
        }
    ]

    const tableHead: TableHead[] = [
        {
            key: 0,
            content: "序号"
        },
        {
            key: 1,
            content: "姓名"
        },
        {
            key: 2,
            content: "地点"
        },
        {
            key: 3,
            content: "来源"
        },
        {
            key: 4,
            content: "时间"
        },
        {
            key: 5,
            content: "级别"
        }
    ]

    const tableData: AlarmInfo[] = [
        {
            no: 1,
            name: "郭伟超",
            position: "南大门",
            src: "人脸识别",
            time: "09:00",
            level: "一级"
        },
        {
            no: 2,
            name: "梁志超",
            position: "东大门",
            src: "人脸识别",
            time: "09:45",
            level: "二级"
        },
        {
            no: 2,
            name: "王学",
            position: "西北门",
            src: "NFC",
            time: "09:50",
            level: "二级"
        },
        {
            no: 3,
            name: "郭伟超",
            position: "南大门",
            src: "人脸识别",
            time: "09:00",
            level: "一级"
        },
        {
            no: 4,
            name: "郭伟超",
            position: "南大门",
            src: "人脸识别",
            time: "09:00",
            level: "一级"
        },
        {
            no: 5,
            name: "郭伟超",
            position: "南大门",
            src: "人脸识别",
            time: "09:00",
            level: "一级"
        },
        {
            no: 6,
            name: "郭伟超",
            position: "南大门",
            src: "人脸识别",
            time: "09:00",
            level: "一级"
        },
        {
            no: 7,
            name: "郭伟超",
            position: "南大门",
            src: "人脸识别",
            time: "09:00",
            level: "一级"
        },
        {
            no: 8,
            name: "郭伟超",
            position: "南大门",
            src: "人脸识别",
            time: "09:00",
            level: "一级"
        },
        {
            no: 9,
            name: "郭伟超",
            position: "南大门",
            src: "人脸识别",
            time: "09:00",
            level: "一级"
        },
        {
            no: 10,
            name: "郭伟超",
            position: "南大门",
            src: "人脸识别",
            time: "09:00",
            level: "一级"
        },
        {
            no: 11,
            name: "郭伟超",
            position: "南大门",
            src: "人脸识别",
            time: "09:00",
            level: "一级"
        },
        {
            no: 12,
            name: "郭伟超",
            position: "南大门",
            src: "人脸识别",
            time: "09:00",
            level: "一级"
        }
    ]

    const portraitList: Portrait[] = [
        {
            imgSrc: Delaiwen,
            name: "德莱文",
            type: "伤残人士",
            address: "洪福小区南一门出口",
            inout: "进",
            time: "2023-02-06 12:00:03"
        },
        {
            imgSrc: MangSeng,
            name: "徐腾",
            type: "伤残人士",
            address: "洪福小区南一门出口",
            inout: "出",
            time: "2023-02-06 12:00:03"
        },
        {
            imgSrc: TieNan,
            name: "陆荣",
            type: "伤残人士",
            address: "洪福小区南一门出口",
            inout: "进",
            time: "2023-02-06 12:00:03"
        },
        {
            imgSrc: RuiZi,
            name: "卜元浩",
            type: "伤残人士",
            address: "洪福小区南一门出口",
            inout: "出",
            time: "2023-02-06 12:00:03"
        },
        {
            imgSrc: ChuiShi,
            name: "徐震",
            type: "伤残人士",
            address: "洪福小区南一门出口",
            inout: "进",
            time: "2023-02-06 12:00:03"
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
            data: ["6日", "7日", "8日", "9日", "10日", "11日", "12日"],
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
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
                lineStyle: {
                    color: "#e0e6fe"
                }
            }
        },
        series: [
            {
                type: "line",
                smooth: false,
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
            }
        ]
    }

    const preAlarmHead: TableHead[] = [
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

    const preAlarmTableData: PreAlarm[] = [
        {
            no: 0,
            position: "南大门",
            event: "陌生车辆",
            time: "09:22"
        },
        {
            no: 1,
            position: "南大门",
            event: "陌生车辆",
            time: "09:22"
        },
        {
            no: 2,
            position: "南大门",
            event: "陌生车辆",
            time: "09:22"
        },
        {
            no: 3,
            position: "南大门",
            event: "陌生车辆",
            time: "09:22"
        },
        {
            no: 4,
            position: "南大门",
            event: "陌生车辆",
            time: "09:22"
        }
    ]

    return (
        <>
            <TopNav />
            <Left>
                <Block title>
                    <div className={Styles["container"]}>
                        <div className={Styles["wrapper"]}>
                            <div className={Styles["title"]}>社区重点人员</div>
                            <img src={WholeCard} alt="" />
                            <div className={Styles["keyppl"]}>
                                {keypplList.map(e => {
                                    return (
                                        <>
                                            <div key={e.key}>
                                                <img src={e.imgSrc} alt="" />
                                                <div className={c("info")}>
                                                    <div className={c("content")}>{e.content}</div>
                                                    <div className={c("data")}>{e.data}</div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={Styles["wrapper"]}>
                            <div className={Styles["title"]}>社区重点车辆</div>
                            <img src={WholeCard} alt="" />
                            <div className={Styles["key-vehicle"]}>
                                {pieList.map(item => {
                                    return (
                                        <>
                                            <div className={c("pie-chart")} key={item.key}>
                                                <Pie width={96} height={96} option={item.option} />
                                                <div style={{ fontSize: "12px", color: "#c4c9d1", letterSpacing: "2px" }}>{item.title}</div>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={Styles["wrapper"]}>
                            <div className={Styles["title"]}>社区报警信息</div>
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
                                    {tableData.map(item => {
                                        return (
                                            <>
                                                <div className={Styles["column"]} key={item.no}>
                                                    <div className={c("no")}>{item.no}</div>
                                                    <div className={c("name")}>{item.name}</div>
                                                    <div className={c("position")}>{item.position}</div>
                                                    <div className={c("source")}>{item.position}</div>
                                                    <div className={c("time")}>{item.time}</div>
                                                    <div className={c("level")}>{item.level}</div>
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </Block>
            </Left>
            <Right>
                <Block title>
                    <div className={Styles["container-right"]}>
                        <div className={c("wrapper-right")}>
                            <div className={c("title")}>重点场所监控</div>
                            <img className={c("img-head")} src={CardHead} alt="" />
                            <img className={c("img-mid")} src={CardMid} alt="" />
                            <img className={c("img-bottom")} src={CardBottom} alt="" />
                            <div className={c("capture-list")}>
                                <div className={Styles["recorder-list"]}>
                                    {portraitList.map(item => {
                                        return (
                                            <>
                                                <div className={Styles["box"]} key={item.name}>
                                                    <Image className={c("portrait")} src={item.imgSrc} alt="" />
                                                    <div className={Styles["right"]}>
                                                        <div className={item.inout === "进" ? c("tag", "in") : c("tag", "out")}>{item.inout === "进" ? "进" : "出"}</div>
                                                        <div className={Styles["name"]}>{item.name}</div>
                                                        <div className={Styles["address"]}>{item.address}</div>
                                                        <div className={Styles["time"]}>{item.time}</div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className={c("wrapper-right")}>
                            <div className={c("title")}>七天告警趋势</div>
                            <img className={c("second-img")} src={WholeCard} alt="" />
                            <div className={c("sevenday-alarm")}>
                                <LineWrapper width={360} height={260} option={lineOption} />
                            </div>
                        </div>
                        <div className={c("wrapper-right")}>
                            <div className={c("title")}>车辆预警记录</div>
                            <img className={c("third-img")} src={WholeCard} alt="" />
                            <div className={c("preAlarm-table")}>
                                <div className={Styles["header"]}>
                                    {preAlarmHead.map(e => {
                                        return (
                                            <>
                                                <div className={Styles["content"]} key={e.key}>
                                                    {e.content}
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                                <div className={Styles["table-data"]}>
                                    {preAlarmTableData.map(e => {
                                        return (
                                            <>
                                                <div className={Styles["column"]} key={e.no}>
                                                    <div className={c("no")}>{e.no}</div>
                                                    <div className={c("position")}>{e.position}</div>
                                                    <div className={c("name")}>{e.event}</div>
                                                    <div className={c("source")}>{e.time}</div>
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

export default JointCommand
