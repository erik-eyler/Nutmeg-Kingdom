# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Season.destroy_all
Plant.destroy_all
User.destroy_all

@admin = User.create!(username: 'hummingbirds', email: 'eyler.erik@gmail.com', password: '123456')

puts "#{User.count} users created"

Plant.create!(name: "potato", planting_date: "10/25", image_url: "image hold", user: @admin)
Plant.create!(name: "onion", planting_date: "11/30", image_url: "image hold", user: @admin)
Plant.create!(name: "beet", planting_date: "12/08", image_url: "image hold", user: @admin)
Plant.create!(name: "leek", planting_date: "1/25", image_url: "image hold", user: @admin)
Plant.create!(name: "carrot", planting_date: "2/03", image_url: "image hold", user: @admin)
Plant.create!(name: "spinach", planting_date: "3/29", image_url: "image hold", user: @admin)
Plant.create!(name: "corn", planting_date: "4/16", image_url: "image hold", user: @admin)
Plant.create!(name: "squash", planting_date: "5/23", image_url: "image hold", user: @admin)
Plant.create!(name: "green beans", planting_date: "6/15", image_url: "image hold", user: @admin)
Plant.create!(name: "broccoli", planting_date: "7/05", image_url: "image hold", user: @admin)

puts "#{Plant.count} plants created"

@spring = Season.create!(name: "spring")
@summer = Season.create!(name: "summer")
@fall = Season.create!(name: "fall")
@winter = Season.create!(name: "winter")

puts "#{Season.count} seasons created"

Plant.all.each do |plant|
  rand(1..4).times do
    plant.seasons << Season.all.sample
  end
end
