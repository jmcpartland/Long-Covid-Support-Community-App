class UsersController < ApplicationController
    # signup
    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    # show user info
    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user
        else
            render json: {error: "Not Authorized"}, status: :unauthorized;
        end
    end

    def user_first_name
        userName = User.first_name
        render json: userName 
    end


    private

    def user_params
        params.permit(:first_name, :last_name, :email, :password, :password_confirmation)
    end
end