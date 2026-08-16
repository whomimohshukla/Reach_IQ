'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { 
  ArrowLeft, 
  Send, 
  Phone, 
  MapPin, 
  Calendar,
  Clock,
  Paperclip,
  Smile,
  MoreVertical,
  CheckCheck,
  Check,
  Sparkles,
  TrendingUp,
  AlertCircle
} from 'lucide-react';
import Link from 'next/link';
import { mockCustomers, mockLeads, mockConversations, mockMessages } from '@/lib/mock/data';

export default function ConversationDetailsPage({ params }: { params: { id: string } }) {
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  // Mock data - in real app, fetch based on params.id
  const conversation = mockConversations[0];
  const customer = mockCustomers.find(c => c.id === conversation.customerId);
  const lead = mockLeads.find(l => l.customerId === customer?.id);
  const messages = mockMessages.filter(m => m.conversationId === conversation.id);

  const handleSendMessage = async () => {
    if (!message.trim()) return;
    
    setIsSending(true);
    // Mock send
    setTimeout(() => {
      setIsSending(false);
      setMessage('');
    }, 1000);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-[#2E7D32] bg-[#2E7D32]/10';
    if (score >= 60) return 'text-[#B7791F] bg-[#B7791F]/10';
    return 'text-[#64705F] bg-[#F1F5EF]';
  };

  return (
    <div className="h-[calc(100vh-5rem)] flex">
      {/* Main Conversation Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-[#E2E8DF] px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/conversations">
                <Button variant="ghost" size="icon" className="rounded-xl">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-[#467235]/10 flex items-center justify-center text-[#467235] font-bold">
                  {customer?.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h2 className="text-lg font-bold text-[#172014]">{customer?.name}</h2>
                  <div className="flex items-center gap-2 text-sm text-[#64705F]">
                    <Phone className="h-3.5 w-3.5" />
                    {customer?.phone}
                  </div>
                </div>
              </div>

              {lead && (
                <Badge className={`${getScoreColor(lead.score)} border-0 font-semibold`}>
                  Score: {lead.score}
                </Badge>
              )}
            </div>

            <Button variant="ghost" size="icon" className="rounded-xl">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto bg-[#F8FAF7] p-6 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'CUSTOMER' ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`max-w-[70%] ${msg.sender === 'CUSTOMER' ? '' : 'flex flex-col items-end'}`}>
                <div
                  className={`rounded-2xl px-4 py-3 ${
                    msg.sender === 'CUSTOMER'
                      ? 'bg-white border border-[#E2E8DF]'
                      : 'bg-[#467235] text-white'
                  }`}
                >
                  <p className="text-sm">{msg.content}</p>
                </div>
                <div className="flex items-center gap-1.5 mt-1.5 px-1">
                  <span className="text-xs text-[#64705F]">
                    {new Date(msg.timestamp).toLocaleTimeString('en-US', {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                  {msg.sender === 'BUSINESS' && (
                    <>
                      {msg.status === 'SENT' && <Check className="h-3.5 w-3.5 text-[#64705F]" />}
                      {msg.status === 'DELIVERED' && <CheckCheck className="h-3.5 w-3.5 text-[#64705F]" />}
                      {msg.status === 'READ' && <CheckCheck className="h-3.5 w-3.5 text-[#2563EB]" />}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="bg-white border-t border-[#E2E8DF] p-4">
          <div className="flex items-end gap-3">
            <Button variant="ghost" size="icon" className="rounded-xl flex-shrink-0">
              <Paperclip className="h-5 w-5 text-[#64705F]" />
            </Button>
            
            <div className="flex-1 relative">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                placeholder="Type a message..."
                className="min-h-[48px] pr-12 border-[#CBD5C5] focus:border-[#467235] focus:ring-[#467235] resize-none"
                disabled={isSending}
              />
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl"
              >
                <Smile className="h-5 w-5 text-[#64705F]" />
              </Button>
            </div>

            <Button
              onClick={handleSendMessage}
              disabled={!message.trim() || isSending}
              className="h-12 w-12 rounded-xl bg-[#467235] hover:bg-[#365A29] flex-shrink-0"
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* AI Assistant Sidebar */}
      <div className="w-96 bg-white border-l border-[#E2E8DF] overflow-y-auto">
        <div className="p-6 space-y-6">
          {/* Customer Info */}
          <Card className="p-4 border-[#E2E8DF]">
            <h3 className="text-sm font-bold text-[#172014] mb-3">Customer Details</h3>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#64705F] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-[#64705F]">{customer?.location}</span>
              </div>
              <div className="flex items-start gap-2">
                <Calendar className="h-4 w-4 text-[#64705F] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-[#64705F]">
                  Customer since {new Date(customer?.createdAt || '').toLocaleDateString()}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 text-[#64705F] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-[#64705F]">
                  Last contact {new Date(customer?.lastContact || '').toLocaleDateString()}
                </span>
              </div>
            </div>
          </Card>

          <Separator className="bg-[#E2E8DF]" />

          {/* AI Lead Analysis */}
          {lead && (
            <Card className="p-4 border-[#467235]/20 bg-[#EEF4EA]">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-[#467235]" />
                <h3 className="text-sm font-bold text-[#172014]">AI Lead Analysis</h3>
              </div>
              
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-[#64705F]">Lead Score</span>
                    <span className="text-lg font-bold text-[#467235]">{lead.score}/100</span>
                  </div>
                  <div className="h-2 bg-white rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#467235]" 
                      style={{ width: `${lead.score}%` }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white rounded-lg p-2.5">
                    <div className="text-xs text-[#64705F] mb-0.5">Intent</div>
                    <div className="text-sm font-bold text-[#172014]">High</div>
                  </div>
                  <div className="bg-white rounded-lg p-2.5">
                    <div className="text-xs text-[#64705F] mb-0.5">Urgency</div>
                    <div className="text-sm font-bold text-[#172014]">Medium</div>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold text-[#64705F] mb-2">AI Summary</div>
                  <p className="text-sm text-[#33402F]">
                    Customer is interested in {lead.service}. Showed strong purchase intent with specific questions about pricing and availability. Ready to move forward.
                  </p>
                </div>
              </div>
            </Card>
          )}

          {/* AI Recommendation */}
          <Card className="p-4 border-[#2563EB]/20 bg-[#2563EB]/5">
            <div className="flex items-start gap-2 mb-3">
              <TrendingUp className="h-5 w-5 text-[#2563EB] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-bold text-[#172014] mb-1">Recommended Action</h3>
                <p className="text-sm text-[#64705F]">
                  Send a follow-up to confirm availability and close the deal.
                </p>
              </div>
            </div>
            <Button className="w-full h-10 bg-[#467235] hover:bg-[#365A29] mt-2">
              Send Follow-up
            </Button>
          </Card>

          {/* AI Suggested Reply */}
          <Card className="p-4 border-[#E2E8DF]">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="h-4 w-4 text-[#467235]" />
              <h3 className="text-sm font-bold text-[#172014]">AI Suggested Reply</h3>
            </div>
            <div className="bg-[#F8FAF7] rounded-lg p-3 mb-3">
              <p className="text-sm text-[#33402F]">
                "Hi {customer?.name}, our technician is available tomorrow between 2-4 PM. Would that work for you? The service will cost ₹{lead?.potentialValue}."
              </p>
            </div>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                className="flex-1 h-9 border-[#CBD5C5] hover:bg-[#F8FAF7]"
                onClick={() => setMessage("Hi " + customer?.name + ", our technician is available tomorrow between 2-4 PM. Would that work for you? The service will cost ₹" + lead?.potentialValue + ".")}
              >
                Use Reply
              </Button>
              <Button 
                variant="ghost" 
                className="h-9 px-3"
              >
                Regenerate
              </Button>
            </div>
          </Card>

          {/* Quick Actions */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-[#64705F] uppercase tracking-wide">Quick Actions</h3>
            <Button variant="outline" className="w-full justify-start h-10 border-[#CBD5C5] hover:bg-[#F8FAF7]">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Follow-up
            </Button>
            <Button variant="outline" className="w-full justify-start h-10 border-[#CBD5C5] hover:bg-[#F8FAF7]">
              <CheckCheck className="h-4 w-4 mr-2" />
              Mark as Converted
            </Button>
            <Button variant="outline" className="w-full justify-start h-10 border-[#CBD5C5] hover:bg-[#F8FAF7] text-[#C62828] hover:text-[#C62828]">
              <AlertCircle className="h-4 w-4 mr-2" />
              Mark as Lost
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
