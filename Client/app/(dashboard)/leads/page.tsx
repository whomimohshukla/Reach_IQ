'use client';

import { useQuery } from '@tanstack/react-query';
import { getLeads } from '@/lib/api/leads';
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, Plus, Flame, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { formatCurrency, getLeadStatusColor } from '@/lib/utils';
import type { LeadStatus } from '@/types';

const statusTabs: { value: LeadStatus | 'ALL'; label: string; count?: number }[] = [
  { value: 'ALL', label: 'All' },
  { value: 'HOT', label: 'Hot' },
  { value: 'WARM', label: 'Warm' },
  { value: 'COLD', label: 'Cold' },
  { value: 'FOLLOW_UP', label: 'Follow Up' },
  { value: 'CONVERTED', label: 'Converted' },
  { value: 'LOST', label: 'Lost' },
];

export default function LeadsPage() {
  const organizationId = 'org-1';
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<LeadStatus | 'ALL'>('ALL');

  const { data, isLoading } = useQuery({
    queryKey: ['leads', organizationId, statusFilter, search],
    queryFn: () =>
      getLeads({
        organizationId,
        status: statusFilter === 'ALL' ? undefined : statusFilter,
        search: search || undefined,
      }),
  });

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Leads</h1>
          <p className="text-gray-600 mt-2 text-base">
            Manage and track all your customer leads
          </p>
        </div>
        <Button className="bg-[#467235] hover:bg-[#365A29] text-white h-12 px-6 shadow-lg shadow-[#467235]/25 hover:shadow-xl hover:shadow-[#467235]/30 transition-all font-semibold">
          <Plus className="h-4 w-4 mr-2" />
          Add Lead
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="p-5 bg-white" style={{ border: '1px solid rgb(243 244 246)' }}>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search leads by name, phone, or service..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-12 h-12 bg-gray-50 rounded-xl font-medium" style={{ border: '1px solid rgb(229 231 235)' }}
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
        {statusTabs.map((tab) => (
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
            {tab.count !== undefined && (
              <span className="ml-2 text-xs opacity-75">({tab.count})</span>
            )}
          </button>
        ))}
      </div>

      {/* Leads List */}
      {isLoading ? (
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
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
      ) : data?.leads && data.leads.length > 0 ? (
        <div className="space-y-4">
          {data.leads.map((lead) => (
            <Card
              key={lead.id}
              className="p-7 bg-white hover:shadow-xl transition-all group"
              style={{ border: '1px solid rgb(243 244 246)' }}
            >
              <Link href={`/leads/${lead.id}`}>
                <div className="flex items-start justify-between gap-6">
                  {/* Left: Customer Info */}
                  <div className="flex items-start gap-5 flex-1">
                    <div className="h-16 w-16 rounded-2xl bg-[#467235]/10 flex items-center justify-center text-base font-bold text-[#467235] flex-shrink-0" style={{ border: '2px solid rgba(68, 161, 148, 0.2)' }}>
                      {lead.customer.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-gray-900 text-xl group-hover:text-[#467235] transition-colors">
                          {lead.customer.name}
                        </h3>
                        {lead.status === 'HOT' && (
                          <Flame className="h-5 w-5 text-red-500 animate-pulse" />
                        )}
                        <Badge className={getLeadStatusColor(lead.status) + " font-semibold px-3 py-1"}>
                          {lead.status}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600 font-medium">
                        <span>{lead.service}</span>
                        <span>•</span>
                        <span>{lead.customer.phone}</span>
                        {lead.customer.location && (
                          <>
                            <span>•</span>
                            <span>{lead.customer.location}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Middle: Score & Value */}
                  <div className="hidden md:flex flex-col items-end gap-3 flex-shrink-0">
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-500 font-semibold">Score:</span>
                      <div className={`text-2xl font-bold px-3 py-1 rounded-lg ${
                        lead.score >= 80 ? 'text-green-600 bg-green-50' :
                        lead.score >= 60 ? 'text-orange-600 bg-orange-50' :
                        'text-gray-600 bg-gray-50'
                      }`}>
                        {lead.score}
                      </div>
                    </div>
                    <div className="text-xl font-bold text-gray-900">
                      {formatCurrency(lead.potentialValue)}
                    </div>
                  </div>

                  {/* Right: Action */}
                  <div className="flex flex-col items-end gap-2 flex-shrink-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[#467235] group-hover:text-[#365A29] transition-colors">
                        {lead.nextFollowUp ? 'Follow up scheduled' : 'Needs follow-up'}
                      </span>
                      <ArrowRight className="h-4 w-4 text-[#467235] group-hover:translate-x-1 transition-transform" />
                    </div>
                    {lead.lastContact && (
                      <span className="text-xs text-gray-500 font-medium">
                        Last contact: {new Date(lead.lastContact).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                </div>

                {/* AI Insight */}
                {lead.intent === 'HIGH' && (
                  <div className="mt-5 pt-5" style={{ borderTop: '1px solid rgb(243 244 246)' }}>
                    <div className="flex items-start gap-3 p-4 bg-[#467235]/5 rounded-xl">
                      <div className="h-6 w-6 rounded-lg bg-[#467235] flex items-center justify-center flex-shrink-0 text-white text-xs font-bold shadow-lg shadow-[#467235]/25">
                        AI
                      </div>
                      <p className="text-sm text-gray-700">
                        <span className="font-bold text-gray-900">High buying intent detected.</span>{' '}
                        Customer asked about pricing and availability. Recommend following up today for best conversion chance.
                      </p>
                    </div>
                  </div>
                )}
              </Link>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="p-16 bg-white text-center" style={{ border: '1px solid rgb(243 244 246)' }}>
          <div className="max-w-sm mx-auto">
            <div className="h-20 w-20 rounded-2xl bg-gray-50 flex items-center justify-center mx-auto mb-6">
              <Search className="h-10 w-10 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              No leads found
            </h3>
            <p className="text-gray-600 mb-8 text-base">
              {search
                ? 'Try adjusting your search or filters'
                : 'Connect WhatsApp to start receiving leads'}
            </p>
            {!search && (
              <Link href="/whatsapp">
                <Button className="bg-[#467235] hover:bg-[#365A29] text-white h-12 px-8 shadow-lg shadow-[#467235]/25 font-semibold">
                  Connect WhatsApp
                </Button>
              </Link>
            )}
          </div>
        </Card>
      )}

      {/* Pagination */}
      {data && data.total > data.limit && (
        <div className="flex items-center justify-between pt-4">
          <p className="text-sm text-gray-600 font-medium">
            Showing {((data.page - 1) * data.limit) + 1} to {Math.min(data.page * data.limit, data.total)} of {data.total} leads
          </p>
          <div className="flex gap-3">
            <Button variant="outline" size="sm" disabled={data.page === 1} className="h-10 px-5 font-semibold" style={{ border: '2px solid rgb(229 231 235)' }}>
              Previous
            </Button>
            <Button variant="outline" size="sm" disabled={data.page * data.limit >= data.total} className="h-10 px-5 font-semibold" style={{ border: '2px solid rgb(229 231 235)' }}>
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
