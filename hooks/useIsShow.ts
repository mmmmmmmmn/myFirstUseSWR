import { atom, useRecoilValue, useSetRecoilState } from 'recoil'

const isShowAtom = atom({
    key: 'isShow',
    default: false,
})

export const useIsShow = (): boolean => {
    return useRecoilValue(isShowAtom)
}

export const useToggle = (): VoidFunction => {
    const set = useSetRecoilState(isShowAtom)

    const toggle = () => {
        set((isShow) => !isShow)
    }

    return toggle
}
