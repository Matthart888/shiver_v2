class CreateBlogPosts < ActiveRecord::Migration[6.0]
  def change
    create_table :blog_posts do |t|
      t.string :title
      t.string :username
      t.string :catagory
      t.text :content

      t.timestamps
    end
  end
end
