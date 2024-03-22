import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { closeModal } from '../../../store/slices/modalSlice'
import styles from './modal.module.scss'

const ModalWindow = () => {
  const isOpen = useSelector((state) => state.modal.isOpen)
  const dispatch = useDispatch()
  const [close, setClose] = useState(false)
  const type = useSelector((state) => state.modal.type)

  const closeModalHandler = () => {
    setTimeout(() => {
      dispatch(closeModal())
      setClose(false)
    }, 500)
  }

  if (!isOpen) {
    return null
  }

  return (
    <div
      className={`${styles.modal} ${close && styles.open}`}
      onClick={closeModalHandler}
    >
      <div className={styles.modal__content} onClick={(e) => e.stopPropagation}>
        {type === 'about' ? (
          <p className={styles.modal__text}>
            Чертог славы поможет привлечь уже снискавшие мировую славу мысли -
            как реальные, так и вымышленны. Великие мысли вызывают поток
            вдохновения, приводящий в итоге к появлению новых идей.
          </p>
        ) : (
          <p className={styles.modal__text}>
            Выберете цитату на любую тему, которая вас заинтересует. Например,
            если вы хотите найти вдохновение для своей работы, выберите цитаты о
            творчестве или о работе. Когда вы выбрали цитату, которая вам
            нравится, задумайтесь: что она вам говорит? Как она может помочь вам
            в создании своих идей? Попробуйте записать несколько идей, которые
            пришли вам в голову после прочтения цитаты. Можете использовать
            блокнот или приложение на смартфоне. Не останавливайтесь на одной
            цитате! Попробуйте прочитать много цитат на разные темы, чтобы
            получить максимум вдохновения.
          </p>
        )}
      </div>
      <button
        className={styles.modal__btn}
        onClick={() => {
          setClose(true)
          closeModalHandler()
        }}
      >
        закрыть
      </button>
    </div>
  )
}

export default ModalWindow
