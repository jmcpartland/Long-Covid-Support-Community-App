class AddUserInitialToPosts < ActiveRecord::Migration[7.0]
  def change
    add_column :posts, :user_initial, :string
  end
end
