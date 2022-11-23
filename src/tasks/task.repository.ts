import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status-dto';
import { TaskStatus } from './task-status.enum';
import { Task } from './task.entity';

@Injectable()
export class TaskRepository extends Repository<Task> {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {
    super(
      taskRepository.target,
      taskRepository.manager,
      taskRepository.queryRunner,
    );
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const { title, description } = createTaskDto;

    const task = this.taskRepository.create({
      title,
      description,
      status: TaskStatus.OPEN,
    });

    await this.taskRepository.save(task);
    return task;
  }

  // async updateTaskStatus(updateTaskStatusDto: UpdateTaskStatusDto): Promise<Task> {

  // }

  // async deleteTask(id: string): Promise<Task> {
  //   const task = await this.getTaskById(id);

  //   return await this.taskRepository.remove(task);
  // }
}
