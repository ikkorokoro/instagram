# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# jon = User.create!(email: 'john@example.com', account: 'arigatou', password: 'password')
# emiry = User.create!(email: 'emily@example.com', account: 'gomennnasai', password: 'password')

# 3.times do #5回繰り返す
#   jon.articles.create!(
#     content: Faker::Lorem.sentence(word_count: 50)
# )
# end

# 3.times do
#   emiry.articles.create!(
#     content: Faker::Lorem.sentence(word_count: 50)
# )

# users = User.all
# user = first
# user = users.first

# end
# ユーザー
User.create(
  email:                'aaaaaa@au.com',
  password:             'aaaaaa',
  account:              'arigatou'
  )

5.times do
email = Faker::Lorem.sentence(word_count: 8) + '@au.com'
password = 'password'
account = Faker::Lorem.sentence(word_count: 6)
User.create!(
      email:                 email,
      password:              password,
      account:               account
      )
end

# マイクロポスト
users = User.all
5.times do
content = Faker::Lorem.sentence(word_count: 50)
users.each { |user| user.articles.create!(content: content) }
end

#リレーションシップ
users = User.all
user = users.first
following = users[1..6]
followers = users[1..6]
following.each { |followed| user.follow!(followed) }
followers.each { |follower| follower.follow!(user) }