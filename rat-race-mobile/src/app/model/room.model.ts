export interface RoomDetails {
  name: string,
  users: string[],
  author: string,
  open: boolean
}

export interface RoomJoiningResponse {
  result: boolean,
  games: string[],
  roomDetails: RoomDetails
}
