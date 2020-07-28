import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'



const SingleArticle = (props) => {

  const [articles, setArticles] = useState({})
  // const [reaction, setReaction] = useState({

  //   image: '',
  //   name: ''
  // })

  function handleSubmit1() {
    const reaction = {
      image: '😠',
      name: 'angry'
    }
    console.log(reaction)
    // setReaction(reaction)

    // const emoji = {
    //   america: '🇺🇸',
    //   uk: '🇬🇧'
    // }
    // const newItem = { ...item, flag_image: countryEmojiMap[country] }
    // delete newItem['author']
    // delete newItem['description']
    // delete newItem['source']
    // console.log(newItem)

    const token = localStorage.getItem('token')
    axios.post(`/api/singlearticle/${props.match.params.id}/reaction`, reaction
      , {
        headers: { Authorization: `Bearer ${token}` }
      }

    )
    // .then((res) => props.history.push(`/singlearticle/${res.data.id}`))
  }


  useEffect(() => {
    axios.get(`/api/singlearticle/${props.match.params.id}`)
      .then(axiosResp => {
        setArticles(axiosResp.data)
        console.log('AXIOSRESP.DATA:', axiosResp.data)
      })
  }, [])

  return <section className="single-article-container">
    <div className="single-article-card">
      <h3>{articles.title}</h3>
      <h2>{articles.flag_image}</h2>
      <a href={articles.url} target='_blank' rel='noreferrer'> {articles.url} </a>
      <img src={articles.urlToImage} />
      <p>{articles.publishedAt}</p>
      <p>{articles.content}</p>
      <button onClick={(event) => {
        event.preventDefault()
        handleSubmit1()
      }} >😠</button>
      {/* <button onClick={(event) => {
        event.preventDefault()
        handleSubmit2(reaction)
      }}>😊</button>
      <button onClick={(event) => {
        event.preventDefault()
        handleSubmit3(reaction)
      }}>😂</button>
      <button onClick={(event) => {
        event.preventDefault()
        handleSubmit4(reaction)
      }}>😲</button>
      <button onClick={(event) => {
        event.preventDefault()
        handleSubmit5(reaction)
      }}>😓</button>
 */}
    </div>
  </section>
}

export default SingleArticle

