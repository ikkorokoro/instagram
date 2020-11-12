class ArticlesController < ApplicationController
before_action :authenticate_user!

def index
  @articles = Article.all 
  # binding.pry

end
def show
  @article = Article.find(params[:id])
end

def new 
  @article = current_user.articles.build
end

def create
  @article = current_user.articles.build(article_params)
  if @article.save
    redirect_to articles_path, notice: '保存できました'
  else
      flash.now[:error] = '保存できませんでした'
      render :new
  end
end

def article_params
  params.require(:article).permit(:content, images: [])
end
end