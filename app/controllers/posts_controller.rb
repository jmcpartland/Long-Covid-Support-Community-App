class PostsController < ApplicationController
    before_action :authorize

    def all_posts
        posts = Post.all

        render json: posts
    end

    def show_all_posts
        # binding.pry
        post = Post.find_by(id: params[:id])
        if post
            render json: post
        else
            render json: { error: "Post not found" }, status: :unauthorized
        end
    end

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
            render json: { error: "Post not found" }, status: :unauthorized
        end
    end

    def update
        post = current_user.posts.find_by(id: params[:id])
        post.update(post_params)

        if post.valid?
            render json: post
        else
            render json: { errors: post.errors.full_messages }, status: :unprocessable_entity
        end

    end

    def destroy
        post = current_user.posts.find_by(id: params[:id])
        if post
            post.delete
            render json: post
        else
            render json: { error: "Post not found" }, status: :unauthorized
        end
    end


    private

    private
    def current_user
        User.find_by(id: session[:user_id])
    end

    def post_params
        params.permit(:title, :body, :user_initial, :user_id)
    end
    
    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end

end