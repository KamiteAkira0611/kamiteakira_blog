Rails.application.routes.draw do
  namespace :admin do
    resources :posts

    root to: "posts#index"
  end
  namespace :api do
    resources :posts
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
