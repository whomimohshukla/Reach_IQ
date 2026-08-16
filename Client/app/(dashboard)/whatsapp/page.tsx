'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle,
  XCircle,
  RefreshCw,
  Smartphone,
  MessageSquare,
  Zap,
  Settings,
  AlertCircle,
  TrendingUp,
  Activity
} from 'lucide-react';
import { mockWhatsAppConnection } from '@/lib/mock/data';
import { formatRelativeTime } from '@/lib/utils';

export default function WhatsAppPage() {
  const [connection] = useState(mockWhatsAppConnection);
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnect = () => {
    setIsConnecting(true);
    setTimeout(() => {
      setIsConnecting(false);
    }, 2000);
  };

  const getStatusColor = () => {
    switch (connection.status) {
      case 'CONNECTED':
        return 'bg-green-500';
      case 'CONNECTING':
        return 'bg-orange-500';
      case 'ERROR':
      case 'DISCONNECTED':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusText = () => {
    switch (connection.status) {
      case 'CONNECTED':
        return 'Connected';
      case 'CONNECTING':
        return 'Connecting...';
      case 'ERROR':
        return 'Connection Error';
      case 'DISCONNECTED':
        return 'Disconnected';
      default:
        return 'Not Connected';
    }
  };

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900">WhatsApp Connection</h1>
        <p className="text-gray-600 mt-2 text-base">
          Manage your WhatsApp Business integration
        </p>
      </div>

      {/* Connection Status Card */}
      <Card className="p-10 bg-white" style={{ border: '1px solid rgb(243 244 246)' }}>
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-6 flex-1">
            <div className="h-20 w-20 rounded-2xl bg-green-50 flex items-center justify-center shadow-lg">
              <MessageSquare className="h-10 w-10 text-green-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <h2 className="text-3xl font-bold text-gray-900">WhatsApp Business</h2>
                <Badge className={`${
                  connection.status === 'CONNECTED' ? 'bg-green-500' :
                  connection.status === 'CONNECTING' ? 'bg-orange-500' :
                  'bg-red-500'
                } text-white font-bold px-4 py-2 text-base`}>
                  <div className={`h-2.5 w-2.5 rounded-full ${
                    connection.status === 'CONNECTED' ? 'bg-white' :
                    'bg-white/70'
                  } mr-2 ${connection.status === 'CONNECTED' ? 'animate-pulse' : ''}`} />
                  {getStatusText()}
                </Badge>
              </div>

              {connection.status === 'CONNECTED' && (
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Smartphone className="h-5 w-5 text-gray-500" />
                    <span className="font-bold">{connection.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="font-semibold">{connection.businessName}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Activity className="h-5 w-5 text-gray-500" />
                    <span className="font-medium">
                      Last activity: {connection.lastActivity ? formatRelativeTime(connection.lastActivity) : 'Never'}
                    </span>
                  </div>
                  {connection.isDevelopment && (
                    <div className="flex items-center gap-3 mt-4 p-4 bg-orange-50 rounded-xl" style={{ border: '1px solid rgb(251 146 60)' }}>
                      <AlertCircle className="h-5 w-5 text-orange-600" />
                      <span className="text-sm font-semibold text-orange-900">
                        Development Mode Active - For testing only
                      </span>
                    </div>
                  )}
                </div>
              )}

              {connection.status === 'ERROR' && (
                <div className="flex items-center gap-3 p-5 bg-red-50 rounded-xl" style={{ border: '1px solid rgb(252 165 165)' }}>
                  <XCircle className="h-6 w-6 text-red-600" />
                  <div>
                    <div className="font-bold text-red-900 text-lg">Connection Failed</div>
                    <div className="text-sm text-red-700 mt-1">
                      Unable to connect to WhatsApp. Please try reconnecting.
                    </div>
                  </div>
                </div>
              )}

              {connection.status === 'DISCONNECTED' && (
                <div className="flex items-center gap-3 p-5 bg-gray-50 rounded-xl" style={{ border: '1px solid rgb(229 231 235)' }}>
                  <AlertCircle className="h-6 w-6 text-gray-600" />
                  <div>
                    <div className="font-bold text-gray-900 text-lg">Not Connected</div>
                    <div className="text-sm text-gray-600 mt-1">
                      Connect your WhatsApp Business account to start receiving leads
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {connection.status === 'CONNECTED' ? (
              <>
                <Button 
                  variant="outline" 
                  className="font-semibold h-12 px-6" 
                  style={{ border: '2px solid rgb(229 231 235)' }}
                  onClick={handleConnect}
                  disabled={isConnecting}
                >
                  {isConnecting ? (
                    <>
                      <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                      Refreshing...
                    </>
                  ) : (
                    <>
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Refresh
                    </>
                  )}
                </Button>
                <Button 
                  variant="outline" 
                  className="text-red-600 hover:bg-red-50 font-semibold h-12 px-6" 
                  style={{ border: '2px solid rgb(252 165 165)' }}
                >
                  <XCircle className="h-4 w-4 mr-2" />
                  Disconnect
                </Button>
              </>
            ) : (
              <Button 
                className="bg-[#467235] hover:bg-[#365A29] text-white shadow-lg shadow-[#467235]/25 font-semibold h-12 px-8"
                onClick={handleConnect}
                disabled={isConnecting}
              >
                {isConnecting ? (
                  <>
                    <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                    Connecting...
                  </>
                ) : (
                  <>
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Connect WhatsApp
                  </>
                )}
              </Button>
            )}
          </div>
        </div>
      </Card>

      {/* Stats Grid */}
      <div className="grid gap-6 sm:grid-cols-3">
        {[
          {
            label: 'Messages Processed',
            value: connection.messagesProcessed.toLocaleString(),
            icon: MessageSquare,
            color: 'text-blue-600',
            bgColor: 'bg-blue-50'
          },
          {
            label: 'Webhook Status',
            value: connection.webhookStatus,
            icon: Zap,
            color: connection.webhookStatus === 'ACTIVE' ? 'text-green-600' : 'text-red-600',
            bgColor: connection.webhookStatus === 'ACTIVE' ? 'bg-green-50' : 'bg-red-50'
          },
          {
            label: 'Connection Health',
            value: connection.status === 'CONNECTED' ? 'Excellent' : 'Poor',
            icon: Activity,
            color: connection.status === 'CONNECTED' ? 'text-green-600' : 'text-red-600',
            bgColor: connection.status === 'CONNECTED' ? 'bg-green-50' : 'bg-red-50'
          },
        ].map((stat, i) => (
          <Card key={i} className="p-7 bg-white" style={{ border: '1px solid rgb(243 244 246)' }}>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500 mb-2 font-semibold">{stat.label}</div>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
              </div>
              <div className={`h-14 w-14 rounded-2xl ${stat.bgColor} flex items-center justify-center`}>
                <stat.icon className={`h-7 w-7 ${stat.color}`} />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Setup Instructions */}
      <Card className="p-10 bg-white" style={{ border: '1px solid rgb(243 244 246)' }}>
        <div className="flex items-start gap-5 mb-8">
          <div className="h-12 w-12 rounded-2xl bg-[#467235] flex items-center justify-center shadow-lg shadow-[#467235]/30">
            <Settings className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Setup Guide</h2>
            <p className="text-gray-600 text-base">
              Follow these steps to connect your WhatsApp Business account
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {[
            {
              step: 1,
              title: 'Create WhatsApp Business Account',
              description: 'Sign up for WhatsApp Business API through Meta Business Manager'
            },
            {
              step: 2,
              title: 'Get API Credentials',
              description: 'Obtain your API key, phone number ID, and business account ID'
            },
            {
              step: 3,
              title: 'Configure Webhook',
              description: 'Set up webhook URL to receive incoming messages in real-time'
            },
            {
              step: 4,
              title: 'Test Connection',
              description: 'Send a test message to verify everything is working correctly'
            },
          ].map((item) => (
            <div key={item.step} className="flex gap-5">
              <div className="h-10 w-10 rounded-xl bg-[#467235] flex items-center justify-center text-white font-bold flex-shrink-0 shadow-lg shadow-[#467235]/25">
                {item.step}
              </div>
              <div className="flex-1 pb-6" style={{ borderBottom: item.step < 4 ? '1px solid rgb(243 244 246)' : 'none' }}>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 font-medium">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8" style={{ borderTop: '1px solid rgb(243 244 246)' }}>
          <Button className="bg-[#467235] hover:bg-[#365A29] text-white h-12 px-8 font-semibold shadow-lg shadow-[#467235]/25">
            View Full Documentation
          </Button>
        </div>
      </Card>
    </div>
  );
}
