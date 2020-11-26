class TimelinesController < ApplicationController
  before_action :authenticate_user!
  def show 
    user_ids = current_user.followings.pluck(:id)
    articles = Article.joins(:likes).group('likes.article.id')
.order().limit(5)
  end
end
