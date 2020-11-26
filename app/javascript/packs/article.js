import $ from 'jquery'
import axios from 'modules/axios'
import {
  listenInactiveHeartEvent,
  listenActiveHeartEvent
}from 'modules/handle_heart'
const handleHeartDisplay = (hasLiked) => {
    if (hasLiked) {
      $('.active-heart').removeClass('hidden')
    } else {
      $('.inactive-heart').removeClass('hidden')
    }
}

const handleControllerForm = () => {
  $('.comment-btn').on('click', () => {
    $('.comment-post').removeClass('hidden')
  })
}


const appendNewComment = (comment, user) => {
  $('.comment-info').append(//appendはタグの中にhtmlのタグを追加していく
    `<div class="user-account"><p>${(comment.content)}</p></div>`
  )
  $('.comment-info').append(
    `<div class="comment-content"><p>${(comment.user.account)}</p></div>`
  )
  $('.comment-image').append(
    `<div><img class="comment-avatar"src="${(user.avatar_url)}"</img></div>`
  )
}


document.addEventListener('turbolinks:load', () => {
  const dataset = $('#article-show').data()
  const articleId = dataset.articleId
  
  axios.get(`/articles/${articleId}/comments`)
    .then((response) => {
      const comments = response.data
      comments.forEach((comment) => {
        const user = comment.user
        appendNewComment(comment, user)
      })
    })
    .catch((error) => {
      window.alert('失敗')
    })



  $('.comment-post-btn').on('click', () => {
    const content = $('#comment_content').val()
    if (!content) {
      window.alert('コメントを入力してください')
    } else {
      axios.post(`/articles/${articleId}/comments`, {
        comment: { content: content }
      })
        .then((res) => {
          const comment = res.data
          const user = comment.user
          appendNewComment(comment, user)
        })
      $('.comment-post').addClass('hidden')
      $('#comment_content').val('')
    }
  })

  axios.get(`/articles/${articleId}/likes`)
    .then((response) => {
      const hasLiked = response.data.hasLike
      handleHeartDisplay(hasLiked)
    })

  handleControllerForm()


  listenInactiveHeartEvent(articleId)
  listenActiveHeartEvent(articleId)
})
