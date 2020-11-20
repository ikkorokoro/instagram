Rails.application.routes.draw do
  mount LetterOpenerWeb::Engine, at: '/letter_opener' if Rails.env.development?
  root to:'articles#index'
  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions'
  }
  get '/users/sign_out' => 'devise/sessions#destroy'
  resource :profile, only: [:show, :edit, :update]
  resources :articles do
    resource :likes, only: [:show, :create, :destroy]
    resources :comments, only: [:index, :create, :destroy]
  end
end
