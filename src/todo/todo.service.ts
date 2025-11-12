import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './todo.interface';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  private todos: Todo[] = [
    {
      id: 1,
      title: 'Learn NestJS',
      description: 'Study NestJS framework and build APIs',
      completed: false,
      participants: ['Alice', 'Bob'],
      createdAt: new Date('2025-11-10'),
      updatedAt: new Date('2025-11-10'),
    },
    {
      id: 2,
      title: 'Build Todo API',
      description: 'Create a mock Todo API with CRUD operations',
      completed: true,
      participants: ['Alice', 'Charlie', 'David'],
      createdAt: new Date('2025-11-11'),
      updatedAt: new Date('2025-11-12'),
    },
    {
      id: 3,
      title: 'Deploy Application',
      description: 'Deploy the application to production',
      completed: false,
      participants: ['Bob', 'Eve'],
      createdAt: new Date('2025-11-12'),
      updatedAt: new Date('2025-11-12'),
    },
  ];
  private nextId = 4;

  findAll(): Todo[] {
    return this.todos;
  }

  findOne(id: number): Todo {
    const todo = this.todos.find((todo) => todo.id === id);
    if (!todo) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }
    return todo;
  }

  create(createTodoDto: CreateTodoDto): Todo {
    const newTodo: Todo = {
      id: this.nextId++,
      title: createTodoDto.title,
      description: createTodoDto.description || '',
      completed: createTodoDto.completed || false,
      participants: createTodoDto.participants || [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  update(id: number, updateTodoDto: UpdateTodoDto): Todo {
    const todo = this.findOne(id);
    
    if (updateTodoDto.title !== undefined) {
      todo.title = updateTodoDto.title;
    }
    if (updateTodoDto.description !== undefined) {
      todo.description = updateTodoDto.description;
    }
    if (updateTodoDto.completed !== undefined) {
      todo.completed = updateTodoDto.completed;
    }
    if (updateTodoDto.participants !== undefined) {
      todo.participants = updateTodoDto.participants;
    }
    
    todo.updatedAt = new Date();
    return todo;
  }

  remove(id: number): void {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index === -1) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }
    this.todos.splice(index, 1);
  }
}

