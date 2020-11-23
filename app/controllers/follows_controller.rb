class FollowsController < ApplicationController
before_action :authenticate_user!


def index
  user = User.find(params[:account_id])
  has_status = current_user.has_followed?(user)
  render json: {hasFollow: has_status}
end

def create
  user = User.find(params[:account_id])
  current_user.follow!(user)
  render json: {status: 'ok'}
end
end