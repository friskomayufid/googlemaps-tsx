export interface Mappable {
  location: {
    lat: number,
    long: number,
  }
  markerContent(): string
}

export class CustomMap {
  private googleMap: google.maps.Map

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addMarker(mappable: Mappable) {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.long,
      }
    })

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      })

      infoWindow.open(this.googleMap, marker)
    })
  }
}