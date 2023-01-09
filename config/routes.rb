Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  
  get '/posts/:id/comments', to: 'comments#show_all_comments'
  resources :posts, only: [:index, :show, :create, :destroy]
  resources :comments, only: [:show, :create, :destroy]
  get '/all-posts', to: 'posts#all_posts'
  get '/all-posts/:id', to: 'posts#show_all_posts'

  # get 'all-comments', to: 'comments#all_comments'
  
  # Defines the root path route ("/")
  # root "articles#index"
end
