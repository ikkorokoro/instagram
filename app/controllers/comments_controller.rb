class CommentsController < ApplicationController
before_action :authenticate_user!

def index
  @article = Article.find(params[:article_id])
  @comments = @article.comments
  @users = @comments.
  respond_to do |f|
    f.html { render json: {comments: @comments, user: @user} }
  end
  # render json: @user
end

def create
  article = Article.find(params[:article_id])
  comment = article.comments.build(params_comment)
  user = comment.user
  comment.save!
  render json: comment
  # respond_to do |f|
  # respond_to do |f|
  #   f.html { render json: {comment: comment, user: user} }
  # end
  # end
end

private
def params_comment
  params.require(:comment).permit(:content).merge(user_id: current_user.id)
end
end