import s from "./Kategorii.module.css"
interface props {
    ganar1: string
    ganar2: string
}
function Kategorii({ ganar1, ganar2 }: props) {
    return (
        <>
            <div className={s.beg}>
                <div className={s.gan}> {ganar1}</div>
                <div className={s.gan}>{ganar2}</div>
            </div>
        </>
    )
}
export default Kategorii