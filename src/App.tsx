import { useState } from 'react'
import s from './App.module.css'
import Audio from './components/Audio/Audio'
import Header from './components/Header/Header'
import Kategorii from './components/Kategorii/Kategorii'
const state = [
  {ganar1:"Рок", ganar2:"не знаю больше жанров",albom:"https://s1.hitmo.net/album/000/109/808/508229_large.jpg", muzic:"https://pdftourl.net/audio/1789024857291-c9c696de-c0c5-4dc3-89b3-7ce41f4119c2.mp3",muzic2:"https://pdftourl.net/audio/1789024974269-6380d0de-0264-4853-953e-3d0be7e2cc00.mp3",muzic3:"https://pdftourl.net/audio/1789024994404-652c32ac-df7a-4fcf-986d-76beec4f1943.mp3"}
  
]

function App() {
  const { ganar1,ganar2,albom,muzic,muzic2,muzic3} = state[0]
  return (
    <div className={s.app}>
      <div className={s.header}>
        <Header></Header>
      </div>
      <div className={s.audio}>
        <Audio albom={albom} muzic={muzic} muzic2={muzic2} muzic3={muzic3}></Audio>
      </div>
      <Kategorii  ganar1={ganar1} ganar2={ganar2}></Kategorii>
    </div>
  )
}


export default App
