class Api::TodosController < ApplicationController
  def show
    render json: Todo.find_by_id(params[:id])
  end

  def index
    render json: Todo.all
  end

  def create
    todo = Todo.new(todos_params)
    if todo.save
      render json: todo
    else
      render json: todo.errors.full_messages, status: 422
    end
  end

  def update
    todo = Todo.find_by_id(params[:id])
    if todo.update(todos_params)
      render json: todo
    else
      render json: todo.errors.full_messages, status: 422
    end
  end

  def destroy
    todo = Todo.find_by_id(params[:id])
    todo.destroy
    render json: ""
  end

  private
  def todos_params
    params.require(:todo).permit(:title, :body, :done)
  end
end
