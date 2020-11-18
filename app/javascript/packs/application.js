// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
// 
require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import $ from 'jquery'
import axios from 'axios'
import { csrfToken } from 'rails-ujs'
axios.defaults.headers.common['X-CSRF-Token'] = csrfToken()
// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

const appendNewComment = (comment) => {
  $('.comment-content').append(//appendはタグの中にhtmlのタグを追加していく
    `<div><p>${(comment.content)}</p></div>`
  )
}
// const appendNewUser = (user) => {
//   $('.user-account').append(
//     `<div><p>${(user.account)}</p></div>`
//   )
// }




document.addEventListener('turbolinks:load', () => {
const dataset = $('#article-show').data()
const articleId = dataset.articleId

axios.get(`/articles/${articleId}/comments`)
.then((response) => {
  const comments = response.data
  // const users = response.data.user
  comments.forEach((comment) => {
    appendNewComment(comment)
  })
  // users.forEach((user) => {
  //   appendNewUser(user)
  // })
})
.catch((error) => {
  window.alert('失敗')
})

$('.comment-btn').on('click', () => {
  $('.comment-post').removeClass('hidden')
})

$('.comment-post-btn').on('click', () => {
  const content = $('#comment_content').val()
  if (!content)  {
    window.alert('コメントを入力してください')
  } else {
    axios.post(`/articles/${articleId}/comments`, {
      comment: { content: content }
    })
  .then((res) => {
    const comment = res.data.comment
    // const user = res.data.user
    appendNewComment(comment)
    // appendNewUser(user)
  })
  $('.comment-post').addClass('hidden')
  }
})




axios.get(`/articles/${articleId}/likes`)
  .then((response) => {
    const hasLiked = response.data.hasLike
    if (hasLiked)  {
      $('.active-heart').removeClass('hidden')
    } else {
      $('.inactive-heart').removeClass('hidden')
    }
  })

  $('.inactive-heart').on('click', () => {
    axios.post(`/articles/${articleId}/likes`)
    .then((response) => {
      if (response.data.status === 'ok') {
        $('.active-heart').removeClass('hidden')
        $('.inactive-heart').addClass('hidden')
      }
    })
    .catch((e) => {
      window.alert('Error')
      console.log(e)
    })
  })

  $('.active-heart').on('click', () => {
    axios.delete(`/articles/${articleId}/likes`)
    .then((response) => {
      if (response.data.status === 'ok') {
        $('.inactive-heart').removeClass('hidden')
        $('.active-heart').addClass('hidden')
      }
    })
  
    .catch((e) => {
      window.alert('Error')
      console.log(e)
    })
  })

})
