class PostsController < ApplicationController

    def create
    end

    def show
    end

    def update
    end

    def destroy
    end


    private

    def post_params
        params.permit(:title, :body, :user_id)
    end
end