class FollowsController < ApplicationController
before_action :authenticate_user!


def index
  user = User.find(params[:account_id])
  has_status = current_user.has_followed?(user)
  follower = user.followers.count
  following = user.followings.count
  render json: {hasFollow: has_status, follower: follower, following: following}
end

def create
  user = User.find(params[:account_id])
  current_user.follow!(user)
  follower = user.followers.count
  render json: {status: 'ok', follower: follower}
end
end