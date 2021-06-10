import faker from 'faker'
import { Mappable } from './CustomMap'

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number,
    long: number,
  }
  constructor() {
    this.companyName = faker.company.companyName()
    this.catchPhrase = faker.company.catchPhrase()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      long: parseFloat(faker.address.longitude()),
    }
  }

  markerContent() {
    return `<div>
      <h3>Company Name is : ${this.companyName}</h1>
      <h5>Catchphrase is : ${this.catchPhrase}</h3>
    </div>`
  }
}