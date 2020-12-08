class TimelinesController < ApplicationController
  before_action :authenticate_user!
  # module ActiveRecord
  #   class Base
  #     def all_columns
  #       column_names.collect { |c| "#{table_name}.#{c}" }.join(",")
  #     end
  #   end
  # end
  def show 
    #  Time.current
    @articles = Article.includes(:likes).where(created_at: Time.current.ago(24.hours)..Time.current).where(id: Like.group(:article_id).order('count(article_id) desc').limit(5).pluck(:article_id))
    # articles = Article.find(Like.group(:article_id).order('count(article_id) desc').limit(5).pluck(:article_id))
    # if articles.where(created_at: from..to).exists?
    #   @articles = articles.where(created_at: from..to)
    # end
end
end
# Article.includes(:likes).where(created_at: from..to).group(:article_id).order('count(article_id) desc').limit(5).pluck(:article_id))
# Article.includes(:likes).where(created_at: Time.current.ago(24.hours)..Time.current)