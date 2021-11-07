class CreateJoinTablePlantsSeasons < ActiveRecord::Migration[6.1]
  def change
    create_join_table :plants, :seasons do |t|
      # t.index [:plant_id, :season_id]
      # t.index [:season_id, :plant_id]
    end
  end
end
