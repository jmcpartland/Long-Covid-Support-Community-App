class User < ApplicationRecord
    has_secure_password

    validates :first_name, :last_name, :email, :password, :password_confirmation, presence: true
    
    has_many :posts
    has_many :likes
    has_many :comments
end