class ProfilesController < ApplicationController
before_action :authenticate_user!

def index 
end

def create
  current_user.avatar.attach(params[:avatar])
  redirect_to profiles_path
end
end