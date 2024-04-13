import React from 'react'
import Header from './Header'
import CardContent from './CardContent'
import { GenericObject } from '../../interfaces'
import { useRecoilState } from 'recoil'
import { modalState } from '../../atoms/modalState'

const FeedCard = ({ item }: GenericObject) => {
  const [state, setState] = useRecoilState(modalState)
  return (
    <div
      className="feedcard"
      onClick={() => setState({ state: true, itemId: item?.briefref })}
    >
      <Header item={item?.brand} />
      <CardContent item={item} />
    </div>
  )
}

export default FeedCard
