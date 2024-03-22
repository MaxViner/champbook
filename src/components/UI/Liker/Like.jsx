import React from 'react'
import {
  addToFavorites,
  checkFavorite,
  removeFromFavorites,
} from '../../../utils/localStorage'
import './Heart.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export const Like = ({ id, number, isFilled, setIsFilled, onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      fill={isFilled ? 'red' : 'none'}
      stroke="red"
      strokeWidth="2"
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      <path d="M20 4.5C15.5 1 8.5 3.5 8.5 9c0 4.5 4.5 6.5 11.5 12.5C26.5 15.5 31 13.5 31 9c0-5.5-7-8-11.5-4.5z" />
    </svg>
  )
}

export const LikeSection = React.memo(
  ({ id, citateNumber, isFilled, isFavorite, setIsFilled, onHeartClick }) => {
    const LikeHandler = (id, number) => {
      const isFavorite = checkFavorite(id, number)
      console.log(id, number)
      console.log(isFavorite)
      if (onHeartClick) {
        onHeartClick()
      }
      if (isFavorite) {
        setIsFilled(false)
        removeFromFavorites(id, number)
        toast('Удалено из избранного')
      } else {
        setIsFilled(true)
        addToFavorites(id, number)
        toast('Добавлено в избранное')
      }
    }

    return (
      <>
        <div className="heart">
          <Like
            onClick={() => LikeHandler(id, citateNumber)}
            id={id}
            number={citateNumber}
            isFilled={isFavorite || isFilled}
            setIsFilled={setIsFilled}
          />
        </div>
        <ToastContainer />
      </>
    )
  },
)
