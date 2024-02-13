import React from 'react'
import styles from '../FirstPage.module.scss'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const FirstPagaComponent = () => {

  // const navigate = useNavigate();
  // const onStartBtn = async () => {
  //   try {
  //     const response = await axios.get('/question')
  //     console.log(response);
  //     navigate('/question', { state: { value: response.data } })
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  return (
    <div id='root' className={styles.root} >

      <div className={styles.FirstPageContainer}>

        <div className={styles.FirstPageTop}>
          <div style={{ width: '100%', height: '100px' }} />
          <div className='Images'>
            <img className={styles.MainPizzaBoy} src='Image/pizzaBoy.png' alt='PizzaBoy' />
            <img className={styles.MainPizzaIcon1} src='Image/pizzaIcon.png' alt='PizzaIcon' />
            <img className={styles.MainPizzaIcon2} src='Image/pizzaIcon.png' alt='PizzaIcon' />
          </div>
          <p>내가 만약 <span>피자</span>라면?</p>
          <img className={styles.FirstPageMainImg} src='Image/pizzaBoy.png' alt='PizzaBoy' />
          <button className={styles.FirstPageStartBtn} type='submit'>시작하기</button>
        </div>

        <div className={styles.FirstPageBottom}>
          <img src='Image/djSimpson.png' alt='simpsonPizza' />
        </div>
      </div>
    </div>
  )
}

export default FirstPagaComponent
