import React, { useEffect, useState } from 'react'
import './comments.css'
import { GenericObject } from '../../interfaces/index'

const CommentCard = ({ comment }: GenericObject) => {
  return (
    <div className="comment__card">
      <div className="comment__card--image">
        <img src={comment?.user?.avatar} alt="avatar" />
      </div>
      <div>
        <h4>{comment?.user?.name}</h4>
        <p>{comment?.comment}</p>
      </div>
    </div>
  )
}

const Comments = ({ item }: GenericObject) => {
  const [comments, setComments] = useState<GenericObject[]>([])

  const fetchComments = async () => {
    await fetch('http://localhost:4000/api/v1/comments')
      .then((res) => res.json())
      .then((json) => setComments(json.data))
      .catch((err) => console.error(err))
  }

  useEffect(() => {
    fetchComments()
  }, [])

  return (
    <div className="comments">
      <div className="comments__header">
        <div className="comments__header--logo">
          <img src={item?.brand?.logo} alt="logo" />
        </div>
        <h3>{item?.brand?.name}</h3>
      </div>
      <div className="comments__box">
        {comments?.length &&
          comments?.map((comment, index) => (
            <CommentCard key={index} comment={comment} />
          ))}
      </div>
    </div>
  )
}

export default Comments
