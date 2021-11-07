class SeasonsController < ApplicationController
  before_action :set_season, only: [:show, :update, :destroy]

  # GET /seasons
  def index
    @seasons = Season.all

    render json: @seasons
  end

  # GET /seasons/1
  def show
    render json: @season
  end

end
