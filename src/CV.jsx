import { useState } from 'react'
import photo from "/src/assets/photo.jpg"
import './CV.css'
import Card  from "./Components/Card"

function CV() {


  return (
    <>
      <Card id="top-card">
        <div className="card-text">
          <h2>Daniil Vlasov</h2>
          <p>Perm, Russia</p>
        </div>
        <img className="avatar" src={photo}/>   
      </Card>

      <h1>Опыт работы</h1>

      <Card>
        <h3>ООО "МУЛЬТИЛАБ" - Программист-стажер</h3>
        <p>Ноябрь 2023 – июль2024 (9 месяцев)</p>
        <ul>
          <li>Разработка 
            VR-игры на Unity (C#)</li>
          <li>Анализ и улучшение кода для 
            повышения производительности и 
            снижения времени загрузки.</li>
          <li>Участие в командной разработке, 
            используя GitLab для
          управления версиями и совместной 
          работы над проектом.</li>
          <li>Обеспечение сборки и тестирование игры 
            на последних
          стадиях разработки проекта</li>
        </ul>
      </Card>

      
    </>
  )
}

export default CV
