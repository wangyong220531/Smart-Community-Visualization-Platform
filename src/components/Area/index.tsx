import createStore from "easy-zustand"
import { ReactNode, useEffect, CSSProperties } from "react"
import useUi from "../../store/ui"
import useShow from "../../store/show"
import styles from "./index.module.less"

export interface AreaProps {
    children?: ReactNode
    position?: "left" | "right"
    className?: string
    style?: CSSProperties
}

export const useLeftAndRight = createStore({
    left: false,
    right: false
})

const Area: React.FC<AreaProps> = props => {
    const { children, style, position = "left" } = props

    const [show] = useShow()

    useEffect(() => {
        useLeftAndRight.setState({ [position]: !!children || !!show[`${position}Block`] })
    })

    const [ui] = useUi()

    const $: CSSProperties = {
        width: `${ui[`${position}BlockWidth`]}px`,
        height: `${ui[`${position}BlockHeight`]}px`,
        [position]: show[`${position}BlockisShown`] ? 0 : `-${ui[`${position}BlockWidth`]}px`,
        top: `${ui.topHeight}px`
    }

    return (
        <>
            {show[`${position}Block`] && (
                <div className={styles["area"]} style={{ ...$, ...style }}>
                    {show[`${position}Block`]}
                </div>
            )}
            <div className={styles["area"]} style={{ ...$, ...style, display: show[`${position}Block`] ? "none" : "block" }}>
                {children}
            </div>
        </>
    )
}

export const Left: React.FC<Omit<AreaProps, "position">> = props => {
    return <Area {...props} />
}

export const Right: React.FC<Omit<AreaProps, "position">> = props => {
    return <Area {...props} position="right" />
}
