Rails.application.routes.draw do
  resources :seasons, only: [:index, :show]
  resources :plants
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users, only: :create
  put '/seasons/:season_id/plants/:id', to: 'plants#add_season'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
