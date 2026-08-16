'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  MapPin, 
  IndianRupee,
  MessageSquare,
  CheckCircle2,
  XCircle,
  Edit,
  Wrench
} from 'lucide-react';
import Link from 'next/link';
import { mockBookings, mockCustomers, mockLeads } from '@/lib/mock/data';

export default function BookingDetailsPage({ params }: { params: { id: string } }) {
  // Mock data - in real app, fetch based on params.id
  const booking = mockBookings[0];
  const customer = mockCustomers.find(c => c.id === booking.customerId);
  const lead = mockLeads.find(l => l.customerId === customer?.id);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'SCHEDULED':
        return 'bg-[#2563EB]/10 text-[#2563EB] border-[#2563EB]/20';
      case 'CONFIRMED':
        return 'bg-[#467235]/10 text-[#467235] border-[#467235]/20';
      case 'COMPLETED':
        return 'bg-[#2E7D32]/10 text-[#2E7D32] border-[#2E7D32]/20';
      case 'CANCELLED':
        return 'bg-[#C62828]/10 text-[#C62828] border-[#C62828]/20';
      default:
        return 'bg-[#F1F5EF] text-[#64705F] border-[#E2E8DF]';
    }
  };

  const statusTimeline = [
    { 
      status: 'Created', 
      time: booking.createdAt, 
      icon: Calendar,
      complete: true 
    },
    { 
      status: 'Confirmed', 
      time: booking.createdAt, 
      icon: CheckCircle2,
      complete: booking.status !== 'SCHEDULED' 
    },
    { 
      status: 'In Progress', 
      time: booking.scheduledDate, 
      icon: Wrench,
      complete: booking.status === 'COMPLETED' 
    },
    { 
      status: 'Completed', 
      time: null, 
      icon: CheckCircle2,
      complete: booking.status === 'COMPLETED' 
    },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <Link href="/bookings">
          <Button variant="ghost" className="mb-4 -ml-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Bookings
          </Button>
        </Link>
        
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#172014] mb-2">
              Booking #{booking.id.slice(-8).toUpperCase()}
            </h1>
            <p className="text-[#64705F]">
              Created on {new Date(booking.createdAt).toLocaleDateString('en-IN', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </p>
          </div>
          
          <Badge className={`${getStatusColor(booking.status)} border font-semibold px-4 py-1.5`}>
            {booking.status}
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Service Details */}
          <Card className="p-6 border-[#E2E8DF]">
            <h2 className="text-lg font-bold text-[#172014] mb-4">Service Details</h2>
            
            <div className="space-y-4">
              <div>
                <div className="text-sm text-[#64705F] mb-1">Service</div>
                <div className="text-base font-semibold text-[#172014]">{booking.service}</div>
              </div>

              <Separator className="bg-[#E2E8DF]" />

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-[#64705F] mb-1">Scheduled Date</div>
                  <div className="flex items-center gap-2 text-[#172014]">
                    <Calendar className="h-4 w-4 text-[#467235]" />
                    <span className="font-semibold">
                      {new Date(booking.scheduledDate).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                </div>

                <div>
                  <div className="text-sm text-[#64705F] mb-1">Time Slot</div>
                  <div className="flex items-center gap-2 text-[#172014]">
                    <Clock className="h-4 w-4 text-[#467235]" />
                    <span className="font-semibold">{booking.timeSlot}</span>
                  </div>
                </div>
              </div>

              <Separator className="bg-[#E2E8DF]" />

              <div>
                <div className="text-sm text-[#64705F] mb-1">Assigned Technician</div>
                <div className="flex items-center gap-3 mt-2">
                  <div className="h-10 w-10 rounded-full bg-[#467235]/10 flex items-center justify-center text-[#467235] font-bold">
                    {booking.technician.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-[#172014]">{booking.technician}</div>
                    <div className="text-sm text-[#64705F]">Service Technician</div>
                  </div>
                </div>
              </div>

              <Separator className="bg-[#E2E8DF]" />

              <div>
                <div className="text-sm text-[#64705F] mb-1">Amount</div>
                <div className="flex items-center gap-1 text-2xl font-bold text-[#172014]">
                  <IndianRupee className="h-6 w-6" />
                  <span>{booking.amount.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Status Timeline */}
          <Card className="p-6 border-[#E2E8DF]">
            <h2 className="text-lg font-bold text-[#172014] mb-6">Status Timeline</h2>
            
            <div className="space-y-4">
              {statusTimeline.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      item.complete 
                        ? 'bg-[#467235] text-white' 
                        : 'bg-[#F1F5EF] text-[#64705F]'
                    }`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 pt-1">
                      <div className={`font-semibold ${
                        item.complete ? 'text-[#172014]' : 'text-[#64705F]'
                      }`}>
                        {item.status}
                      </div>
                      {item.time && (
                        <div className="text-sm text-[#64705F] mt-0.5">
                          {new Date(item.time).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </div>
                      )}
                    </div>
                    {index < statusTimeline.length - 1 && (
                      <div className={`absolute left-[2.45rem] top-12 w-0.5 h-12 ${
                        item.complete ? 'bg-[#467235]' : 'bg-[#E2E8DF]'
                      }`} style={{ marginTop: '1rem' }} />
                    )}
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Actions */}
          <Card className="p-6 border-[#E2E8DF]">
            <h2 className="text-lg font-bold text-[#172014] mb-4">Actions</h2>
            
            <div className="flex flex-wrap gap-3">
              {booking.status === 'SCHEDULED' && (
                <>
                  <Button className="bg-[#467235] hover:bg-[#365A29]">
                    <CheckCircle2 className="h-4 w-4 mr-2" />
                    Mark as Completed
                  </Button>
                  <Button variant="outline" className="border-[#CBD5C5]">
                    <Edit className="h-4 w-4 mr-2" />
                    Reschedule
                  </Button>
                  <Button variant="outline" className="border-[#C62828]/30 text-[#C62828] hover:bg-[#C62828]/10">
                    <XCircle className="h-4 w-4 mr-2" />
                    Cancel Booking
                  </Button>
                </>
              )}
              {booking.status === 'COMPLETED' && (
                <div className="bg-[#EEF4EA] rounded-xl p-4 w-full">
                  <div className="flex items-center gap-2 text-[#2E7D32]">
                    <CheckCircle2 className="h-5 w-5" />
                    <span className="font-semibold">This booking has been completed</span>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Customer Info */}
          <Card className="p-6 border-[#E2E8DF]">
            <h2 className="text-lg font-bold text-[#172014] mb-4">Customer Information</h2>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-full bg-[#467235]/10 flex items-center justify-center text-[#467235] font-bold">
                {customer?.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="font-semibold text-[#172014]">{customer?.name}</div>
                <Link 
                  href={`/leads/${lead?.id}`}
                  className="text-sm text-[#467235] hover:text-[#365A29]"
                >
                  View Lead Profile
                </Link>
              </div>
            </div>

            <Separator className="bg-[#E2E8DF] my-4" />

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-[#64705F] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs text-[#64705F] mb-0.5">Phone</div>
                  <div className="text-sm font-semibold text-[#172014]">{customer?.phone}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#64705F] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs text-[#64705F] mb-0.5">Location</div>
                  <div className="text-sm font-semibold text-[#172014]">{customer?.location}</div>
                </div>
              </div>
            </div>

            <Separator className="bg-[#E2E8DF] my-4" />

            <Link href={`/conversations/${booking.conversationId}`}>
              <Button variant="outline" className="w-full border-[#CBD5C5]">
                <MessageSquare className="h-4 w-4 mr-2" />
                View Conversation
              </Button>
            </Link>
          </Card>

          {/* Lead Source */}
          {lead && (
            <Card className="p-6 border-[#E2E8DF]">
              <h2 className="text-lg font-bold text-[#172014] mb-4">Lead Information</h2>
              
              <div className="space-y-3">
                <div>
                  <div className="text-xs text-[#64705F] mb-1">Source</div>
                  <Badge variant="outline" className="border-[#467235]/30 text-[#467235]">
                    {lead.source}
                  </Badge>
                </div>

                <div>
                  <div className="text-xs text-[#64705F] mb-1">Lead Score</div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-[#F1F5EF] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#467235]" 
                        style={{ width: `${lead.score}%` }}
                      />
                    </div>
                    <span className="text-sm font-bold text-[#172014]">{lead.score}</span>
                  </div>
                </div>

                <div>
                  <div className="text-xs text-[#64705F] mb-1">Potential Value</div>
                  <div className="flex items-center gap-1 text-lg font-bold text-[#172014]">
                    <IndianRupee className="h-4 w-4" />
                    <span>{lead.potentialValue.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
