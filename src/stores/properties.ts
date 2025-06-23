import { defineStore } from 'pinia'
import type { Property } from '@/types/property'


interface State {
  properties: Property[];
  searchQuery: string;
  currentPage: number;
  perPage: number;
}

export const usePropertiesStore = defineStore('properties', {
  state: (): State => ({
    properties: [
      {
        id: '1',
        name: 'Квартира на Печерську',
        description: 'Світла квартира з видом на Дніпро',
        price: 1200,
        location: 'Київ',
        geometry: { type: 'Point', coordinates: [30.541, 50.426] }
      },
      {
        id: '2',
        name: 'Офіс біля метро Лукʼянівська',
        description: 'Зручне розташування, велика площа',
        price: 2500,
        location: 'Київ',
        geometry: { type: 'Point', coordinates: [30.497, 50.454] }
      },
      {
        id: '3',
        name: 'Будинок у передмісті',
        description: 'Просторий будинок з садом',
        price: 3000,
        location: 'Бровари',
        geometry: { type: 'Point', coordinates: [30.800, 50.500] }
      },
      {
        id: '4',
        name: 'Loft in Berlin',
        description: 'Modern loft with open space near city center',
        price: 4500,
        location: 'Berlin',
        geometry: { type: 'Point', coordinates: [13.405, 52.52] }
      },
      {
        id: '5',
        name: 'Appartement à Paris',
        description: 'Charmant appartement proche de la Tour Eiffel',
        price: 5000,
        location: 'Paris',
        geometry: { type: 'Point', coordinates: [2.3522, 48.8566] }
      },
      {
        id: '6',
        name: 'Casa in Toscana',
        description: 'Villa storica immersa nelle colline toscane',
        price: 3800,
        location: 'Tuscany',
        geometry: { type: 'Point', coordinates: [11.2558, 43.7696] }
      },
      {
        id: '7',
        name: 'Penthouse in Amsterdam',
        description: 'Panoramic view over canals',
        price: 5200,
        location: 'Amsterdam',
        geometry: { type: 'Point', coordinates: [4.9041, 52.3676] }
      },
      {
        id: '8',
        name: 'Flat in Barcelona',
        description: 'Cozy flat near the beach',
        price: 4100,
        location: 'Barcelona',
        geometry: { type: 'Point', coordinates: [2.1734, 41.3851] }
      },
      {
        id: '9',
        name: 'Квартира в центрі Львова',
        description: 'Історична будівля, сучасний ремонт',
        price: 1800,
        location: 'Львів',
        geometry: { type: 'Point', coordinates: [24.031, 49.842] }
      },
      {
        id: '10',
        name: 'House in Prague',
        description: 'Quiet neighborhood, great for families',
        price: 3500,
        location: 'Prague',
        geometry: { type: 'Point', coordinates: [14.4378, 50.0755] }
      },
      {
        id: '11',
        name: 'Villa en Marbella',
        description: 'Luxury villa with private pool and sea view',
        price: 6200,
        location: 'Marbella',
        geometry: { type: 'Point', coordinates: [-4.8858, 36.5101] }
      },
      {
        id: '12',
        name: 'Studio in Warsaw',
        description: 'Compact studio near business center',
        price: 2000,
        location: 'Warsaw',
        geometry: { type: 'Point', coordinates: [21.0122, 52.2297] }
      },
      {
        id: '13',
        name: 'Дом в Карпатах',
        description: 'Затишне місце для відпочинку',
        price: 3200,
        location: 'Яремче',
        geometry: { type: 'Point', coordinates: [24.685, 48.446] }
      },
      {
        id: '14',
        name: 'Cottage in Vienna',
        description: 'Elegant cottage in a green suburb',
        price: 4700,
        location: 'Vienna',
        geometry: { type: 'Point', coordinates: [16.3738, 48.2082] }
      },
      {
        id: '15',
        name: 'Apartment in Zurich',
        description: 'Modern apartment near the lake',
        price: 5600,
        location: 'Zurich',
        geometry: { type: 'Point', coordinates: [8.5417, 47.3769] }
      }
    ],
    searchQuery: '',
    currentPage: 1,
    perPage: 4
  }),
  getters: {
    filteredProperties(state): Property[] {
      const query = state.searchQuery.toLowerCase();
      return state.properties.filter(p =>
          p.name.toLowerCase().includes(query) ||
          p.location.toLowerCase().includes(query)
      );
    },
    paginatedProperties(state): Property[] {
      const start = (state.currentPage - 1) * state.perPage;
      return this.filteredProperties.slice(start, start + state.perPage);
    },
    totalPages(state): number {
      return Math.ceil(this.filteredProperties.length / state.perPage);
    }
  }
});
