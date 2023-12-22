import { Left, Right } from "../../components/Area"
import Block from "../../components/Block"
import TopNav from "../../components/TopNav"
import Styles from "./index.module.less"
import CardHead from "../../assets/CardHead.png"
import CardMid from "../../assets/cardMid.png"
import CardBottom from "../../assets/cardBottom.png"
import { useState } from "react"
import { LineOption, Pie, PieOption } from "gskj-components"
import LineWrapper from "../../components/LineWrapper"
import { Progress } from "antd"
import Bubble from "../../assets/EventAnalysis/Bubble.png"
import EventPosition from "../../assets/EventAnalysis/LatestEventList/EventPosition.png"
import EventContent from "../../assets/EventAnalysis/LatestEventList/EventContent.png"
import EventTime from "../../assets/EventAnalysis/LatestEventList/EventTime.png"
import Rectabgular from "../../assets/EventAnalysis/Rectangular.png"

function c(...classNameList: (string | undefined | null | boolean)[]) {
    return (classNameList.filter(item => typeof item === "string") as string[]).map(className => (className.startsWith("_") ? className.slice(1) : Styles[className])).join(" ")
}

interface FourItem {
    num: string
    desc: string
}

interface TabItem {
    key: number
    detail: string
}

interface Tip {
    key: number
    detail: string
}

interface ProgressItem {
    key: number
    name: string
    value: number
}

interface HotWord {
    name: string
    count: number
}

interface Event {
    key: number
    title: string
    type: "待处理" | "处理中"
    position: string
    time: string
    content: string
}

const EventAnalysis: React.FC = () => {
    const FourList: FourItem[] = [
        {
            num: "11",
            desc: "报修总数"
        },
        {
            num: "30",
            desc: "今日保修数"
        },
        {
            num: "96.5",
            desc: "有效报修率"
        },
        {
            num: "15",
            desc: "今日已处理"
        }
    ]

    const tabList: TabItem[] = [
        {
            key: 0,
            detail: "报修"
        },
        {
            key: 1,
            detail: "投诉"
        },
        {
            key: 2,
            detail: "建议"
        }
    ]

    const [tabClicked, setTabClicked] = useState(0)

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
                radius: ["50%", "70%"],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: "center"
                },
                color: ["#38b358", "#739ffb", "#ff7272"],
                emphasis: {
                    label: {
                        show: false,
                        fontSize: 10
                    }
                },
                data: [
                    { value: 1100, name: "正常数量占比" },
                    { value: 400, name: "异常数量" },
                    { value: 200, name: "失联数量占比" }
                ]
            }
        ]
    }

    const tips: Tip[] = [
        { key: 0, detail: "处理完成" },
        { key: 1, detail: "处理中" },
        { key: 2, detail: "未处理" }
    ]

    const handleTips: Tip[] = [
        {
            key: 0,
            detail: "基础设施建设"
        },
        {
            key: 1,
            detail: "环境改善"
        },
        {
            key: 2,
            detail: "群众服务"
        },
        {
            key: 3,
            detail: "举报监督"
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
            boundaryGap: true,
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
                    color: "#ec950a"
                },
                emphasis: {
                    focus: "series"
                },
                data: [30, 100, 40, 80, 50, 270, 20]
            },
            {
                type: "line",
                smooth: false,
                symbol: "none",
                lineStyle: {
                    color: "#f9715b"
                },
                emphasis: {
                    focus: "series"
                },
                data: [210, 40, 90, 190, 100, 30, 80]
            },
            {
                type: "line",
                smooth: false,
                symbol: "none",
                lineStyle: {
                    color: "#6f48c7"
                },
                emphasis: {
                    focus: "series"
                },
                data: [160, 170, 140, 190, 150, 70, 110]
            },
            {
                type: "line",
                smooth: false,
                symbol: "none",
                lineStyle: {
                    color: "#17ee97"
                },
                emphasis: {
                    focus: "series"
                },
                data: [260, 270, 240, 290, 250, 220, 230]
            }
        ]
    }

    const progressList: ProgressItem[] = [
        {
            key: 0,
            name: "NO.1 德莱文",
            value: 70
        },
        {
            key: 1,
            name: "NO.2 诺手",
            value: 50
        },
        {
            key: 2,
            name: "NO.3 皇子",
            value: 40
        },
        {
            key: 3,
            name: "NO.4 赵信",
            value: 80
        }
    ]

    const hotWordList: HotWord[] = [
        {
            name: "环境改造",
            count: 30
        },
        {
            name: "基础设施",
            count: 45
        },
        {
            name: "群众服务",
            count: 38
        },
        {
            name: "医疗服务",
            count: 26
        },
        {
            name: "电信诈骗",
            count: 16
        },
        {
            name: "污水处理",
            count: 30
        }
    ]

    const [hotwClicked, setHotwClicked] = useState("")

    const hotWordClick = (e: string) => {
        setHotwClicked(e)
    }

    const eventList: Event[] = [
        {
            key: 0,
            title: "卫生问题",
            type: "处理中",
            position: "洪福小区3号楼",
            time: "2023-03-31 12:00:01",
            content: "垃圾站太脏"
        },
        {
            key: 1,
            title: "高空抛物",
            type: "待处理",
            position: "洪福小区",
            time: "2023-02-05 14:25:32",
            content: "15楼高空抛物"
        },
        {
            key: 2,
            title: "高空抛物",
            type: "处理中",
            position: "洪福小区3号楼",
            time: "2023-03-25 23:25:14",
            content: "楼道被占用"
        }
    ]

    return (
        <>
            <TopNav />
            <Left>
                <Block title>
                    <div className={c("left")}>
                        <div className={c("wrapper")}>
                            <div className={c("title")}>设备保修趋势</div>
                            <img className={c("card-head")} src={CardHead} alt="" />
                            <img className={c("first")} src={CardMid} alt="" />
                            <img className={c("card-bottom")} src={CardBottom} alt="" />
                            <div className={c("warranty-trend")}>
                                <div className={c("pending-total")}>
                                    <div className={c("num")}>10</div>
                                    <div className={c("desc")}>待办总数</div>
                                </div>
                                <div className={c("four-items")}>
                                    {FourList.map(e => {
                                        return (
                                            <>
                                                <div className={c("box")} key={e.desc}>
                                                    <div className={c("num")}>{e.num}</div>
                                                    <div className={c("desc")}>{e.desc}</div>
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className={c("wrapper")}>
                            <div className={c("title")}>维修处理统计</div>
                            <img className={c("card-head")} src={CardHead} alt="" />
                            <img className={c("second")} src={CardMid} alt="" />
                            <img className={c("card-bottom")} src={CardBottom} alt="" />
                            <div className={c("process-statistic")}>
                                <div className={c("tab")}>
                                    {tabList.map(e => {
                                        return (
                                            <>
                                                <div key={e.key} className={tabClicked === e.key ? c("default", "actived") : c("default")} onClick={() => setTabClicked(e.key)}>
                                                    {e.detail}
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                                <div className={c("pie-chart")}>
                                    <Pie width={220} height={220} option={statusOption} />
                                </div>
                                <div className={c("tips")}>
                                    {tips.map(e => {
                                        return (
                                            <>
                                                {e.key === 0 && <div className={c("color", "green")}></div>}
                                                {e.key === 1 && <div className={c("color", "blue")}></div>}
                                                {e.key === 2 && <div className={c("color", "red")}></div>}
                                                <div className={c("detail")}>{e.detail}</div>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className={c("wrapper")}>
                            <div className={c("title")}>维修处理统计</div>
                            <img className={c("card-head")} src={CardHead} alt="" />
                            <img className={c("third")} src={CardMid} alt="" />
                            <img className={c("card-bottom")} src={CardBottom} alt="" />
                            <div className={c("handle-statistic")}>
                                <div className={c("handle-tips")}>
                                    {handleTips.map(e => {
                                        return (
                                            <>
                                                <div className={c("tip")}>
                                                    {e.key === 0 && <div className={c("color", "yellow")}></div>}
                                                    {e.key === 1 && <div className={c("color", "green")}></div>}
                                                    {e.key === 2 && <div className={c("color", "purple")}></div>}
                                                    {e.key === 3 && <div className={c("color", "red")}></div>}
                                                    <div className={c("detail")}>{e.detail}</div>
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                                <div className={c("line-chart")}>
                                    <LineWrapper width={360} height={300} option={lineOption} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Block>
            </Left>
            <Right>
                <Block title>
                    <div className={c("right")}>
                        <div className={c("wrapper")}>
                            <div className={c("title")}>处理进度排行</div>
                            <img className={c("card-head")} src={CardHead} alt="" />
                            <img className={c("first")} src={CardMid} alt="" />
                            <img className={c("card-bottom")} src={CardBottom} alt="" />
                            <div className={c("progress-rank")}>
                                {progressList.map(e => {
                                    return (
                                        <>
                                            <div key={e.key}>
                                                <div className={c("name")}>{e.name}</div>
                                                <Progress key={e.key} percent={e.value} size="small" />
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={c("wrapper")}>
                            <div className={c("title")}>上报热点词</div>
                            <img className={c("card-head")} src={CardHead} alt="" />
                            <img className={c("second")} src={CardMid} alt="" />
                            <img className={c("card-bottom")} src={CardBottom} alt="" />
                            <div className={c("hot-words")}>
                                {hotWordList.map(e => {
                                    return (
                                        <>
                                            <div key={e.name}>
                                                <img src={Bubble} alt="" style={{ width: `${e.count * 2}px`, height: `${e.count * 2}px` }} onClick={() => hotWordClick(e.name)} />
                                                {/* <div className={c("hotwName")}>{e.name}</div>
                                                <div className={c("hotwCount")}>{e.count}</div> */}
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={c("wrapper")}>
                            <div className={c("title")}>最新事件列表</div>
                            <img className={c("card-head")} src={CardHead} alt="" />
                            <img className={c("third")} src={CardMid} alt="" />
                            <img className={c("card-bottom")} src={CardBottom} alt="" />
                            <div className={c("event-list")}>
                                {eventList.map(e => {
                                    return (
                                        <>
                                            <div className={c("event-item")} key={e.key}>
                                                <img src={Rectabgular} alt="" />
                                                <div className={c("info")}>
                                                    <div className={c("left-side")}>
                                                        <div className={c("title")}>{e.title}</div>
                                                        <div className={c("position")}>
                                                            <img src={EventPosition} alt="" />
                                                            <div className={c("desc")}>事件地点</div>
                                                        </div>
                                                        <div className={c("time")}>
                                                            <img src={EventTime} alt="" />
                                                            <div className={c("desc")}>事件时间</div>
                                                        </div>
                                                        <div className={c("content")}>
                                                            <img src={EventContent} alt="" />
                                                            <div className={c("desc")}>事件内容</div>
                                                        </div>
                                                    </div>
                                                    <div className={c("right-side")}>
                                                        <div className={e.type === "待处理" ? c("type", "pending") : c("type", "ing")}>{e.type}</div>
                                                        <div className={c("position")}>{e.position}</div>
                                                        <div className={c("time")}>{e.time}</div>
                                                        <div className={c("content")}>{e.content}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </Block>
            </Right>
        </>
    )
}

export default EventAnalysis
