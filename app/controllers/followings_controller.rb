class FollowingsController < ApplicationController
before_action :authenticate_user!


def index
  user = User.find(params[:account_id])
  @follows = Relationship.all
  # @users = user.followings
end

end