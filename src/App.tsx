import { useState } from 'react'
import s from './App.module.css'
import Audio from './components/Audio/Audio'
import Header from './components/Header/Header'
import Kategorii from './components/Kategorii/Kategorii'
const ganars = [

  { ganar: "Рок" },
  { ganar: "Поп" },
  { ganar: "Лирика" },
  { ganar: "Класика" },
  { ganar: "Реп" },

]
const alboms = [
  {
    title: "KBC MUZIC5",
    albom: "https://s1.hitmo.net/album/000/109/808/508229_large.jpg",
  },
  {
    title: "Часть чего-то большего",
    albom: "https://is1-ssl.mzstatic.com/image/thumb/Music62/v4/18/08/7c/18087c3e-2899-70ba-f3fc-4cfba1924985/191061114437.jpg/600x600bf-60.jpg",
  },
]
const tracks = [

  { muzic: "https://pdftourl.net/audio/1789024857291-c9c696de-c0c5-4dc3-89b3-7ce41f4119c2.mp3" },
  { muzic: "https://pdftourl.net/audio/1789024974269-6380d0de-0264-4853-953e-3d0be7e2cc00.mp3" },
  { muzic: "https://pdftourl.net/audio/1789024994404-652c32ac-df7a-4fcf-986d-76beec4f1943.mp3" },
  { muzic: "https://mp3tourl.com/audio/1789089897257-cc44d358-5122-47e3-a69a-0ca09c0274da.mp3" },
  { muzic: "https://mp3tourl.com/audio/1789089951363-57cf338a-6955-48bf-b77c-b75554687e63.mp3" },
  { muzic: "https://mp3tourl.com/audio/1789089976435-afb56de8-a100-4f50-94ea-5d1034a35f9c.mp3" },
  { muzic: "https://mp3tourl.com/audio/1789090057928-e9592bf3-5788-4051-bb57-63a6b2352f44.mp3" },


]
function App() {
  return (
    <div className={s.app}>
      <div className={s.header}>
        <Header></Header>
      </div>
      <div className={s.audio}>
        <Audio alboms={alboms} tracks={tracks}></Audio>
      </div>
      <Kategorii ganar={ganars} ></Kategorii>
    </div>
  )
}


export default App
