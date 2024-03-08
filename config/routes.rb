Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  
  resources :posts, only: [:index, :show, :create, :update, :destroy]
  resources :comments, only: [:show, :create, :destroy]
  resources :resources, only: [:index, :show, :create, :update, :destroy]
  
  get '/posts/:id/comments', to: 'comments#show_all_comments'
  get '/posts/:id/like', to: 'posts#like'
  get '/all-posts/:id', to: 'posts#show_post'
  get '/all-posts', to: 'posts#all_posts'

  # get 'all-comments', to: 'comments#all_comments'
  
  # Defines the root path route ("/")
  # root "articles#index"
end
