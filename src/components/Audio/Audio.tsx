import s from "./Audio.module.css"
interface albomInter {
    alboms: {
        title: string
        albom: string
    }
}
interface trackInter {
    tracks: {
        muzic: string
    }
}
interface propsAudio {
    alboms: albomInter[]
    tracks: trackInter[]
}
function Audio({ alboms, tracks }: propsAudio) {
    const albomsPush = []
    for (let i = 0; i < alboms.length; i++) {
        albomsPush.push(
            <div>
                <img src={alboms[i].albom} className={s.albom}></img>
                <div className={s.albomText}>{alboms[i].title}</div>
            </div>
        )
    }
    const audioPush = []
    for (let i = 0; i < tracks.length; i++) {
        audioPush.push(
            <div>
                <audio controls src={tracks[i].muzic}></audio>
            </div>
        )
    }
    return (
        <div className={s.beg}>
            <div className={s.con}>
                <div className={s.con2}>
                    {albomsPush}
                </div>
                <div className={s.con3}>
                    {audioPush}
                </div>
            </div>
        </div>
    )
}
export default Audio