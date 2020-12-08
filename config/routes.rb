require 'sidekiq/web'
Rails.application.routes.draw do
  mount Sidekiq::Web => '/sidekiq' if Rails.env.development?
  mount LetterOpenerWeb::Engine, at: '/letter_opener' if Rails.env.development?
  root to:'articles#index'
  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions'
  }
  get '/users/sign_out' => 'devise/sessions#destroy'
  resource :profile, only: [:show, :edit, :update]
  resource :timeline, only: [:show]

  resources :accounts, only: [:show] do
    resources :follows, only: [:index, :create]
    resources :unfollows, only: [:create]
    resources :followings, only: [:index]
    resources :followers, only: [:index]
  end
  resources :articles do
    resource :likes, only: [:show, :create, :destroy]
    resources :comments, only: [:index, :create, :destroy]
  end
end
