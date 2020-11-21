class CommentsController < ApplicationController
before_action :authenticate_user!

def index
  @article = Article.find(params[:article_id])
  @comments = @article.comments
  render json: @comments
end

def create
  article = Article.find(params[:article_id])
  comment = article.comments.build(params_comment)
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