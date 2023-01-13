class Resource < ApplicationRecord
  validates :title, :description, :url, presence: true
end