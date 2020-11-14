Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions'
  }
  get '/users/sign_out' => 'devise/sessions#destroy'
  root to:'articles#index'
  resources :profile, only: [:index, :create]
  resources :articles do
    resource :likes, only: [:show, :create, :destroy]
  end
end
