import { Left, Right } from "../../components/Area"
import Block from "../../components/Block"
import Styles from "./index.module.less"
import WholeCard from "../../assets/WholeCard.png"
import { BarOption } from "react-simple-echarts"
import { Pie, PieOption } from "gskj-components"
import BarWrapper from "../../components/BarWrapper"
import { useState } from "react"
import TotalHousehold from "../../assets/ResidentStatistics/TotalHousehold.png"
import GneralOwner from "../../assets/ResidentStatistics/GeneralOwner.png"
import CareResipents from "../../assets/ResidentStatistics/CareResipents.png"
import OverSixtyYears from "../../assets/ResidentStatistics/OverSixtyYears.png"
import PartyMember from "../../assets/ResidentStatistics/PartyMember.png"
import Retirement from "../../assets/ResidentStatistics/Retirement.png"
import TopNav from "../../components/TopNav"
import LeftArrow from "../../assets/leftArrow.png"
import RightArrow from "../../assets/rightArrow.png"
import NanQiang from "../../assets/nanqiang.webp"
import WoLiBeiEr from "../../assets/wolibeier.webp"
import DeLaiWen from "../../assets/delaiwen.jpg"
import YaSuo from "../../assets/yasuo.jpg"
import TieNan from "../../assets/TieNan.jpg"
import RuiZi from "../../assets/RuiZi.jpg"
import ChuiShi from "../../assets/ChuiShi.jpg"
import DaChongZi from "../../assets/DaChongZi.jpg"
import MangSeng from "../../assets/MangSeng.jpg"
import Zero from "../../assets/LPLCapture/00.webp"
import One from "../../assets/LPLCapture/01.webp"
import Two from "../../assets/LPLCapture/02.webp"
import Three from "../../assets/LPLCapture/03.webp"
import Four from "../../assets/LPLCapture/04.webp"
import Five from "../../assets/LPLCapture/05.webp"
import CardHead from "../../assets/CardHead.png"
import CardMid from "../../assets/cardMid.png"
import CardBottom from "../../assets/cardBottom.png"
import { Image } from "antd"

function c(...classNameList: (string | undefined | null | boolean)[]) {
    return (classNameList.filter(item => typeof item === "string") as string[]).map(className => (className.startsWith("_") ? className.slice(1) : Styles[className])).join(" ")
}

interface StatisticsItem {
    imgSrc: string
    title: string
    data: number
    flag: boolean
}

interface Tip {
    key: number
    content: string
}

interface Recorder {
    key: number
    img: string
    name: string
    address: string
    time: string
}

interface GalleryItem {
    key: number
    img: string
}

const PplManage: React.FC = () => {
    const navList: string[] = ["性别构成", "年龄分布", "籍贯分析", "民族分析"]
    const residentOptions: BarOption = {
        xAxis: {
            show: false,
            type: "category"
        },
        yAxis: {
            show: false,
            max: 330
        },
        grid: [
            {
                backgroundColor: " rgba(0,0,0,0)"
            }
        ],
        series: [
            {
                data: [70, 90, 150, 180, 170, 190, 230, 100, 120, 70],
                type: "bar",
                showBackground: true,
                backgroundStyle: {
                    color: "transparent"
                },
                itemStyle: {
                    color: "#fab421",
                    borderRadius: [4, 4, 0, 0]
                }
            }
        ]
    }

    const flowOptions: BarOption = {
        xAxis: {
            show: false,
            type: "category"
        },
        yAxis: {
            show: false,
            max: 330
        },
        grid: [
            {
                backgroundColor: " rgba(0,0,0,0)"
            }
        ],
        series: [
            {
                data: [120, 230, 210, 130, 100, 160, 180, 240, 230, 190],
                type: "bar",
                showBackground: true,
                backgroundStyle: {
                    color: "transparent"
                },
                itemStyle: {
                    color: "#7de795",
                    borderRadius: [4, 4, 0, 0]
                }
            }
        ]
    }

    const overviewOptions: BarOption = {
        xAxis: {
            type: "category",
            data: ["19以下", "19-25", "26-30", "31-35", "36-40", "40以上"],
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
            data: [20, 40, 60, 80, 100],
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
                data: [20, 50, 60, 80, 70, 99],
                type: "bar",
                showBackground: true,
                backgroundStyle: {
                    color: "transparent"
                },
                barWidth: "14px",
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
                                color: "#215c91"
                            },
                            {
                                offset: 1,
                                color: "#6abdfa"
                            }
                        ]
                    }
                }
            }
        ]
    }

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
                radius: ["34%", "54%"],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: "center"
                },
                color: ["#00ffff", "#ffbe00", "#62b788", "#0071ff"],
                emphasis: {
                    label: {
                        show: false,
                        fontSize: 10
                    }
                },
                data: [
                    { value: 1048, name: "独居老人" },
                    { value: 735, name: "残疾人" },
                    { value: 580, name: "儿童人员" },
                    { value: 484, name: "重症重精" }
                ]
            }
        ]
    }

    const statisticsList: StatisticsItem[] = [
        {
            imgSrc: TotalHousehold,
            title: "总住户",
            data: 294,
            flag: false
        },
        { imgSrc: GneralOwner, title: "总业主", data: 3094, flag: true },
        { imgSrc: CareResipents, title: "关爱对象", data: 45, flag: true },
        { imgSrc: OverSixtyYears, title: "60以上老人", data: 294, flag: false },
        { imgSrc: PartyMember, title: "党员", data: 34, flag: true },
        { imgSrc: Retirement, title: "退休人员", data: 235, flag: true }
    ]

    const tipList: Tip[] = [
        {
            key: 0,
            content: "独居老人"
        },
        {
            key: 1,
            content: "残疾人"
        },
        {
            key: 2,
            content: "儿童人员"
        },
        {
            key: 3,
            content: "重症重精"
        }
    ]

    const [itemClicked, setItemClicked] = useState("")
    const navItemClick = (e: string) => {
        setItemClicked(e)
    }

    const recorderList: Recorder[] = [
        {
            key: 0,
            img: NanQiang,
            name: "男枪",
            address: "珠海路1001号",
            time: "2023-03-24 12:01:55"
        },
        {
            key: 1,
            img: WoLiBeiEr,
            name: "沃利贝尔",
            address: "淮海路2001号",
            time: "2023-03-22 15:44:14"
        },
        {
            key: 2,
            img: DeLaiWen,
            name: "德莱文",
            address: "明远路1003号",
            time: "2023-02-25 16:22:23"
        },
        {
            key: 3,
            img: YaSuo,
            name: "亚索",
            address: "柯山路1006号",
            time: "2023-05-30 21:00:03"
        },
        {
            key: 5,
            img: TieNan,
            name: "铁男",
            address: "前海路1008号",
            time: "2023-09-30 21:00:03"
        },
        {
            key: 6,
            img: RuiZi,
            name: "瑞兹",
            address: "环岛路1006号",
            time: "2021-05-30 22:00:03"
        },
        {
            key: 7,
            img: ChuiShi,
            name: "锤石",
            address: "海岸城1006号",
            time: "2023-11-30 11:00:03"
        },
        {
            key: 8,
            img: MangSeng,
            name: "盲僧",
            address: "东风路1006号",
            time: "2023-02-30 21:00:03"
        },
        {
            key: 9,
            img: DaChongZi,
            name: "大虫子",
            address: "翔宇大道1006号",
            time: "2023-05-30 17:00:03"
        }
    ]
    const gallery: GalleryItem[] = [
        {
            key: 0,
            img: Zero
        },
        {
            key: 1,
            img: One
        },
        {
            key: 2,
            img: Two
        },
        {
            key: 3,
            img: Three
        },
        {
            key: 4,
            img: Four
        },
        {
            key: 5,
            img: Five
        }
    ]

    return (
        <>
            <TopNav />
            <Left>
                <Block title>
                    <div className={Styles["container"]}>
                        <div className={Styles["wrapper"]}>
                            <div className={Styles["title"]}>人员数量</div>
                            <img src={WholeCard} alt="" />
                            <div className={Styles["count"]}>
                                <div className={Styles["box"]}>
                                    <div className={Styles["info"]}>常住人口数量</div>
                                    <div className={Styles["data"]}>
                                        5244<span style={{ fontSize: "14px", fontWeight: "600", marginLeft: "2px" }}>人</span>
                                    </div>
                                    <div className={Styles["bar-chart"]}>
                                        <BarWrapper width={200} height={50} option={residentOptions} />
                                    </div>
                                </div>
                                <div className={Styles["box"]}>
                                    <div className={Styles["info"]}>流动人口数量</div>
                                    <div className={Styles["data"]}>
                                        5244<span style={{ fontSize: "14px", fontWeight: "600", marginLeft: "2px" }}>人</span>
                                    </div>
                                    <div className={Styles["bar-chart"]}>
                                        <BarWrapper width={200} height={50} option={flowOptions} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={Styles["wrapper"]}>
                            <div className={Styles["title"]}>居民统计</div>
                            <img src={WholeCard} alt="" />
                            <div className={Styles["statistics"]}>
                                {statisticsList.map(item => {
                                    return (
                                        <>
                                            <div className={Styles["box"]} key={item.title}>
                                                <img src={item.imgSrc} alt="" />
                                                <div className={Styles["info"]}>
                                                    <div className={Styles["mini-title"]}>{item.title}</div>
                                                    <div className={Styles["data"]}>
                                                        {item.data}
                                                        <span style={{ fontSize: "8px", fontWeight: "600", marginLeft: "2px" }}>{item.flag ? "人" : "户"}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={Styles["wrapper"]}>
                            <div className={Styles["title"]}>人员概况</div>
                            <img className={Styles["spec-img"]} src={WholeCard} alt="" />
                            <div className={Styles["overview"]}>
                                <div className={Styles["header"]}>
                                    {navList.map(item => {
                                        return (
                                            <>
                                                <div key={item} className={Styles["navItem"]} style={itemClicked === item ? { backgroundColor: "#ff6707", border: "1px solid #ffd625", fontWeight: 600 } : {}} onClick={() => navItemClick(item)}>
                                                    {item}
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                                <div className={Styles["overview-barChart"]}>
                                    <BarWrapper width={400} height={240} option={overviewOptions} />
                                </div>
                            </div>
                        </div>
                        <div className={Styles["wrapper"]}>
                            <div className={Styles["title"]}>关怀人员分析</div>
                            <img src={WholeCard} className={Styles["spec-img2"]} alt="" />
                            <div className={Styles["analysis"]}>
                                <div className={Styles["tips"]}>
                                    {tipList.map(e => {
                                        return (
                                            <>
                                                <div className={Styles["item"]} key={e.key}>
                                                    {e.key === 0 && <div className={c("color", "cyan")}></div>}
                                                    {e.key === 1 && <div className={c("color", "yellow")}></div>}
                                                    {e.key === 2 && <div className={c("color", "green")}></div>}
                                                    {e.key === 3 && <div className={c("color", "blue")}></div>}
                                                    <div className={Styles["text"]}>{e.content}</div>
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                                <div className={Styles["piechart"]}>
                                    <Pie width={200} height={200} option={pieOption}></Pie>
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
                            <div className={Styles["title"]}>实时出行记录</div>
                            <div className={Styles["card"]}>
                                <img src={CardHead} alt="" />
                                <img src={CardMid} alt="" />
                                <img src={CardBottom} alt="" />
                            </div>
                            <div className={Styles["recorder-list"]}>
                                {recorderList.map(item => {
                                    return (
                                        <>
                                            <div className={Styles["box"]} key={item.key}>
                                                <Image className={c("avatar")} src={item.img} alt="" />
                                                <div className={Styles["right"]}>
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
                        <div className={Styles["capture"]}>
                            <div className={Styles["title"]}>监控抓拍</div>
                            <img src={WholeCard} alt="" />
                            <div className={Styles["gallery"]}>
                                <img className={c("arrow", "left-arrow")} src={LeftArrow} alt="" />
                                <img className={c("arrow", "right-arrow")} src={RightArrow} alt="" />
                                {gallery.map(item => {
                                    return (
                                        <>
                                            <div className={Styles["wrapper"]} key={item.key}>
                                                <Image className={c("capture-img")} src={item.img} alt="" />
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

export default PplManage
