'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { 
  User,
  Building,
  Bell,
  Lock,
  CreditCard,
  Users,
  Settings as SettingsIcon,
  Save,
  Eye,
  EyeOff,
  Loader2,
  CheckCircle
} from 'lucide-react';
import { toast } from 'sonner';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [isSaving, setIsSaving] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Rajesh Kumar',
    email: 'rajesh@abccooling.com',
    phone: '+91 98765 43210',
    role: 'Owner',
  });

  const [companyData, setCompanyData] = useState({
    name: 'ABC Cooling Services',
    businessType: 'AC Services',
    location: 'Mumbai, Maharashtra',
    phone: '+91 98765 43210',
    website: 'https://abccooling.com',
  });

  const [notifications, setNotifications] = useState({
    emailNewLeads: true,
    emailHotLeads: true,
    emailFollowups: false,
    smsNewLeads: true,
    smsHotLeads: true,
    smsFollowups: false,
    pushNewLeads: true,
    pushHotLeads: true,
    pushFollowups: true,
  });

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      toast.success('Settings saved successfully');
    }, 1500);
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'company', label: 'Company', icon: Building },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Lock },
    { id: 'billing', label: 'Billing', icon: CreditCard },
    { id: 'team', label: 'Team', icon: Users },
  ];

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-2 text-base">
          Manage your account and application preferences
        </p>
      </div>

      {/* Settings Layout */}
      <div className="grid gap-6 lg:grid-cols-4">
        {/* Sidebar Tabs */}
        <Card className="p-6 bg-white h-fit" style={{ border: '1px solid rgb(243 244 246)' }}>
          <div className="space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all font-semibold ${
                  activeTab === tab.id
                    ? 'bg-[#467235] text-white shadow-lg shadow-[#467235]/25'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                {tab.label}
              </button>
            ))}
          </div>
        </Card>

        {/* Content Area */}
        <div className="lg:col-span-3 space-y-6">
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <Card className="p-8 bg-white" style={{ border: '1px solid rgb(243 244 246)' }}>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-14 w-14 rounded-2xl bg-[#467235] flex items-center justify-center shadow-lg shadow-[#467235]/30">
                  <User className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Profile Settings</h2>
                  <p className="text-gray-600 text-sm font-medium">Update your personal information</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-900 font-semibold mb-2">Full Name</Label>
                  <Input
                    id="name"
                    value={profileData.name}
                    onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                    className="h-12 bg-gray-50 rounded-xl font-medium mt-2"
                    style={{ border: '1px solid rgb(229 231 235)' }}
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-900 font-semibold mb-2">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                    className="h-12 bg-gray-50 rounded-xl font-medium mt-2"
                    style={{ border: '1px solid rgb(229 231 235)' }}
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-gray-900 font-semibold mb-2">Phone Number</Label>
                  <Input
                    id="phone"
                    value={profileData.phone}
                    onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                    className="h-12 bg-gray-50 rounded-xl font-medium mt-2"
                    style={{ border: '1px solid rgb(229 231 235)' }}
                  />
                </div>

                <div>
                  <Label htmlFor="role" className="text-gray-900 font-semibold mb-2">Role</Label>
                  <Input
                    id="role"
                    value={profileData.role}
                    disabled
                    className="h-12 bg-gray-100 rounded-xl font-medium mt-2 cursor-not-allowed"
                    style={{ border: '1px solid rgb(229 231 235)' }}
                  />
                  <p className="text-sm text-gray-500 mt-2 font-medium">
                    Contact your administrator to change your role
                  </p>
                </div>

                <div className="pt-4">
                  <Button 
                    onClick={handleSave}
                    disabled={isSaving}
                    className="bg-[#467235] hover:bg-[#365A29] text-white h-12 px-8 font-semibold shadow-lg shadow-[#467235]/25"
                  >
                    {isSaving ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save className="h-4 w-4 mr-2" />
                        Save Changes
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </Card>
          )}

          {/* Company Tab */}
          {activeTab === 'company' && (
            <Card className="p-8 bg-white" style={{ border: '1px solid rgb(243 244 246)' }}>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-14 w-14 rounded-2xl bg-blue-500 flex items-center justify-center shadow-lg">
                  <Building className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Company Settings</h2>
                  <p className="text-gray-600 text-sm font-medium">Manage your business information</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="company-name" className="text-gray-900 font-semibold mb-2">Company Name</Label>
                  <Input
                    id="company-name"
                    value={companyData.name}
                    onChange={(e) => setCompanyData({ ...companyData, name: e.target.value })}
                    className="h-12 bg-gray-50 rounded-xl font-medium mt-2"
                    style={{ border: '1px solid rgb(229 231 235)' }}
                  />
                </div>

                <div>
                  <Label htmlFor="business-type" className="text-gray-900 font-semibold mb-2">Business Type</Label>
                  <Input
                    id="business-type"
                    value={companyData.businessType}
                    onChange={(e) => setCompanyData({ ...companyData, businessType: e.target.value })}
                    className="h-12 bg-gray-50 rounded-xl font-medium mt-2"
                    style={{ border: '1px solid rgb(229 231 235)' }}
                  />
                </div>

                <div>
                  <Label htmlFor="location" className="text-gray-900 font-semibold mb-2">Location</Label>
                  <Input
                    id="location"
                    value={companyData.location}
                    onChange={(e) => setCompanyData({ ...companyData, location: e.target.value })}
                    className="h-12 bg-gray-50 rounded-xl font-medium mt-2"
                    style={{ border: '1px solid rgb(229 231 235)' }}
                  />
                </div>

                <div>
                  <Label htmlFor="company-phone" className="text-gray-900 font-semibold mb-2">Business Phone</Label>
                  <Input
                    id="company-phone"
                    value={companyData.phone}
                    onChange={(e) => setCompanyData({ ...companyData, phone: e.target.value })}
                    className="h-12 bg-gray-50 rounded-xl font-medium mt-2"
                    style={{ border: '1px solid rgb(229 231 235)' }}
                  />
                </div>

                <div>
                  <Label htmlFor="website" className="text-gray-900 font-semibold mb-2">Website</Label>
                  <Input
                    id="website"
                    type="url"
                    value={companyData.website}
                    onChange={(e) => setCompanyData({ ...companyData, website: e.target.value })}
                    className="h-12 bg-gray-50 rounded-xl font-medium mt-2"
                    style={{ border: '1px solid rgb(229 231 235)' }}
                  />
                </div>

                <div className="pt-4">
                  <Button 
                    onClick={handleSave}
                    disabled={isSaving}
                    className="bg-[#467235] hover:bg-[#365A29] text-white h-12 px-8 font-semibold shadow-lg shadow-[#467235]/25"
                  >
                    {isSaving ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save className="h-4 w-4 mr-2" />
                        Save Changes
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </Card>
          )}

          {/* Notifications Tab */}
          {activeTab === 'notifications' && (
            <Card className="p-8 bg-white" style={{ border: '1px solid rgb(243 244 246)' }}>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-14 w-14 rounded-2xl bg-orange-500 flex items-center justify-center shadow-lg">
                  <Bell className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Notification Preferences</h2>
                  <p className="text-gray-600 text-sm font-medium">Choose how you want to be notified</p>
                </div>
              </div>

              <div className="space-y-8">
                {/* Email Notifications */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Email Notifications</h3>
                  <div className="space-y-4">
                    {[
                      { id: 'emailNewLeads', label: 'New lead received', description: 'Get notified when a new lead is captured' },
                      { id: 'emailHotLeads', label: 'Hot lead detected', description: 'Alert when AI identifies a high-priority lead' },
                      { id: 'emailFollowups', label: 'Follow-up reminders', description: 'Reminders for scheduled follow-ups' },
                    ].map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                        <div>
                          <div className="font-bold text-gray-900">{item.label}</div>
                          <div className="text-sm text-gray-600 font-medium">{item.description}</div>
                        </div>
                        <Switch
                          checked={notifications[item.id as keyof typeof notifications]}
                          onCheckedChange={(checked) => setNotifications({ ...notifications, [item.id]: checked })}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* SMS Notifications */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">SMS Notifications</h3>
                  <div className="space-y-4">
                    {[
                      { id: 'smsNewLeads', label: 'New lead received', description: 'SMS alert for new leads' },
                      { id: 'smsHotLeads', label: 'Hot lead detected', description: 'Urgent SMS for hot leads' },
                      { id: 'smsFollowups', label: 'Follow-up reminders', description: 'SMS reminders for follow-ups' },
                    ].map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                        <div>
                          <div className="font-bold text-gray-900">{item.label}</div>
                          <div className="text-sm text-gray-600 font-medium">{item.description}</div>
                        </div>
                        <Switch
                          checked={notifications[item.id as keyof typeof notifications]}
                          onCheckedChange={(checked) => setNotifications({ ...notifications, [item.id]: checked })}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Button 
                    onClick={handleSave}
                    disabled={isSaving}
                    className="bg-[#467235] hover:bg-[#365A29] text-white h-12 px-8 font-semibold shadow-lg shadow-[#467235]/25"
                  >
                    {isSaving ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save className="h-4 w-4 mr-2" />
                        Save Preferences
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </Card>
          )}

          {/* Security, Billing, Team placeholder tabs */}
          {['security', 'billing', 'team'].includes(activeTab) && (
            <Card className="p-16 bg-white text-center" style={{ border: '1px solid rgb(243 244 246)' }}>
              <div className="h-20 w-20 rounded-2xl bg-gray-50 flex items-center justify-center mx-auto mb-6">
                <SettingsIcon className="h-10 w-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {tabs.find(t => t.id === activeTab)?.label} Settings
              </h3>
              <p className="text-gray-600 text-base mb-8">
                This section is coming soon. Configure advanced settings here.
              </p>
              <Button className="bg-[#467235] hover:bg-[#365A29] text-white h-12 px-8 font-semibold shadow-lg shadow-[#467235]/25">
                Contact Support
              </Button>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
