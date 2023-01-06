class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :user_id, :user_initial, :created_at, :updated_at

  belongs_to :user
end
