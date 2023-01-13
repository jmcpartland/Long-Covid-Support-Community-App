class ResourcesController < ApplicationController
  before_action :authorize

  def index
    res = Resource.all
    render json: res
  end

  def create
    res = Resource.create(resource_params)

    if res.valid?
        render json: res
    else
        render json: { errors: resource.errors.full_messages }, status: :unprocessable_entity
    end
  end


  private

  def resource_params
    params.permit(:title, :description, :url)
  end

  def authorize
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  end

end
