class AccountsController < ApplicationController
before_action :authenticate_user!

def show
  @user = User.find(params[:id])
  has_status = current_user.has_followed?(@user)
end
end