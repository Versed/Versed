class ProfilesController < ApplicationController
  def new
  end

  def index
    @profiles = Profile.all
  end

  def show
    @profile = Profile.find(params[:id])
  end

  def create
    @profile = Profile.new(profile_params)

    @profile.save
    redirect_to @profile
  end

  private
    def profile_params
      params.require(:profile).permit(:account, :password)
    end
end
