import { CloseOutlined } from "@ant-design/icons"
import { CSSProperties, ReactNode, FC } from "react"
import useShow from "../../store/show"
import styles from "./index.module.less"

function c(...classNameList: (string | undefined | null | boolean)[]) {
    return (classNameList.filter(item => typeof item === "string") as string[]).map(className => (className.startsWith("_") ? className.slice(1) : styles[className])).join(" ")
}

function o(className: string | undefined | null | boolean) {
    return typeof className === "string" ? `_${className}` : className
}

export interface BlockProps {
    className?: string
    style?: CSSProperties
    icon?: ReactNode
    title: ReactNode
    children?: ReactNode
    mainHeight?: number
    modalPosition?: "left" | "right"
    mainClassName?: string
    mainStyle?: CSSProperties
}

const Block: FC<BlockProps> = props => {
    const { className, style, title, children, icon, mainHeight, modalPosition, mainClassName, mainStyle } = props
    return (
        <div className={`${styles["block"]} ${className || ""}`} style={style}>
            {!!modalPosition && (
                <div className={styles["close"]} onClick={() => useShow.setState({ [`${modalPosition}Block`]: undefined })} role="button">
                    <CloseOutlined />
                </div>
            )}
            <div className={styles["title"]}>
                {icon && <div className={styles["icon-wrapper"]}>{icon}</div>}
                <div className={styles["title-text"]}>{title}</div>
            </div>
            <div className={c("main", o(mainClassName))} style={{ height: mainHeight ? `${mainHeight}px` : "auto", ...mainStyle }}>
                {children}
            </div>
        </div>
    )
}

export default Block
