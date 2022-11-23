import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from '../tasks/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskRepository } from './task.repository';

@Injectable()
export class TasksService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async getAllTasks(): Promise<Task[]> {
    return await this.taskRepository.find();
  }

  async getTaskById(id: string): Promise<Task> {
    return this.taskRepository.findOneBy({ id });
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskRepository.createTask(createTaskDto);
  }

  async deleteTask(id: string): Promise<void> {
    await this.taskRepository.delete(id);
  }

  // async getTaskWithFilters(filterDto: GetTasksFilterDto): Promise<Task[]> {
  //   const { status, search } = filterDto;

  //   let tasks = this.getAllTasks();

  //   if (status) {
  //     tasks = tasks.filter((task) => task.status === status);
  //   }

  //   if (search) {
  //     tasks = tasks.filter((task) => {
  //       if (task.title.includes(search) || task.description.includes(search)) {
  //         return true;
  //       }

  //       return false;
  //     });
  //   }

  //   return tasks;
  // }

  // getTaskById(id: string): Task {
  //   const found = this.taskRepository.findONe

  //   if (!found) {
  //     throw new NotFoundException(`Task with Id "${id}" not found`);
  //   }

  //   return found;
  // }

  // createTask(createTaskDto: CreateTaskDto): Task {
  //   const { title, description } = createTaskDto;

  //   const task: Task = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: TaskStatus.OPEN,
  //   };

  //   this.tasks.push(task);

  //   return task;
  // }

  // updateTaskStatus(id: string, status: TaskStatus): Task {
  //   const task = this.getTaskById(id);
  //   task.status = status;

  //   return task;
  // }

  // deleteTask(id: string): void {
  //   const found = this.getTaskById(id);
  //   this.tasks = this.tasks.filter((task) => task.id !== found.id);
  // }
}
