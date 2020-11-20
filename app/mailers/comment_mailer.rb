class CommentMailer < ApplicationMailer
  def comment_content(user)
    @user = user
    mail to: user.email, subjuct: '[お知らせ]　あなたについてコメントしました'
  end
end