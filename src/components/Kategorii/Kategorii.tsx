import s from "./Kategorii.module.css"
interface props {
    ganar: {
        ganar: string
    }[]
}
function Kategorii({ ganar }: props) {
    const generTegPush = []
    for (let i = 0; i < ganar.length; i++) {
        generTegPush.push(
            <div className={s.gan}>
                {ganar[i].ganar}
            </div>
        )
    }

    return (
        <>
            <div className={s.beg}>
                {generTegPush}
            </div>
        </>
    )
}
export default Kategorii