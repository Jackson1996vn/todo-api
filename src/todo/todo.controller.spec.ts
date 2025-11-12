import { Test, TestingModule } from '@nestjs/testing';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

describe('TodoController', () => {
  let controller: TodoController;
  let service: TodoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoController],
      providers: [TodoService],
    }).compile();

    controller = module.get<TodoController>(TodoController);
    service = module.get<TodoService>(TodoService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of todos', () => {
      const result = controller.findAll();
      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBeGreaterThan(0);
    });
  });

  describe('findOne', () => {
    it('should return a single todo', () => {
      const result = controller.findOne(1);
      expect(result).toBeDefined();
      expect(result.id).toBe(1);
    });
  });

  describe('create', () => {
    it('should create a new todo', () => {
      const createDto = {
        title: 'Test Todo',
        description: 'Test Description',
        completed: false,
      };
      const result = controller.create(createDto);
      expect(result).toBeDefined();
      expect(result.title).toBe(createDto.title);
    });
  });

  describe('update', () => {
    it('should update a todo', () => {
      const updateDto = {
        title: 'Updated Title',
        completed: true,
      };
      const result = controller.update(1, updateDto);
      expect(result.title).toBe(updateDto.title);
      expect(result.completed).toBe(updateDto.completed);
    });
  });

  describe('remove', () => {
    it('should remove a todo', () => {
      expect(() => controller.remove(1)).not.toThrow();
    });
  });
});

