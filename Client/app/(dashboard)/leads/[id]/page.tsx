'use client';

import { useQuery } from '@tanstack/react-query';
import { getLead } from '@/lib/api/leads';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Phone, 
  MapPin, 
  Calendar, 
  Target, 
  TrendingUp,
  MessageSquare,
  Flame,
  CheckCircle,
  XCircle,
  Loader2,
  AlertCircle,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { formatCurrency, formatRelativeTime, getLeadStatusColor } from '@/lib/utils';

export default function LeadDetailsPage() {
  const params = useParams();
  const leadId = params.id as string;

  const { data: lead, isLoading, error } = useQuery({
    queryKey: ['lead', leadId],
    queryFn: () => getLead(leadId),
  });

  // Loading State
  if (isLoading) {
    return (
      <div className="p-8 space-y-6">
        <div className="animate-pulse space-y-6">
          <div className="h-10 w-48 bg-gray-200 rounded-xl" />
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <div className="h-64 bg-gray-200 rounded-2xl" />
              <div className="h-48 bg-gray-200 rounded-2xl" />
            </div>
            <div className="space-y-6">
              <div className="h-40 bg-gray-200 rounded-2xl" />
              <div className="h-60 bg-gray-200 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="p-8">
        <Card className="p-12 text-center bg-white max-w-md mx-auto" style={{ border: '1px solid rgb(243 244 246)' }}>
          <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="h-8 w-8 text-red-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Unable to Load Lead
          </h2>
          <p className="text-gray-600 mb-6 text-base">
            {(error as Error)?.message || 'Something went wrong. Please try again.'}
          </p>
          <div className="flex gap-3 justify-center">
            <Link href="/leads">
              <Button variant="outline" className="font-semibold" style={{ border: '2px solid rgb(229 231 235)' }}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Leads
              </Button>
            </Link>
            <Button 
              onClick={() => window.location.reload()} 
              className="bg-[#467235] hover:bg-[#365A29] text-white font-semibold"
            >
              Try Again
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  // Not Found State
  if (!lead) {
    return (
      <div className="p-8">
        <Card className="p-12 text-center bg-white max-w-md mx-auto" style={{ border: '1px solid rgb(243 244 246)' }}>
          <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center mx-auto mb-4">
            <Target className="h-8 w-8 text-orange-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Lead not found
          </h2>
          <p className="text-gray-600 mb-6 text-base">
            This lead may have been deleted or doesn't exist
          </p>
          <Link href="/leads">
            <Button className="bg-[#467235] hover:bg-[#365A29] text-white font-semibold h-12 px-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Leads
            </Button>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/leads">
          <Button variant="outline" className="h-11 px-5 font-semibold hover:bg-gray-50" style={{ border: '2px solid rgb(229 231 235)' }}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Leads
          </Button>
        </Link>
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column - Lead Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Customer Card */}
          <Card className="p-8 bg-white" style={{ border: '1px solid rgb(243 244 246)' }}>
            <div className="flex items-start justify-between mb-8">
              <div className="flex items-start gap-5">
                <div className="h-20 w-20 rounded-2xl bg-[#467235]/10 flex items-center justify-center text-2xl font-bold text-[#467235]" style={{ border: '2px solid rgba(68, 161, 148, 0.2)' }}>
                  {lead.customer.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <h1 className="text-3xl font-bold text-gray-900">
                      {lead.customer.name}
                    </h1>
                    {lead.status === 'HOT' && (
                      <Flame className="h-6 w-6 text-red-500 animate-pulse" />
                    )}
                  </div>
                  <div className="flex flex-wrap gap-5 text-base text-gray-600 font-medium">
                    <div className="flex items-center gap-2">
                      <Phone className="h-5 w-5" />
                      {lead.customer.phone}
                    </div>
                    {lead.customer.location && (
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5" />
                        {lead.customer.location}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <Badge className={`${getLeadStatusColor(lead.status)} text-white font-bold px-4 py-2 text-base`}>
                {lead.status}
              </Badge>
            </div>

            {/* Service Info */}
            <div className="grid grid-cols-2 gap-5 p-6 bg-gray-50 rounded-2xl">
              <div>
                <div className="text-sm text-gray-500 mb-2 font-semibold">Service</div>
                <div className="font-bold text-gray-900 text-lg">{lead.service}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-2 font-semibold">Source</div>
                <div className="font-bold text-gray-900 text-lg">{lead.source}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-2 font-semibold">Created</div>
                <div className="font-bold text-gray-900 text-lg">
                  {new Date(lead.createdAt).toLocaleDateString()}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-2 font-semibold">Last Contact</div>
                <div className="font-bold text-gray-900 text-lg">
                  {lead.lastContact ? formatRelativeTime(lead.lastContact) : 'Never'}
                </div>
              </div>
            </div>
          </Card>

          {/* AI Analysis Card */}
          <Card className="p-8 bg-white" style={{ border: '1px solid rgb(243 244 246)' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-2xl bg-[#467235] flex items-center justify-center shadow-lg shadow-[#467235]/30">
                <span className="text-base font-bold text-white">AI</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                AI Lead Analysis
              </h2>
            </div>

            <div className="grid grid-cols-3 gap-5 mb-8">
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className="text-sm text-gray-500 mb-2 font-semibold">Intent</div>
                <div className={`text-2xl font-bold ${
                  lead.intent === 'HIGH' ? 'text-green-600' :
                  lead.intent === 'MEDIUM' ? 'text-orange-600' :
                  'text-gray-600'
                }`}>
                  {lead.intent || 'N/A'}
                </div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className="text-sm text-gray-500 mb-2 font-semibold">Urgency</div>
                <div className={`text-2xl font-bold ${
                  lead.urgency === 'HIGH' ? 'text-red-600' :
                  lead.urgency === 'MEDIUM' ? 'text-orange-600' :
                  'text-gray-600'
                }`}>
                  {lead.urgency || 'N/A'}
                </div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className="text-sm text-gray-500 mb-2 font-semibold">Sentiment</div>
                <div className={`text-2xl font-bold ${
                  lead.sentiment === 'POSITIVE' ? 'text-green-600' :
                  lead.sentiment === 'NEUTRAL' ? 'text-gray-600' :
                  'text-red-600'
                }`}>
                  {lead.sentiment || 'N/A'}
                </div>
              </div>
            </div>

            <div className="p-6 bg-[#467235]/10 rounded-2xl" style={{ border: '2px solid rgba(68, 161, 148, 0.2)' }}>
              <h3 className="font-bold text-gray-900 mb-3 text-lg flex items-center gap-2">
                <Target className="h-5 w-5 text-[#467235]" />
                AI Recommendation
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                {lead.intent === 'HIGH' 
                  ? 'Follow up today. Customer showed high urgency and clear buying intent. Best time: Morning (10-11 AM).'
                  : 'Customer showed interest but needs nurturing. Schedule follow-up for next week.'
                }
              </p>
              <div className="flex items-center gap-2 mt-4 text-sm text-gray-600 font-semibold">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span>Confidence: {lead.score >= 80 ? 'High' : lead.score >= 60 ? 'Medium' : 'Low'} ({lead.score}%)</span>
              </div>
            </div>
          </Card>

          {/* Conversation Timeline */}
          <Card className="p-8 bg-white" style={{ border: '1px solid rgb(243 244 246)' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Conversation History
            </h2>
            <div className="text-center py-16">
              <div className="h-20 w-20 rounded-2xl bg-[#467235]/10 flex items-center justify-center mx-auto mb-5">
                <MessageSquare className="h-10 w-10 text-[#467235]" />
              </div>
              <p className="text-gray-600 mb-6 text-base font-medium">
                View complete WhatsApp conversation with this customer
              </p>
              <Link href={`/conversations/${lead.id}`}>
                <Button className="bg-[#467235] hover:bg-[#365A29] text-white h-12 px-8 font-semibold shadow-lg shadow-[#467235]/25">
                  Open Conversation
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </Card>
        </div>

        {/* Right Column - Actions & Stats */}
        <div className="space-y-6">
          {/* Lead Score Card */}
          <Card className="p-8 bg-white text-center" style={{ border: '1px solid rgb(243 244 246)' }}>
            <div className="text-sm text-gray-500 mb-3 font-semibold">Lead Score</div>
            <div className={`text-6xl font-bold mb-3 ${
              lead.score >= 80 ? 'text-green-600' :
              lead.score >= 60 ? 'text-orange-600' :
              'text-gray-600'
            }`}>
              {lead.score}
            </div>
            <div className="text-sm text-gray-500 font-medium">out of 100</div>
            
            <div className="mt-6 pt-6" style={{ borderTop: '1px solid rgb(243 244 246)' }}>
              <div className="text-sm text-gray-500 mb-2 font-semibold">Potential Value</div>
              <div className="text-3xl font-bold text-gray-900">
                {formatCurrency(lead.potentialValue)}
              </div>
            </div>
          </Card>

          {/* Actions Card */}
          <Card className="p-8 bg-white" style={{ border: '1px solid rgb(243 244 246)' }}>
            <h3 className="font-bold text-gray-900 mb-6 text-xl">Quick Actions</h3>
            <div className="space-y-4">
              <Button className="w-full h-12 bg-[#467235] hover:bg-[#365A29] text-white font-semibold shadow-lg shadow-[#467235]/25">
                <MessageSquare className="h-5 w-5 mr-2" />
                Send Follow-up
              </Button>
              <Button variant="outline" className="w-full h-12 font-semibold hover:bg-gray-50" style={{ border: '2px solid rgb(229 231 235)' }}>
                <Phone className="h-5 w-5 mr-2" />
                Call Customer
              </Button>
              <Button variant="outline" className="w-full h-12 font-semibold hover:bg-gray-50" style={{ border: '2px solid rgb(229 231 235)' }}>
                <Calendar className="h-5 w-5 mr-2" />
                Schedule Meeting
              </Button>
            </div>

            <div className="mt-8 pt-8 space-y-3" style={{ borderTop: '1px solid rgb(243 244 246)' }}>
              <Button variant="outline" className="w-full h-12 text-green-600 hover:bg-green-50 font-semibold" style={{ border: '2px solid rgb(134 239 172)' }}>
                <CheckCircle className="h-5 w-5 mr-2" />
                Mark as Converted
              </Button>
              <Button variant="outline" className="w-full h-12 text-red-600 hover:bg-red-50 font-semibold" style={{ border: '2px solid rgb(252 165 165)' }}>
                <XCircle className="h-5 w-5 mr-2" />
                Mark as Lost
              </Button>
            </div>
          </Card>

          {/* Next Follow-up Card */}
          {lead.nextFollowUp && (
            <Card className="p-8 bg-[#467235]/10" style={{ border: '2px solid rgba(68, 161, 148, 0.2)' }}>
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="h-6 w-6 text-[#467235]" />
                <h3 className="font-bold text-gray-900 text-lg">Next Follow-up</h3>
              </div>
              <div className="text-base text-gray-700 font-semibold">
                {new Date(lead.nextFollowUp).toLocaleDateString('en-IN', {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric',
                  hour: 'numeric',
                  minute: 'numeric'
                })}
              </div>
            </Card>
          )}

          {/* Activity Card */}
          <Card className="p-8 bg-white" style={{ border: '1px solid rgb(243 244 246)' }}>
            <h3 className="font-bold text-gray-900 mb-6 text-xl">Recent Activity</h3>
            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="text-gray-900 font-bold text-base">Lead created</div>
                  <div className="text-gray-500 text-sm font-medium mt-1">
                    {formatRelativeTime(lead.createdAt)}
                  </div>
                </div>
              </div>
              {lead.lastContact && (
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-green-50 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-gray-900 font-bold text-base">Last conversation</div>
                    <div className="text-gray-500 text-sm font-medium mt-1">
                      {formatRelativeTime(lead.lastContact)}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
