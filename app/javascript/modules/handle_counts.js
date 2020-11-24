import $ from 'jquery'
import axios from 'modules/axios'



const btnAndCountsDisplay = (accountId) => {
  axios.get(`/accounts/${accountId}/follows`)
  .then((response) => {
    const hasFollow = response.data.hasFollow
    const follower = response.data.follower
    const following = response.data.following
    $('#follower-count').text(follower)
    $('#following-count').text(following)
    if (hasFollow) {
      $('.unfollow-btn').removeClass('hidden')
      // $('#follower-count').textContent = `<p>${follower}</p>`
    } else {
      $('.follow-btn').removeClass('hidden')
      // $('#follower-count').textContent = `<p>${follower}</p>`
    }
  })
  .catch((e) => {
    window.alert('Error')
    console.log(e)
  })
}

export {
  btnAndCountsDisplay 
}