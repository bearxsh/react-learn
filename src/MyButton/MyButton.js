import './MyButton.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Profile() {
  return <img src="https://i.imgur.com/MK3eW3As.jpg" />
}

function MyButton() {
  const [title, setTitle] = useState('James Bone')

//   useEffect(() => {
//     axios
//       .get('https://jsonplaceholder.typicode.com/posts?_limit=10')
//       .then((res) => {
//         console.log(res.data[0].title)
//         setTitle(res.data[0].title)
//       })
//       .catch((err) => {
//         console.log(err)
//       })
//   }, [])

  function handleClick() {
    if (title == 'James Bone') {
      setTitle('alibaba')
    } else {
      setTitle('James Bone')
    }
  }

  return (
    <>
      <button className="a b" onClick={handleClick}>
        我是按钮
      </button>
      <span className="c">{title}</span>
      <Profile />
    </>
  )
}

export default MyButton
