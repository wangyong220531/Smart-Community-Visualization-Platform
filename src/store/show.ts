import createStore from "easy-zustand"

export interface Show {
    leftBlock?: JSX.Element
    rightBlock?: JSX.Element
    leftBlockisShown: boolean
    topBlockisShown: boolean
    rightBlockisShown: boolean
    bottomBlockisShown: boolean
}

const useShow = createStore<Show>({
    leftBlockisShown: true,
    topBlockisShown: true,
    rightBlockisShown: true,
    bottomBlockisShown: true
})

export default useShow
