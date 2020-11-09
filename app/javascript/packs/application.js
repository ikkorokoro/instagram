// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
// 
require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
// window.addEventListener('load', () => {//画像までの読み込みを行う
//   const uploader = document.querySelector('.file');
//   uploader.addEventListener('change', (e) => {//.fileの値の変更が確定された時
//     const file = uploader.files[0];// files[0] 選択したファイルオブジェクトを取得する
//     const reader = new FileReader();// FileReaderオブジェクトをインスタンス化.a1FileReaderはオブジェクトからデータを読み込むことのみを目的としたオブジェクト
//     reader.readAsDataURL(file);// readAsDataURL(file) file画像の読み込み。データを base64 データurl にエンコードします
//     reader.onload = () => {// onload 読み込みが成功したか調べる
//       const image = reader.result;// result readerの読み込み成功後に、中身のデータを取得する。（読み取り専用）
//       document.querySelector('.avatar').setAttribute('src', image);
//     }
//   });
// });
