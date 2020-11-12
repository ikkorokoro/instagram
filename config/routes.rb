Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions'
  }
  get '/users/sign_out' => 'devise/sessions#destroy'
  root to:'articles#index'
  resources :profiles, only: [:index, :create]
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :articles
end
