class ProfilesController < ApplicationController
before_action :authenticate_user!

def show
end

def update
  current_user.avatar.attach(params[:avatar])
  redirect_to profile_path
end
end