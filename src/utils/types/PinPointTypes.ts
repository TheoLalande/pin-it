export type PinPointType_w_id = {
  id: number
  title: string
  description: string
  latitude: number
  longitude: number
  modified_at: string
  created_at: string
  tags: string[]
  pictures: string[]
  type: number
  icon: string
  color: string
  created_by: string
}

export type PinPointType = Omit<PinPointType_w_id, 'id'>