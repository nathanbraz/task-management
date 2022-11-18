export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskTastus;
}

enum TaskTastus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
