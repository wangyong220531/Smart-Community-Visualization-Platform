import { Left, Right } from "../../components/Area"
import Block from "../../components/Block"
import TopNav from "../../components/TopNav"
import Styles from "./index.module.less"
import CardHead from "../../assets/CardHead.png"
import CardMid from "../../assets/cardMid.png"
import CardBottom from "../../assets/cardBottom.png"
import Default from "../../assets/SmartPartyBuild/Default.png"
import Selected from "../../assets/SmartPartyBuild/Selected.png"
import { useState } from "react"
import BarWrapper from "../../components/BarWrapper"
import { BarOption, Pie, PieOption } from "gskj-components"
import { Progress } from "antd"
import Capture from "../../assets/SmartPartyBuild/Capture.jpg"
import { Image } from "antd"

function c(...classNameList: (string | undefined | null | boolean)[]) {
    return (classNameList.filter(item => typeof item === "string") as string[]).map(className => (className.startsWith("_") ? className.slice(1) : Styles[className])).join(" ")
}

interface BasicSituation {
    name: string
    num: number
}

interface PartyAge {
    key: number
    detail: string
}

const SmartPartyBuild: React.FC = () => {
    const BasicSituation: BasicSituation[] = [
        {
            name: "党支部数",
            num: 2
        },
        {
            name: "党员总数",
            num: 55
        },
        {
            name: "预备党员",
            num: 10
        }
    ]

    const [basic, setBasic] = useState("")
    const basicClick = (e: string) => {
        setBasic(e)
    }

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
                    color: "#ffffff75"
                }
            },
            splitLine: {
                show: false
            },
            data: [0, 100, 200, 300, 400]
        },
        yAxis: {
            type: "category",
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#ffffff75"
                }
            },
            data: ["18~30岁", "30~40岁", "40~50岁", "50~60岁", "60岁以上"]
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
                barWidth: "12px",
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
                                color: "#09a1f5"
                            },
                            {
                                offset: 1,
                                color: "#18f5ff"
                            }
                        ]
                    }
                }
            }
        ]
    }

    const partyAges: PartyAge[] = [
        {
            key: 0,
            detail: "3年以下"
        },
        {
            key: 1,
            detail: "3年~5年"
        },
        {
            key: 2,
            detail: "5年~10年"
        },
        {
            key: 3,
            detail: "10年~20年"
        },
        {
            key: 4,
            detail: "20年以上"
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
                radius: ["40%", "70%"],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: "center"
                },
                color: ["#52ffff", "#ffae00", "#28b1ff", "#f53f8c", "#52ff97"],
                emphasis: {
                    label: {
                        show: false,
                        fontSize: 10
                    }
                },
                data: [
                    { value: 1100, name: "3年以下" },
                    { value: 400, name: "3年~5年" },
                    { value: 200, name: "5年~10年" },
                    { value: 200, name: "10年~20年" },
                    { value: 200, name: "20年以上" }
                ]
            }
        ]
    }

    const detectionOption: BarOption = {
        xAxis: {
            type: "category",
            data: ["党委大会", "支部委员", "党小组会", "党课"],
            axisLine: {
                lineStyle: {
                    color: "#e0e6fe"
                }
            }
        },
        yAxis: {
            type: "value",
            data: [0, 100, 200, 300, 400],
            axisLine: {
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
                data: [120, 110, 100, 90],
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
                                color: "#6dcde6"
                            },
                            {
                                offset: 1,
                                color: "#48aedb"
                            }
                        ]
                    }
                }
            }
        ]
    }

    const activityHead: TableHead[] = [
        {
            key: 0,
            content: "党支部"
        },
        {
            key: 1,
            content: "人数"
        },
        {
            key: 2,
            content: "活动名称"
        }
    ]

    const activityTable: TableData[] = [
        {
            key: 0,
            column: ["白鹭湖社区洪福小区党支部", "52", "组织生活"]
        },
        {
            key: 1,
            column: ["白鹭湖社区洪福小区党支部", "52", "组织生活"]
        },
        {
            key: 2,
            column: ["白鹭湖社区洪福小区党支部", "52", "组织生活"]
        },
        {
            key: 3,
            column: ["白鹭湖社区洪福小区党支部", "52", "组织生活"]
        },
        {
            key: 4,
            column: ["白鹭湖社区洪福小区党支部", "52", "组织生活"]
        },
        {
            key: 5,
            column: ["白鹭湖社区洪福小区党支部", "52", "组织生活"]
        },
        {
            key: 6,
            column: ["白鹭湖社区洪福小区党支部", "52", "组织生活"]
        }
    ]

    const eduoption: PieOption = {
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
                radius: ["30%", "50%"],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: "center"
                },
                color: ["#f96d65", "#fa9b22", "#005cd9", "#f53f8c", "#52ff97", "#52ff97"],
                emphasis: {
                    label: {
                        show: false,
                        fontSize: 10
                    }
                },
                data: [
                    { value: 1100, name: "高中" },
                    { value: 1400, name: "大专" },
                    { value: 800, name: "本科" },
                    { value: 600, name: "硕士" },
                    { value: 200, name: "其他" }
                ]
            }
        ]
    }

    const tipList: PartyAge[] = [
        {
            key: 0,
            detail: "高中"
        },
        {
            key: 1,
            detail: "大专"
        },
        {
            key: 2,
            detail: "本科"
        },
        {
            key: 3,
            detail: "硕士"
        },
        {
            key: 4,
            detail: "其他"
        }
    ]

    return (
        <>
            <TopNav />
            <Left>
                <Block title>
                    <div className={c("left")}>
                        <div className={c("wrapper")}>
                            <div className={c("title")}>党组织基本情况</div>
                            <img className={c("card-head")} src={CardHead} alt="" />
                            <img className={c("first")} src={CardMid} alt="" />
                            <img className={c("card-bottom")} src={CardBottom} alt="" />
                            <div className={c("basic-situation")}>
                                {BasicSituation.map(e => {
                                    return (
                                        <>
                                            <div key={e.name}>
                                                <img src={basic === e.name ? Selected : Default} alt="" onClick={() => basicClick(e.name)} />
                                                <div className={c("name")}>{e.name}</div>
                                                <div className={c("num")}>{e.num}</div>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={c("wrapper")}>
                            <div className={c("title")}>年龄结构</div>
                            <img className={c("card-head")} src={CardHead} alt="" />
                            <img className={c("second")} src={CardMid} alt="" />
                            <img className={c("card-bottom")} src={CardBottom} alt="" />
                            <div className={c("age-structure")}>
                                <BarWrapper width={300} height={230} option={barOption} />
                            </div>
                        </div>
                        <div className={c("wrapper")}>
                            <div className={c("title")}>性别结构</div>
                            <img className={c("card-head")} src={CardHead} alt="" />
                            <img className={c("third")} src={CardMid} alt="" />
                            <img className={c("card-bottom")} src={CardBottom} alt="" />
                            <div className={c("sex-structure")}>
                                <div className={c("progress-item")}>
                                    <div className={c("progress-title")}>男性：</div>
                                    <Progress className={c("male-progress")} percent={70} size="small" />
                                </div>
                                <div className={c("progress-item")}>
                                    <div className={c("progress-title")}>女性：</div>
                                    <Progress className={c("female-progress")} percent={30} size="small" />
                                </div>
                            </div>
                        </div>
                        <div className={c("wrapper")}>
                            <div className={c("title")}>党龄结构</div>
                            <img className={c("card-head")} src={CardHead} alt="" />
                            <img className={c("fourth")} src={CardMid} alt="" />
                            <img className={c("card-bottom")} src={CardBottom} alt="" />
                            <div className={c("party-age-structure")}>
                                <div className={c("pie-chart")}>
                                    <Pie width={120} height={120} option={statusOption} />
                                </div>
                                <div className={c("tips")}>
                                    {partyAges.map(e => {
                                        return (
                                            <>
                                                <div className={c("tip")} key={e.key}>
                                                    {e.key === 0 && <div className={c("color", "cyan")}></div>}
                                                    {e.key === 1 && <div className={c("color", "yellow")}></div>}
                                                    {e.key === 2 && <div className={c("color", "blue")}></div>}
                                                    {e.key === 3 && <div className={c("color", "pink")}></div>}
                                                    {e.key === 4 && <div className={c("color", "green")}></div>}

                                                    <div className={c("detail")}>{e.detail}</div>
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className={c("wrapper")}>
                            <div className={c("title")}>学历结构</div>
                            <img className={c("card-head")} src={CardHead} alt="" />
                            <img className={c("fifth")} src={CardMid} alt="" />
                            <img className={c("card-bottom")} src={CardBottom} alt="" />
                            <div className={c("edu-structure")}>
                                <div className={c("pie-chart")}>
                                    <Pie width={160} height={160} option={eduoption} />
                                </div>
                                <div className={c("tips")}>
                                    {tipList.map(e => {
                                        return (
                                            <>
                                                <div className={c("box")}>
                                                    {e.key === 0 && (
                                                        <div className={c("item")}>
                                                            <div className={c("color", "red")}></div>
                                                            <div className={c("detail", "red-detail")}>{e.detail}</div>
                                                        </div>
                                                    )}
                                                    {e.key === 1 && (
                                                        <div className={c("item")}>
                                                            <div className={c("color", "yellow")}></div>
                                                            <div className={c("detail", "yellow-detail")}>{e.detail}</div>
                                                        </div>
                                                    )}
                                                    {e.key === 2 && (
                                                        <div className={c("item")}>
                                                            <div className={c("color", "blue")}></div>
                                                            <div className={c("detail", "blue-detail")}>{e.detail}</div>
                                                        </div>
                                                    )}
                                                    {e.key === 3 && (
                                                        <div className={c("item")}>
                                                            <div className={c("color", "green")}></div>
                                                            <div className={c("detail", "green-detail")}>{e.detail}</div>
                                                        </div>
                                                    )}
                                                    {e.key === 4 && (
                                                        <div className={c("item")}>
                                                            <div className={c("color", "purple")}></div>
                                                            <div className={c("detail", "purple-detail")}>{e.detail}</div>
                                                        </div>
                                                    )}
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
                    <div className={c("right")}>
                        <div className={c("wrapper")}>
                            <div className={c("title")}>党建风采</div>
                            <img className={c("card-head")} src={CardHead} alt="" />
                            <img className={c("first")} src={CardMid} alt="" />
                            <img className={c("card-bottom")} src={CardBottom} alt="" />
                            <div className={c("style")}>
                                <Image src={Capture} alt="" />
                                <p>&nbsp;&nbsp;以中国特色社会主义理论为指导，深入贯彻落实党的、xx届四中全会和系列讲话精神，紧紧围绕“三建三争+”活动开展，以庆祝建党102周年为主题，通过形式多样、主题鲜明、广泛参与的庆祝活动，提升党组织的号召力、凝聚力和战斗力，使全局广大党员干部以更加饱满的热情迎接中国共产党成立102周年。</p>
                            </div>
                        </div>
                        <div className={c("wrapper")}>
                            <div className={c("title", "title-second")}>三会一课参与情况</div>
                            <img className={c("card-head")} src={CardHead} alt="" />
                            <img className={c("second")} src={CardMid} alt="" />
                            <img className={c("card-bottom")} src={CardBottom} alt="" />
                            <div className={c("three-meeting")}>
                                <BarWrapper width={350} height={300} option={detectionOption} />
                            </div>
                        </div>
                        <div className={c("wrapper")}>
                            <div className={c("title")}>党群活动</div>
                            <img className={c("card-head")} src={CardHead} alt="" />
                            <img className={c("third")} src={CardMid} alt="" />
                            <img className={c("card-bottom")} src={CardBottom} alt="" />
                            <div className={c("activity-table")}>
                                <div className={Styles["header"]}>
                                    {activityHead.map(e => {
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
                                    {activityTable.map(e => {
                                        return (
                                            <>
                                                <div className={Styles["column"]} key={e.key}>
                                                    <div className={c("branch")}>{e.column[0]}</div>
                                                    <div className={c("num")}>{e.column[1]}</div>
                                                    <div className={c("name")}>{e.column[2]}</div>
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

export default SmartPartyBuild
