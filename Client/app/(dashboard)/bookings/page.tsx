'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Calendar, 
  Clock, 
  IndianRupee, 
  Search, 
  Filter,
  CheckCircle,
  XCircle,
  MapPin,
  Phone,
  Loader2,
  AlertCircle
} from 'lucide-react';
import Link from 'next/link';
import { formatCurrency } from '@/lib/utils';
import { mockBookings } from '@/lib/mock/data';
import type { BookingStatus } from '@/types';

const statusFilters: { value: BookingStatus | 'ALL'; label: string }[] = [
  { value: 'ALL', label: 'All' },
  { value: 'SCHEDULED', label: 'Scheduled' },
  { value: 'IN_PROGRESS', label: 'In Progress' },
  { value: 'COMPLETED', label: 'Completed' },
  { value: 'CANCELLED', label: 'Cancelled' },
  { value: 'RESCHEDULED', label: 'Rescheduled' },
];

export default function BookingsPage() {
  const [isLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<BookingStatus | 'ALL'>('ALL');

  const getStatusColor = (status: BookingStatus) => {
    switch (status) {
      case 'SCHEDULED':
        return 'bg-blue-500 hover:bg-blue-600 text-white';
      case 'IN_PROGRESS':
        return 'bg-orange-500 hover:bg-orange-600 text-white';
      case 'COMPLETED':
        return 'bg-green-500 hover:bg-green-600 text-white';
      case 'CANCELLED':
        return 'bg-red-500 hover:bg-red-600 text-white';
      case 'RESCHEDULED':
        return 'bg-purple-500 hover:bg-purple-600 text-white';
      default:
        return 'bg-gray-500 hover:bg-gray-600 text-white';
    }
  };

  const filteredBookings = mockBookings.filter(booking => {
    const matchesSearch = search === '' || 
      booking.customer.name.toLowerCase().includes(search.toLowerCase()) ||
      booking.service.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'ALL' || booking.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Bookings</h1>
          <p className="text-gray-600 mt-2 text-base">
            Manage scheduled appointments and service bookings
          </p>
        </div>
        <Button className="bg-[#467235] hover:bg-[#365A29] text-white h-12 px-6 shadow-lg shadow-[#467235]/25 hover:shadow-xl hover:shadow-[#467235]/30 transition-all font-semibold">
          <Calendar className="h-4 w-4 mr-2" />
          New Booking
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 sm:grid-cols-4">
        {[
          { 
            label: 'Total Bookings', 
            value: mockBookings.length, 
            icon: Calendar, 
            color: 'bg-blue-500',
            bgColor: 'bg-blue-50'
          },
          { 
            label: 'Scheduled', 
            value: mockBookings.filter(b => b.status === 'SCHEDULED').length, 
            icon: Clock, 
            color: 'bg-orange-500',
            bgColor: 'bg-orange-50'
          },
          { 
            label: 'Completed', 
            value: mockBookings.filter(b => b.status === 'COMPLETED').length, 
            icon: CheckCircle, 
            color: 'bg-green-500',
            bgColor: 'bg-green-50'
          },
          { 
            label: 'Revenue', 
            value: formatCurrency(mockBookings.reduce((sum, b) => sum + b.amount, 0)), 
            icon: IndianRupee, 
            color: 'bg-[#467235]',
            bgColor: 'bg-[#467235]/10'
          },
        ].map((stat, i) => (
          <Card key={i} className="p-7 bg-white" style={{ border: '1px solid rgb(243 244 246)' }}>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500 mb-2 font-semibold">{stat.label}</div>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
              </div>
              <div className={`h-14 w-14 rounded-2xl ${stat.bgColor} flex items-center justify-center`}>
                <stat.icon className={`h-7 w-7 ${stat.color.replace('bg-', 'text-')}`} />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Search and Filters */}
      <Card className="p-5 bg-white" style={{ border: '1px solid rgb(243 244 246)' }}>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search by customer name or service..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-12 h-12 bg-gray-50 rounded-xl font-medium" 
              style={{ border: '1px solid rgb(229 231 235)' }}
            />
          </div>
          <Button variant="outline" className="gap-2 h-12 px-6 font-semibold hover:bg-[#467235]/10 hover:text-[#467235] transition-all" style={{ border: '2px solid rgb(229 231 235)' }}>
            <Filter className="h-4 w-4" />
            Filters
          </Button>
        </div>
      </Card>

      {/* Status Tabs */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {statusFilters.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setStatusFilter(tab.value)}
            className={`px-6 py-3 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
              statusFilter === tab.value
                ? 'bg-[#467235] text-white shadow-lg shadow-[#467235]/25'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
            style={{ border: statusFilter === tab.value ? 'none' : '1px solid rgb(243 244 246)' }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Bookings List */}
      {isLoading ? (
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <Card key={i} className="p-7 bg-white" style={{ border: '1px solid rgb(243 244 246)' }}>
              <div className="flex items-center gap-5">
                <div className="h-16 w-16 rounded-2xl bg-gray-100 animate-pulse" />
                <div className="flex-1 space-y-3">
                  <div className="h-5 w-1/3 bg-gray-100 rounded-lg animate-pulse" />
                  <div className="h-4 w-1/2 bg-gray-100 rounded-lg animate-pulse" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : filteredBookings.length > 0 ? (
        <div className="space-y-4">
          {filteredBookings.map((booking) => (
            <Card
              key={booking.id}
              className="p-7 bg-white hover:shadow-xl transition-all"
              style={{ border: '1px solid rgb(243 244 246)' }}
            >
              <div className="flex items-start justify-between gap-6">
                {/* Left: Customer Info */}
                <div className="flex items-start gap-5 flex-1">
                  <div className="h-16 w-16 rounded-2xl bg-[#467235]/10 flex items-center justify-center text-base font-bold text-[#467235]" style={{ border: '2px solid rgba(68, 161, 148, 0.2)' }}>
                    {booking.customer.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-bold text-gray-900 text-xl">
                        {booking.customer.name}
                      </h3>
                      <Badge className={`${getStatusColor(booking.status)} font-semibold px-3 py-1`}>
                        {booking.status.replace('_', ' ')}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="text-lg font-bold text-[#467235]">
                        {booking.service}
                      </div>
                      <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-gray-600 font-medium">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {new Date(booking.scheduledDate).toLocaleDateString('en-IN', {
                            weekday: 'short',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          {booking.scheduledTime}
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          {booking.customer.phone}
                        </div>
                        {booking.customer.location && (
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            {booking.customer.location}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Amount & Actions */}
                <div className="flex flex-col items-end gap-4">
                  <div className="text-3xl font-bold text-gray-900">
                    {formatCurrency(booking.amount)}
                  </div>
                  <div className="flex gap-2">
                    {booking.status === 'SCHEDULED' && (
                      <>
                        <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white font-semibold h-10 px-5">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Complete
                        </Button>
                        <Button size="sm" variant="outline" className="font-semibold h-10 px-5" style={{ border: '2px solid rgb(229 231 235)' }}>
                          Reschedule
                        </Button>
                      </>
                    )}
                    {booking.status === 'COMPLETED' && booking.completedAt && (
                      <div className="text-sm text-gray-500 font-medium">
                        Completed {new Date(booking.completedAt).toLocaleDateString()}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {booking.notes && (
                <div className="mt-5 pt-5" style={{ borderTop: '1px solid rgb(243 244 246)' }}>
                  <div className="text-sm text-gray-600 font-medium">
                    <span className="font-bold text-gray-900">Note:</span> {booking.notes}
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      ) : (
        <Card className="p-16 bg-white text-center" style={{ border: '1px solid rgb(243 244 246)' }}>
          <div className="max-w-sm mx-auto">
            <div className="h-20 w-20 rounded-2xl bg-gray-50 flex items-center justify-center mx-auto mb-6">
              <Calendar className="h-10 w-10 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              No bookings found
            </h3>
            <p className="text-gray-600 mb-8 text-base">
              {search
                ? 'Try adjusting your search or filters'
                : 'Create your first booking to get started'}
            </p>
            {!search && (
              <Button className="bg-[#467235] hover:bg-[#365A29] text-white h-12 px-8 shadow-lg shadow-[#467235]/25 font-semibold">
                <Calendar className="h-4 w-4 mr-2" />
                Create Booking
              </Button>
            )}
          </div>
        </Card>
      )}
    </div>
  );
}
