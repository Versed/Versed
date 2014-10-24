Rails.application.routes.draw do
  resources :lessons, :profiles

  root 'dashboard#index'
end
