import { useState } from 'react'
import photo from "/src/assets/photo.jpg"
import './CV.css'
import Card  from "./Components/Card"

function CV() {


  return (
    <>
    <div className='cv'>
      <Card id="top-card">
        <div className="card-text">
          <h2>Daniil Vlasov</h2>
          <p>Perm, Russia</p>
        </div>
        <img className="avatar" src={photo}/>   
      </Card>

      <h1>Опыт работы</h1>

      <Card>

        <div className='card-row'>
          <div className='borderBox job-header'>
            <h3>Программист-стажер</h3>
            <h4>ООО "МУЛЬТИЛАБ"</h4>
          </div>

          <div className='work-duration'>
            <h5>9 месяцев</h5>
            <p>Ноябрь 2023 – июль 2024</p>
          </div>
        </div>
        
        <div className='card-row'>
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
        </div>
        
        
      </Card>
      
      </div>
    </>
  )
}

export default CV
