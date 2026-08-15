'use client';

import { useQuery } from '@tanstack/react-query';
import { getConversations } from '@/lib/api/conversations';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Search, MessageSquare, Sparkles, AlertCircle, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { formatRelativeTime } from '@/lib/utils';

export default function ConversationsPage() {
  const organizationId = 'org-1';
  const [search, setSearch] = useState('');

  const { data: conversations, isLoading, error } = useQuery({
    queryKey: ['conversations', organizationId],
    queryFn: () => getConversations(organizationId),
  });

  const filteredConversations = conversations?.filter(conv =>
    search ? (
      conv.customer.name.toLowerCase().includes(search.toLowerCase()) ||
      conv.customer.phone.includes(search) ||
      conv.lead.service.toLowerCase().includes(search.toLowerCase())
    ) : true
  );

  return (
    <div className="flex h-[calc(100vh-5rem)]">
      {/* Conversations List */}
      <div className="w-full md:w-96 bg-white flex flex-col" style={{ borderRight: '1px solid rgb(243 244 246)' }}>
        {/* Header */}
        <div className="p-6" style={{ borderBottom: '1px solid rgb(243 244 246)' }}>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Conversations
          </h1>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search conversations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-12 h-12 bg-gray-50 rounded-xl font-medium"
              style={{ border: '1px solid rgb(229 231 235)' }}
            />
          </div>
        </div>

        {/* Conversations List */}
        <div className="flex-1 overflow-y-auto">
          {isLoading ? (
            <div className="p-6 space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex gap-4 animate-pulse">
                  <div className="h-14 w-14 rounded-full bg-gray-200" />
                  <div className="flex-1 space-y-3">
                    <div className="h-4 w-3/4 bg-gray-200 rounded" />
                    <div className="h-3 w-1/2 bg-gray-200 rounded" />
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Failed to Load</h3>
              <p className="text-gray-600 mb-4">{(error as Error)?.message || 'Unable to load conversations'}</p>
              <Button 
                onClick={() => window.location.reload()} 
                className="bg-[#44A194] hover:bg-[#3a8c81] text-white font-semibold"
              >
                <Loader2 className="mr-2 h-4 w-4" />
                Retry
              </Button>
            </div>
          ) : filteredConversations && filteredConversations.length > 0 ? (
            <div>
              {filteredConversations.map((conversation, i) => (
                <Link
                  key={conversation.id}
                  href={`/conversations/${conversation.id}`}
                  className="flex gap-4 p-6 hover:bg-gray-50 transition-colors group"
                  style={{ borderTop: i > 0 ? '1px solid rgb(243 244 246)' : 'none' }}
                >
                  {/* Avatar */}
                  <div className="h-14 w-14 rounded-full bg-[#44A194]/10 flex items-center justify-center text-base font-bold text-[#44A194] flex-shrink-0" style={{ border: '2px solid rgba(68, 161, 148, 0.2)' }}>
                    {conversation.customer.name.split(' ').map(n => n[0]).join('')}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-900 truncate group-hover:text-[#44A194] transition-colors">
                          {conversation.customer.name}
                        </span>
                        {conversation.aiIntent === 'HIGH' && (
                          <Sparkles className="h-4 w-4 text-orange-500 flex-shrink-0" />
                        )}
                      </div>
                      <span className="text-xs text-gray-500 flex-shrink-0 font-medium">
                        {formatRelativeTime(conversation.lastMessageAt)}
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-600 truncate mb-2 font-medium">
                      {conversation.messages[conversation.messages.length - 1]?.content}
                    </p>

                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs font-semibold">
                        {conversation.lead.service}
                      </Badge>
                      {conversation.aiScore && conversation.aiScore >= 80 && (
                        <Badge className="text-xs bg-red-50 text-red-600 font-semibold">
                          Score: {conversation.aiScore}
                        </Badge>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-16 text-center">
              <div className="w-20 h-20 rounded-2xl bg-gray-50 flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="h-10 w-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                No conversations
              </h3>
              <p className="text-gray-600 mb-6">
                {search ? 'No conversations match your search' : 'Start receiving WhatsApp messages to see conversations here'}
              </p>
              {!search && (
                <Link href="/whatsapp">
                  <Button className="bg-[#44A194] hover:bg-[#3a8c81] text-white font-semibold">
                    Connect WhatsApp
                  </Button>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Empty State - Select Conversation */}
      <div className="hidden md:flex flex-1 items-center justify-center bg-gray-50">
        <div className="text-center max-w-sm">
          <div className="h-20 w-20 rounded-2xl bg-white flex items-center justify-center mx-auto mb-6 shadow-soft" style={{ border: '1px solid rgb(243 244 246)' }}>
            <MessageSquare className="h-10 w-10 text-gray-400" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Select a conversation
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Choose a conversation from the list to view messages and AI insights
          </p>
        </div>
      </div>
    </div>
  );
}
