class Plant < ApplicationRecord
  belongs_to :user
  has_and_belongs_to_many :seasons
end
