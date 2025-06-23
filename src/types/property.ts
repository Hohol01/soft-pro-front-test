export interface Property {
  id: string;
  name: string;
  description: string;
  price: number;
  location: string;
  geometry: GeoJSON.Point
}
