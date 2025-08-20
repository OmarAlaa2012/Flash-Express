import React, { useState, useEffect } from 'react';
import { Truck, DollarSign, Package, Camera } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../context/AuthContext';
import { Shipment, CourierEarnings } from '../../types';

export const CourierDashboard: React.FC = () => {
  const [deliveries, setDeliveries] = useState<Shipment[]>([]);
  const [earnings, setEarnings] = useState<CourierEarnings | null>(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      fetchCourierData();
    }
  }, [user]);

  const fetchCourierData = async () => {
    try {
      // Fetch assigned deliveries
      const { data: deliveriesData, error: deliveriesError } = await supabase
        .from('shipments')
        .select('*')
        .eq('courier_id', user?.id)
        .order('created_at', { ascending: false });

      if (deliveriesError) throw deliveriesError;

      // Calculate earnings
      const totalDeliveries = deliveriesData?.filter(d => d.status === 'delivered').length || 0;
      const totalEarnings = totalDeliveries * 40; // 40 EGP per delivery

      const thisMonth = new Date();
      thisMonth.setDate(1);
      const thisMonthDeliveries = deliveriesData?.filter(d => 
        d.status === 'delivered' && new Date(d.delivered_at || '') >= thisMonth
      ).length || 0;
      const thisMonthEarnings = thisMonthDeliveries * 40;

      setDeliveries(deliveriesData || []);
      setEarnings({
        courier_id: user?.id || '',
        total_deliveries: totalDeliveries,
        total_earnings: totalEarnings,
        this_month_deliveries: thisMonthDeliveries,
        this_month_earnings: thisMonthEarnings,
      });
    } catch (error) {
      console.error('Error fetching courier data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUploadPhoto = async (shipmentId: string, file: File) => {
    try {
      // Upload photo to Supabase storage
      const fileName = `delivery-${shipmentId}-${Date.now()}.jpg`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('delivery-photos')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      // Update shipment with photo URL and mark as delivered
      const { error: updateError } = await supabase
        .from('shipments')
        .update({
          delivery_photo: uploadData.path,
          status: 'delivered',
          delivered_at: new Date().toISOString(),
        })
        .eq('id', shipmentId);

      if (updateError) throw updateError;

      // Refresh data
      fetchCourierData();
      alert('Delivery confirmed successfully!');
    } catch (error) {
      console.error('Error uploading photo:', error);
      alert('Error uploading photo. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Courier Dashboard</h1>

      {/* Earnings Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Earnings</p>
              <p className="text-2xl font-bold text-gray-900">
                {earnings?.total_earnings || 0} EGP
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Truck className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Deliveries</p>
              <p className="text-2xl font-bold text-gray-900">
                {earnings?.total_deliveries || 0}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">This Month</p>
              <p className="text-2xl font-bold text-gray-900">
                {earnings?.this_month_earnings || 0} EGP
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Package className="h-6 w-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Pending</p>
              <p className="text-2xl font-bold text-gray-900">
                {deliveries.filter(d => d.status === 'assigned' || d.status === 'in_transit').length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Assigned Deliveries */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">My Deliveries</h2>
        </div>
        <div className="p-6">
          {deliveries.length === 0 ? (
            <div className="text-center py-8">
              <Truck className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No deliveries assigned</p>
            </div>
          ) : (
            <div className="space-y-4">
              {deliveries.map((delivery) => (
                <div key={delivery.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-gray-900">#{delivery.tracking_number}</h3>
                      <p className="text-sm text-gray-600">{delivery.package_description}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      delivery.status === 'delivered' 
                        ? 'bg-green-100 text-green-800'
                        : delivery.status === 'in_transit'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {delivery.status.replace('_', ' ').toUpperCase()}
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Pickup Address:</p>
                      <p className="text-sm text-gray-600">{delivery.pickup_address}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">Delivery Area:</p>
                      <p className="text-sm text-gray-600">
                        {delivery.delivery_address.split(',')[0]} {/* Show only area for privacy */}
                      </p>
                    </div>
                  </div>

                  {delivery.status === 'assigned' || delivery.status === 'in_transit' ? (
                    <div className="flex items-center space-x-4">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            handleUploadPhoto(delivery.id, file);
                          }
                        }}
                        className="hidden"
                        id={`photo-${delivery.id}`}
                      />
                      <label
                        htmlFor={`photo-${delivery.id}`}
                        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer transition-colors duration-200"
                      >
                        <Camera className="h-4 w-4 mr-2" />
                        Upload Delivery Photo
                      </label>
                      <p className="text-sm text-gray-500">
                        Earn 40 EGP upon delivery confirmation
                      </p>
                    </div>
                  ) : delivery.status === 'delivered' ? (
                    <div className="flex items-center text-green-600">
                      <Package className="h-4 w-4 mr-2" />
                      <span className="text-sm font-medium">Delivered - 40 EGP earned</span>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};