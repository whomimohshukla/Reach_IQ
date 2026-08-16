'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Clock,
  Search,
  Filter,
  Calendar,
  MessageSquare,
  CheckCircle,
  XCircle,
  Phone,
  MapPin,
  Flame,
  Send
} from 'lucide-react';
import Link from 'next/link';
import { formatCurrency } from '@/lib/utils';
import { mockFollowUps } from '@/lib/mock/data';
import type { FollowUpStatus } from '@/types';

const statusFilters: { value: FollowUpStatus | 'ALL'; label: string }[] = [
  { value: 'ALL', label: 'All' },
  { value: 'SCHEDULED', label: 'Scheduled' },
  { value: 'SENT', label: 'Sent' },
  { value: 'FAILED', label: 'Failed' },
  { value: 'CANCELLED', label: 'Cancelled' },
];

export default function FollowUpsPage() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<FollowUpStatus | 'ALL'>('ALL');

  const getStatusColor = (status: FollowUpStatus) => {
    switch (status) {
      case 'SCHEDULED':
        return 'bg-blue-500 hover:bg-blue-600 text-white';
      case 'SENT':
        return 'bg-green-500 hover:bg-green-600 text-white';
      case 'FAILED':
        return 'bg-red-500 hover:bg-red-600 text-white';
      case 'CANCELLED':
        return 'bg-gray-500 hover:bg-gray-600 text-white';
      default:
        return 'bg-gray-500 hover:bg-gray-600 text-white';
    }
  };

  const filteredFollowUps = mockFollowUps.filter(followup => {
    const matchesSearch = search === '' || 
      followup.customer.name.toLowerCase().includes(search.toLowerCase()) ||
      followup.message.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'ALL' || followup.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Follow-ups</h1>
          <p className="text-gray-600 mt-2 text-base">
            Manage scheduled follow-up messages and reminders
          </p>
        </div>
        <Button className="bg-[#467235] hover:bg-[#365A29] text-white h-12 px-6 shadow-lg shadow-[#467235]/25 hover:shadow-xl hover:shadow-[#467235]/30 transition-all font-semibold">
          <MessageSquare className="h-4 w-4 mr-2" />
          Schedule Follow-up
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 sm:grid-cols-4">
        {[
          { 
            label: 'Total Follow-ups', 
            value: mockFollowUps.length, 
            icon: MessageSquare, 
            color: 'bg-blue-500',
            bgColor: 'bg-blue-50'
          },
          { 
            label: 'Scheduled', 
            value: mockFollowUps.filter(f => f.status === 'SCHEDULED').length, 
            icon: Clock, 
            color: 'bg-orange-500',
            bgColor: 'bg-orange-50'
          },
          { 
            label: 'Sent Today', 
            value: mockFollowUps.filter(f => f.status === 'SENT').length, 
            icon: Send, 
            color: 'bg-green-500',
            bgColor: 'bg-green-50'
          },
          { 
            label: 'Failed', 
            value: mockFollowUps.filter(f => f.status === 'FAILED').length, 
            icon: XCircle, 
            color: 'bg-red-500',
            bgColor: 'bg-red-50'
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
              placeholder="Search follow-ups by customer name or message..."
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

      {/* Follow-ups List */}
      {filteredFollowUps.length > 0 ? (
        <div className="space-y-4">
          {filteredFollowUps.map((followup) => (
            <Card
              key={followup.id}
              className="p-7 bg-white hover:shadow-xl transition-all"
              style={{ border: '1px solid rgb(243 244 246)' }}
            >
              <div className="flex items-start justify-between gap-6">
                {/* Left: Customer Info */}
                <div className="flex items-start gap-5 flex-1">
                  <div className="h-16 w-16 rounded-2xl bg-[#467235]/10 flex items-center justify-center text-base font-bold text-[#467235]" style={{ border: '2px solid rgba(68, 161, 148, 0.2)' }}>
                    {followup.customer.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Link href={`/leads/${followup.leadId}`}>
                        <h3 className="font-bold text-gray-900 text-xl hover:text-[#467235] transition-colors">
                          {followup.customer.name}
                        </h3>
                      </Link>
                      <Badge className={`${getStatusColor(followup.status)} font-semibold px-3 py-1`}>
                        {followup.status}
                      </Badge>
                      {followup.lead.status === 'HOT' && (
                        <Flame className="h-5 w-5 text-red-500 animate-pulse" />
                      )}
                    </div>

                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-gray-600 font-medium">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {new Date(followup.scheduledTime).toLocaleDateString('en-IN', {
                            weekday: 'short',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          {new Date(followup.scheduledTime).toLocaleTimeString('en-IN', {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          {followup.customer.phone}
                        </div>
                        {followup.customer.location && (
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            {followup.customer.location}
                          </div>
                        )}
                      </div>

                      {/* Message Preview */}
                      <div className="p-4 bg-gray-50 rounded-xl">
                        <div className="text-sm text-gray-500 mb-1 font-semibold">Message:</div>
                        <div className="text-gray-900 font-medium">{followup.message}</div>
                      </div>

                      {/* Reason */}
                      {followup.reason && (
                        <div className="flex items-start gap-2 text-sm text-gray-600">
                          <MessageSquare className="h-4 w-4 mt-0.5 text-gray-500" />
                          <span className="font-medium">
                            <span className="font-bold text-gray-900">Reason:</span> {followup.reason}
                          </span>
                        </div>
                      )}

                      {/* Lead Info */}
                      <div className="flex items-center gap-4 text-sm font-medium">
                        <div className="text-gray-600">{followup.lead.service}</div>
                        <div className="text-gray-400">•</div>
                        <div className="font-bold text-[#467235]">{formatCurrency(followup.lead.potentialValue)}</div>
                        <div className="text-gray-400">•</div>
                        <div className="text-gray-600">Score: {followup.lead.score}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Actions */}
                <div className="flex flex-col gap-3">
                  {followup.status === 'SCHEDULED' && (
                    <>
                      <Button className="bg-[#467235] hover:bg-[#365A29] text-white font-semibold h-11 px-6">
                        <Send className="h-4 w-4 mr-2" />
                        Send Now
                      </Button>
                      <Button variant="outline" className="font-semibold h-11 px-6" style={{ border: '2px solid rgb(229 231 235)' }}>
                        Edit
                      </Button>
                      <Button variant="outline" className="text-red-600 hover:bg-red-50 font-semibold h-11 px-6" style={{ border: '2px solid rgb(252 165 165)' }}>
                        <XCircle className="h-4 w-4 mr-2" />
                        Cancel
                      </Button>
                    </>
                  )}
                  {followup.status === 'SENT' && followup.sentAt && (
                    <div className="text-sm text-gray-500 text-right font-medium">
                      Sent {new Date(followup.sentAt).toLocaleString()}
                    </div>
                  )}
                  {followup.status === 'FAILED' && (
                    <Button className="bg-[#467235] hover:bg-[#365A29] text-white font-semibold h-11 px-6">
                      <Send className="h-4 w-4 mr-2" />
                      Retry
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="p-16 bg-white text-center" style={{ border: '1px solid rgb(243 244 246)' }}>
          <div className="max-w-sm mx-auto">
            <div className="h-20 w-20 rounded-2xl bg-gray-50 flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="h-10 w-10 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              No follow-ups found
            </h3>
            <p className="text-gray-600 mb-8 text-base">
              {search
                ? 'Try adjusting your search or filters'
                : 'Schedule your first follow-up to stay connected with leads'}
            </p>
            {!search && (
              <Button className="bg-[#467235] hover:bg-[#365A29] text-white h-12 px-8 shadow-lg shadow-[#467235]/25 font-semibold">
                <MessageSquare className="h-4 w-4 mr-2" />
                Schedule Follow-up
              </Button>
            )}
          </div>
        </Card>
      )}
    </div>
  );
}
