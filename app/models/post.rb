class Post < ApplicationRecord
  validates :title, :body, :user_initial, presence: true
  has_many :comments
  has_many :likes
  belongs_to :user
end