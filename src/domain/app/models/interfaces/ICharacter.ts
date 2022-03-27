export interface Thumbnail {
  path: string
  extension: string
}

export interface Item {
  resourceURI: string
  name: string
}

export interface Comics {
  available: number
  collectionURI: string
  items: Item[]
  returned: number
}

export interface Item2 {
  resourceURI: string
  name: string
}

export interface Series {
  available: number
  collectionURI: string
  items: Item2[]
  returned: number
}

export interface Item3 {
  resourceURI: string
  name: string
  type: string
}

export interface Stories {
  available: number
  collectionURI: string
  items: Item3[]
  returned: number
}

export interface Events {
  available: number
  collectionURI: string
  items: any[]
  returned: number
}

export interface Url {
  type: string
  url: string
}

export interface ICharacter {
  id?: number
  name: string
  description?: string
  modified?: Date
  thumbnail: Thumbnail
  resourceURI?: string
  comics: Partial<Comics>
  series: Partial<Series>
  stories?: Partial<Stories>
  events?: Events
  urls?: Url[]
}
