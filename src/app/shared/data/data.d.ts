declare interface IDeal {
  id: string,
  name: string,
  address: string,
  price: number,
  type: DealType
  dueDate: Date
}

declare enum DealType {
  acquisition,
  development,
  financing,
  leasing
}

declare interface IDealWithPrices {
  deals: Array<IDeal>,
  maxPrice: number,
  minPrice: number
}
