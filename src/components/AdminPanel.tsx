import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  LogOut, 
  UserCog, 
  Edit, 
  Eye, 
  Settings, 
  ChevronDown,
  ChevronUp,
  Home,
  Users,
  Target,
  Info
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

interface AdminPanelProps {
  editMode: boolean;
  setEditMode: (editMode: boolean) => void;
}

const AdminPanel = ({ editMode, setEditMode }: AdminPanelProps) => {
  const { user, userRole, signOut } = useAuth();
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const handleSignIn = () => {
    navigate('/auth');
  };

  if (!user) {
    return (
      <div className="fixed top-4 right-4 z-50">
        <Button
          onClick={handleSignIn}
          variant="outline"
          size="sm"
          className="bg-background/95 backdrop-blur-sm border-primary/20 hover:bg-primary/10 shadow-lg"
        >
          <UserCog className="w-4 h-4 mr-2" />
          Admin Access
        </Button>
      </div>
    );
  }

  if (userRole !== 'admin' && userRole !== 'editor') {
    return (
      <div className="fixed top-4 right-4 z-50">
        <Button
          onClick={handleSignOut}
          variant="outline"
          size="sm"
          className="bg-background/95 backdrop-blur-sm shadow-lg"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <Card className="bg-background/95 backdrop-blur-sm border-primary/20 shadow-xl">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <UserCog className="w-5 h-5 text-primary" />
              <CardTitle className="text-sm">Admin Panel</CardTitle>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="h-6 w-6 p-0"
            >
              {isExpanded ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant={userRole === 'admin' ? 'default' : 'secondary'} className="text-xs">
              {userRole}
            </Badge>
            <Badge 
              variant={editMode ? 'destructive' : 'outline'} 
              className="text-xs"
            >
              {editMode ? 'Edit Mode' : 'View Mode'}
            </Badge>
          </div>
        </CardHeader>

        {isExpanded && (
          <CardContent className="pt-0 space-y-3">
            <Separator />
            
            {/* Edit Mode Toggle */}
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Content Editing</h4>
              <div className="flex gap-2">
                <Button
                  variant={editMode ? "default" : "outline"}
                  size="sm"
                  onClick={() => setEditMode(true)}
                  className="flex-1 text-xs"
                >
                  <Edit className="w-3 h-3 mr-1" />
                  Edit
                </Button>
                <Button
                  variant={!editMode ? "default" : "outline"}
                  size="sm"
                  onClick={() => setEditMode(false)}
                  className="flex-1 text-xs"
                >
                  <Eye className="w-3 h-3 mr-1" />
                  View
                </Button>
              </div>
            </div>

            <Separator />

            {/* Quick Navigation */}
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Quick Access</h4>
              <div className="grid grid-cols-2 gap-1">
                <Button variant="ghost" size="sm" className="justify-start text-xs h-8">
                  <Home className="w-3 h-3 mr-1" />
                  Hero
                </Button>
                <Button variant="ghost" size="sm" className="justify-start text-xs h-8">
                  <Target className="w-3 h-3 mr-1" />
                  Change
                </Button>
                <Button variant="ghost" size="sm" className="justify-start text-xs h-8">
                  <Info className="w-3 h-3 mr-1" />
                  Impact
                </Button>
                <Button variant="ghost" size="sm" className="justify-start text-xs h-8">
                  <Users className="w-3 h-3 mr-1" />
                  Team
                </Button>
              </div>
            </div>

            <Separator />

            {/* Account Actions */}
            <div className="space-y-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start text-xs"
                disabled
              >
                <Settings className="w-3 h-3 mr-2" />
                Settings
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleSignOut}
                className="w-full justify-start text-xs hover:bg-destructive/10 hover:text-destructive"
              >
                <LogOut className="w-3 h-3 mr-2" />
                Sign Out
              </Button>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default AdminPanel;