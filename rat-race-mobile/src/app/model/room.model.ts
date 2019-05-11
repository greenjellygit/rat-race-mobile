export interface RoomDetails {
  name: string,
  users: string[],
  author: string,
  status: GameStatus
}

export interface RoomJoiningResponse {
  result: boolean,
  games: string[],
  roomDetails: RoomDetails
}

export enum GameStatus {
  OPEN = 'OPEN',
  RUNNING = 'RUNNING',
  CLOSED = 'CLOSED'
}
