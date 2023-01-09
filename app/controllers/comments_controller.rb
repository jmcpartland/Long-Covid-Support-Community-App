class CommentsController < ApplicationController
    before_action :authorize

    def index
        post = Post.find_by(id: params[:id])
        postComment = post.comments

        render json: postComment
    end

    def show_all_comments
        # binding.pry
        post = Post.find_by(id: params[:id])
        postComment = post.comments

        render json: postComment
    end

    def create
        # binding.pry

        comment = current_user.comments.create(comment_params)
        if comment.valid?
            render json: comment
        else
            render json: { errors: comment.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show

    end


    private

    def comment_params
        params.permit(:comment_text, :post_id)
    end

    def current_user
        User.find_by(id: session[:user_id])
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end

end