class PostsController < ApplicationController
  respond_to :json, except: [:index]

  def index
    @new_post = Post.new
    @posts = Post.all
    respond_to do |f|
      f.html
      f.json {render json: @posts}
    end
  end

  def show
    @post = Post.find(params[:id])
    respond_with(@post)
  end

  def create
    @post = Post.create(params[:post])
    if @post.persisted?
      respond_with(@post)
    else
      respond_with({error: "error created"})
    end
  end

  def update
    @post = Post.find(params[:id])
    if @post.update_attributes(params[:post])
      respond_with(@post)
    else
      respond_with({error: "error updated"})
    end
  end

  def destroy
    @post = Post.find(params[:id])
    respond_with (@post.destroy)
  end
end
