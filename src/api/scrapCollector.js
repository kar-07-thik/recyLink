import { api } from './client';

// MOCK: replace each endpoint with the backend contract when available.
export const scrapCollectorApi = {
  getDashboard: () => Promise.resolve({ data: mockDashboard }),
  getPickupRequests: () => Promise.resolve({ data: mockRequests }),
  getInventory: () => Promise.resolve({ data: mockInventory }),
  getEarnings: () => Promise.resolve({ data: mockTransactions }),
  analyzeImage: (imageUri) => Promise.resolve({ data: { ...mockScan, imageUri } }),
  uploadPickupProof: (pickupId, imageUri) => api.post('/collector/pickups/proof', { pickupId, imageUri }), // MOCK endpoint
};

export const mockDashboard = { scans: 48, identified: 63, recyclable: 42, hazardous: 6 };
export const mockScan = { itemName: 'Laptop computer', category: 'Electronics', confidence: 94, weight: '2.4 kg', materials: 'Aluminium, ABS plastic, lithium battery', recyclable: true, hazardous: true, value: '₹1,240', recommendation: 'Separate the battery before sending this item for processing.' };
export const mockRequests = [
  { id: 'REQ-1042', customer: 'Anita Sharma', phone: '+91 98765 43210', location: 'Indiranagar, Bengaluru', type: 'Laptop and cables', quantity: '4 items', date: 'Today, 4:30 PM', status: 'Pending' },
  { id: 'REQ-1041', customer: 'Green Office Hub', phone: '+91 98450 11223', location: 'Koramangala, Bengaluru', type: 'Mixed electronics', quantity: '12 kg', date: 'Tomorrow, 10:00 AM', status: 'Pending' },
];
export const mockInventory = [
  { name: 'Dell Latitude 5420', category: 'Electronics', quantity: '2 items', weight: '4.8 kg', date: '18 Sep 2026', value: '₹2,480', recyclable: true, hazardous: true, status: 'Ready for recycler' },
  { name: 'Copper wire bundle', category: 'Cables', quantity: '1 bundle', weight: '8.2 kg', date: '16 Sep 2026', value: '₹1,560', recyclable: true, hazardous: false, status: 'In inventory' },
  { name: 'AA batteries', category: 'Batteries', quantity: '24 items', weight: '1.1 kg', date: '14 Sep 2026', value: '₹180', recyclable: false, hazardous: true, status: 'Needs handling' },
];
export const mockTransactions = [
  { id: 'TXN-8831', ref: 'PK-2218', date: '20 Sep 2026', type: 'Electronics', amount: '₹680', status: 'Completed' },
  { id: 'TXN-8830', ref: 'PK-2214', date: '18 Sep 2026', type: 'Cables', amount: '₹420', status: 'Processing' },
  { id: 'TXN-8829', ref: 'PK-2209', date: '15 Sep 2026', type: 'Batteries', amount: '₹180', status: 'Pending' },
];
