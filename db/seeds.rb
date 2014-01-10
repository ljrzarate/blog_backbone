# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Post.create(:title => 'Title1', :description => 'Lorem Ipsum 1', :post_date => Time.now);
Post.create(:title => 'Title2', :description => 'Lorem Ipsum 2', :post_date => Time.now);
Post.create(:title => 'Title3', :description => 'Lorem Ipsum 3', :post_date => Time.now);
Post.create(:title => 'Title4', :description => 'Lorem Ipsum 4', :post_date => Time.now);
Post.create(:title => 'Title5', :description => 'Lorem Ipsum 5', :post_date => Time.now);