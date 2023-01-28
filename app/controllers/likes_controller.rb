class LikesController < ApplicationController
  before_action :authorize

  def like
    like = Resource.create(likes_params)

    if like.valid?
        render json: like
    else
        render json: { errors: like.errors.full_messages }, status: :unprocessable_entity
    end
  end


  private

  def likes_params
    params.permit(:like, :user_id, :post_id)
  end

  def authorize
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  end

end
