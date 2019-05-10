export interface Room {
  name: string,
  playersCount: number,
  authorName: string
}

export class RoomCreationRequest {
  user: string
}

export interface RoomJoiningRequest {
  user: string,
  room: string
}
