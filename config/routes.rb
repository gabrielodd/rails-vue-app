Rails.application.routes.draw do
  get 'tasks/index'
  get 'welcome', to: 'pages#welcome'
  root 'home#index'
end
