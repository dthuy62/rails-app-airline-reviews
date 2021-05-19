module Api
  module V1
    class AirlinesController < ApplicationController
      protect_from_forgery with: :null_session

      def index
        airlines = Airline.all

        render json: AirlineSerializer.new(airlines, options).serializable_hash.to_json
      end
      # show
      def show
        airline = Airline.find_by(slug: params[:slug])

        render json: AirlineSerializer.new(airline, options).serializable_hash.to_json
      end
      # create new 
      def create
        airline = Airline.new(airline_params)
        
        if airline.save
          render json: AirlineSerializer.new(airline).serializable_hash.to_json
        else
          render json: { error: airline.errors.messages }, status: 422
        end
      end
      # end create
      # update
      def update
        airline = Airline.find_by(slug: params[:slug])
        
        if airline.update(airline_params)
          render json: AirlineSerializer.new(airline, options).serializable_hash.to_json
        else
          render json: { error: airline.errors.messages }, status: 422
        end
      end
      # end update
      # destroy
      def destroy
        airline = Airline.find_by(slug: params[:slug])
        
        if airline.destroy
          head :no_content
        else
          render json: { error: airline.errors.messages }, status: 422
        end
      end
      # end destroy

      private
        def airline_params
          params.require(:airline).permit(:name, :image_url, :slug)
        end
        def options
          @options ||= { include: %i[reviews] }
        end
    end
  end
end