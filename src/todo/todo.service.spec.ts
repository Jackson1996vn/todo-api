import { Test, TestingModule } from '@nestjs/testing';
import { TodoService } from './todo.service';
import { NotFoundException } from '@nestjs/common';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodoService],
    }).compile();

    service = module.get<TodoService>(TodoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of todos', () => {
      const todos = service.findAll();
      expect(todos).toBeInstanceOf(Array);
      expect(todos.length).toBeGreaterThan(0);
    });
  });

  describe('findOne', () => {
    it('should return a single todo', () => {
      const todo = service.findOne(1);
      expect(todo).toBeDefined();
      expect(todo.id).toBe(1);
    });

    it('should throw NotFoundException for non-existent todo', () => {
      expect(() => service.findOne(999)).toThrow(NotFoundException);
    });
  });

  describe('create', () => {
    it('should create a new todo', () => {
      const createDto = {
        title: 'Test Todo',
        description: 'Test Description',
        completed: false,
        participants: ['Alice', 'Bob'],
      };
      const todo = service.create(createDto);
      expect(todo).toBeDefined();
      expect(todo.title).toBe(createDto.title);
      expect(todo.description).toBe(createDto.description);
      expect(todo.completed).toBe(createDto.completed);
      expect(todo.participants).toEqual(createDto.participants);
    });

    it('should create a new todo with empty participants if not provided', () => {
      const createDto = {
        title: 'Test Todo',
        description: 'Test Description',
        completed: false,
      };
      const todo = service.create(createDto);
      expect(todo).toBeDefined();
      expect(todo.participants).toEqual([]);
    });
  });

  describe('update', () => {
    it('should update a todo', () => {
      const updateDto = {
        title: 'Updated Title',
        completed: true,
      };
      const todo = service.update(1, updateDto);
      expect(todo.title).toBe(updateDto.title);
      expect(todo.completed).toBe(updateDto.completed);
    });

    it('should update participants', () => {
      const updateDto = {
        participants: ['Alice', 'Bob', 'Charlie'],
      };
      const todo = service.update(1, updateDto);
      expect(todo.participants).toEqual(updateDto.participants);
    });

    it('should throw NotFoundException for non-existent todo', () => {
      expect(() => service.update(999, { title: 'Test' })).toThrow(
        NotFoundException,
      );
    });
  });

  describe('remove', () => {
    it('should remove a todo', () => {
      const initialLength = service.findAll().length;
      service.remove(1);
      const newLength = service.findAll().length;
      expect(newLength).toBe(initialLength - 1);
    });

    it('should throw NotFoundException for non-existent todo', () => {
      expect(() => service.remove(999)).toThrow(NotFoundException);
    });
  });
});

