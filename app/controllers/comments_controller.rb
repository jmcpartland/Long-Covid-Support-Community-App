class CommentsController < ApplicationController
    before_action :authorize

    def index
        # binding.pry

        post = Post.find_by(id: params[:id])
        render json: post.comments

        # post_comments = post.comments.sort
        # render json: { user_id: user.id, post_id: post.id, comment: comment.comment_text }
    end

    def create
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