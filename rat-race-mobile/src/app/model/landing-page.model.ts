export interface Room {
  name: string,
  users: string[],
  author: string,
  open: boolean
}

export class RoomCreationRequest {
  user: string
}

export interface RoomJoiningRequest {
  user: string,
  room: string
}

export interface RoomsResponse {
  rooms: Room[]
}
