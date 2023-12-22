import createStore, { UseStore } from "easy-zustand"

interface Ui {
    width: number
    height: number
    topHeight: number
    rightWidth: number
    bottomHeight: number
    leftWidth: number
    leftBlockWidth: number
    rightBlockWidth: number
    blockTitleHeight: number
    primaryColor: string
    colorPointList: [number, string, number, string, number, string]
    linearGradient: string
}

interface ComputedUi extends Ui {
    readonly leftBlockHeight: number
    readonly rightBlockHeight: number
    readonly leftContentWidth: number
    readonly rightContentWidth: number
    readonly leftContentHeight: number
    readonly rightContentHeight: number
}

const useOriginUi = createStore<Ui>({
    width: 0,
    height: 0,
    topHeight: 70,
    rightWidth: 500,
    bottomHeight: 160,
    leftWidth: 500,
    leftBlockWidth: 440,
    rightBlockWidth: 440,
    blockTitleHeight: 52,
    primaryColor: "#1890ff",
    colorPointList: [0, "rgba(4, 26, 47, 0.8)", 0.6, "rgba(4, 26, 47, 0.6)", 1, "rgba(4, 26, 47, 0)"],
    linearGradient: `var(--primary-8) 0%, var(--primary-0) 100%`
})

function useUi(): [ComputedUi, UseStore<Ui, false>["setState"]] {
    const [ui, setUi] = useOriginUi()

    return [
        {
            ...ui,
            leftBlockHeight: ui.height - 168,
            rightBlockHeight: ui.height - 168,
            leftContentWidth: ui.leftBlockWidth - 60,
            rightContentWidth: ui.rightBlockWidth - 60,
            leftContentHeight: ui.height - 168 - 92,
            rightContentHeight: ui.height - 168 - 92
        },
        setUi
    ]
}

export default useUi
