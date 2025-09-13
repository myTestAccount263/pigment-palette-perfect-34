import { Button } from '@/components/ui/button';
import { LogIn, LogOut, UserCog } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const AdminControls = () => {
  const { user, userRole, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const handleSignIn = () => {
    navigate('/auth');
  };

  if (!user) {
    return (
      <Button
        onClick={handleSignIn}
        variant="outline"
        size="sm"
        className="fixed top-4 right-4 z-50 bg-background/90 backdrop-blur-sm"
      >
        <LogIn className="w-4 h-4 mr-2" />
        Admin Login
      </Button>
    );
  }

  if (userRole === 'admin' || userRole === 'editor') {
    return (
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
        <div className="bg-background/90 backdrop-blur-sm px-3 py-2 rounded-md text-sm flex items-center gap-2">
          <UserCog className="w-4 h-4" />
          <span className="font-medium">{userRole}</span>
        </div>
        <Button
          onClick={handleSignOut}
          variant="outline"
          size="sm"
          className="bg-background/90 backdrop-blur-sm"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </Button>
      </div>
    );
  }

  return (
    <Button
      onClick={handleSignOut}
      variant="outline"
      size="sm"
      className="fixed top-4 right-4 z-50 bg-background/90 backdrop-blur-sm"
    >
      <LogOut className="w-4 h-4 mr-2" />
      Sign Out
    </Button>
  );
};

export default AdminControls;