Rails.application.routes.draw do
  get 'landing/index'

  resources :songs
  resources :singers
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
   get 'singer/songs/:id' , to: "singers#getAllSongs"
end
