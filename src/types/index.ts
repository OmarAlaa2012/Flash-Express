export interface User {
  id: string;
  email: string;
  full_name: string;
  role: 'admin' | 'hr' | 'user' | 'courier';
  created_at: string;
  updated_at: string;
}

export interface Shipment {
  id: string;
  tracking_number: string;
  customer_id: string;
  courier_id?: string;
  status: 'pending' | 'assigned' | 'in_transit' | 'delivered' | 'failed';
  pickup_address: string;
  delivery_address: string;
  package_description: string;
  weight: number;
  dimensions: string;
  price: number;
  delivery_photo?: string;
  created_at: string;
  updated_at: string;
  delivered_at?: string;
  customer?: User;
  courier?: User;
}

export interface CourierApplication {
  id: string;
  user_id: string;
  full_name: string;
  phone: string;
  address: string;
  vehicle_type: string;
  license_number: string;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
  user?: User;
}

export interface Analytics {
  totalShipments: number;
  deliveredShipments: number;
  failedShipments: number;
  pendingShipments: number;
  totalRevenue: number;
  totalCouriers: number;
  averageDeliveryTime: number;
}

export interface CourierEarnings {
  courier_id: string;
  total_deliveries: number;
  total_earnings: number;
  this_month_deliveries: number;
  this_month_earnings: number;
}