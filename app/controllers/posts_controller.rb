class PostsController < ApplicationController
    before_action :authorize

    def index
        posts = current_user.posts
        render json: posts
    end
    
    def create
        post = current_user.posts.create(post_params)

        if post.valid?
            render json: post
        else
            render json: { errors: post.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        post = current_user.posts.find_by(id: params[:id])
        if post
            render json: post
        else
            render json: { error: "Order not found" }, status: :unauthorized
        end
    end

    def update
    end

    def destroy
    end


    private

    private
    def current_user
        User.find_by(id: session[:user_id])
    end

    def post_params
        params.permit(:title, :body, :user_id)
    end
    
    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end

end