class CommentSerializer < ActiveModel::Serializer
  attributes :comment_text, :user_id, :created_at

  belongs_to :user
end
