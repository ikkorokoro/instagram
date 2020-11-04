Rails.application.routes.draw do
  devise_for :users
  get '/users/sign_out' => 'devise/sessions#destroy'
  root to:'homes#index'
  get '/profile' => 'profiles#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
