module Api
  class PostsController < ApplicationController
    protect_from_forgery 

    def index
      begin
        order = params[:order] || "desc"
        posts = Post.order(created_at: order).page(params[:page]).per(params[:per])

        render json: { status: 'SUCCESS', message: 'Loaded posts', data: posts }
      rescue => e
        render json: { status: 'ERROR', message: e}
      end
    end


    def create
      begin
        post = Post.new(post_params)

        if post.save
          render json: { status: 'SUCCESS', message: 'Created the post', data: post }
        else
          render json: { status: 'ERROR', data: post.errors }
        end

      rescue => e
        render json: { status: 'ERROR', message: e}
      end
    end


    def show
      begin
        post = Post.find(params[:id])

        render json: { status: 'SUCCESS', message: 'Loaded the post', data: post }
      rescue => e
        render json: { status: 'ERROR', message: e}
      end
    end


    def update
      begin
        post = Post.find(params[:id])

        if post.update(post_params)
          render json: { status: 'SUCCESS', message: 'Updated the post', data: post }
        else
          render json: { status: 'SUCCESS', message: 'Not updated', data: post.errors }
        end
      rescue => e
        render json: { status: 'ERROR', message: e}
      end
    end


    def destroy
      begin
        post = Post.destroy

        render json: { status: 'SUCCESS', message: 'Deleted the post', data: post }
      rescue => e
        render json: { status: 'ERROR', message: e}
      end
    end
    

    private

    def post_params
      params.permit(:title, :body)
    end

  end
end
