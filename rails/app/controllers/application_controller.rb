class ApplicationController < ActionController::Base
  def index
    render json: { status: 'SUCCESS', message: "hello kamiteakira blog api" }
  end
end
