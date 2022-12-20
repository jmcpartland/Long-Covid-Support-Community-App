class CommentsController < ApplicationController

    def create
        
    end

    def show

    end


    private

    def comment_params
        params.permit(:comment_text, :user_id, :post_id)
    end
end