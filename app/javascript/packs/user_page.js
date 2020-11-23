import $ from 'jquery'
import axios from 'modules/axios'


  document.addEventListener('turbolinks:load', () => {
  const id = $('#account-show').data()
    const accountId = id.accountId
    axios.get(`/accounts/${accountId}/follows`)
    .then((response) => {
      const hasFollow = response.data.hasFollow
  
      if (hasFollow) {
        $('.follow-btn').removeClass('hidden')
      } else {
        $('.unfollow-btn').removeClass('hidden')
      }
    })

      $('.follow-btn').on('click', () => {
      axios.post(`/accounts/${accountId}/follows`)
      .then((response) => {
        const status = response.data.status
        if (status === 'ok') {
          $('.follow-btn').addClass('hidden')
          $('.unfollow-btn').removeClass('hidden')
        }
      })
      .catch((e) => {
        window.alert('Error')
        console.log(e)
      })
      const id = $('#follower-count').textContent
      const number = parseFloat(id);
      console.log(number)
      debugger
      // $('#follower-count').innerHTML = number;
      // debugger
     
    })

    $('.unfollow-btn').on('click', () => {
      axios.post(`/accounts/${accountId}/unfollows`)
      .then((response) => {
        const status = response.data.status
        if (status === 'ok') {
          $('.follow-btn').removeClass('hidden')
          $('.unfollow-btn').addClass('hidden')
        }
      })
      .catch((e) => {
        window.alert('Error')
        console.log(e)
      })
    })
  })



    window.addEventListener('load', () => {
  const uploader = document.querySelector('.none');
  uploader.addEventListener('change', (e) => {//.noneの値の変更が確定された時
    const file = uploader.files[0];// files[0] 選択したファイルオブジェクトを取得する
    const reader = new FileReader();// FileReaderオブジェクトをインスタンス化.a1FileReaderはオブジェクトからデータを読み込むことのみを目的としたオブジェクト
    reader.readAsDataURL(file);// readAsDataURL(file) file画像の読み込み。データを base64 データurl にエンコードします
    reader.onload = () => {// onload 読み込みが成功したか調べる
      const image = reader.result;// result readerの読み込み成功後に、中身のデータを取得する。（読み取り専用）
      document.querySelector('.avatar').setAttribute('src', image);
    }
  })
})