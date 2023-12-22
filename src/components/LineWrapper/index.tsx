import { Line, LineProps } from "gskj-components"
import { FC, CSSProperties } from "react"

export type LineWrapperProps = LineProps & {
    left?: number
    top?: number
    right?: number
    bottom?: number
}

const LineWrapper: FC<LineWrapperProps> = props => {
    const { left = 0, top = 0, right = 0, bottom = 0, ...leftProps } = props

    const { width, height } = leftProps

    const style = { width: `${width - left - right}px`, height: `${height - top - bottom}px`, "--left": `${left * -1}px`, "--top": `${top * -1}px` } as CSSProperties

    return (
        <div className="chart-wrapper" style={style}>
            <Line {...leftProps} />
        </div>
    )
}

export default LineWrapper
