import s from "./Audio.module.css"
interface propsaudio {
    albom: string
    muzic: string
    muzic2: string
    muzic3: string
}
function Audio({ albom, muzic, muzic2, muzic3 }: propsaudio) {
    return (
        <div className={s.beg}>
            <div className={s.con}>
                <div className={s.con2}>
                    <div>
                        <img src={albom} className={s.albom}></img>
                    </div>
                    <div className={s.albomText}>KBC MUZIC5</div>
                </div>
                <div className={s.con3}>
                    <audio controls src={muzic}></audio>
                    <audio controls src={muzic2}></audio>
                    <audio controls src={muzic3}></audio>
                </div>
            </div>
        </div>
    )
}
export default Audio