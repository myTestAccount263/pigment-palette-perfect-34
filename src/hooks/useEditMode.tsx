import { createContext, useContext, useState, ReactNode } from 'react';
import { useAuth } from './useAuth';

interface EditModeContextType {
  editMode: boolean;
  setEditMode: (editMode: boolean) => void;
  canEdit: boolean;
}

const EditModeContext = createContext<EditModeContextType | undefined>(undefined);

export const useEditMode = () => {
  const context = useContext(EditModeContext);
  if (context === undefined) {
    throw new Error('useEditMode must be used within an EditModeProvider');
  }
  return context;
};

interface EditModeProviderProps {
  children: ReactNode;
}

export const EditModeProvider = ({ children }: EditModeProviderProps) => {
  const [editMode, setEditMode] = useState(false);
  const { userRole } = useAuth();

  const canEdit = userRole === 'admin' || userRole === 'editor';

  const value = {
    editMode: canEdit ? editMode : false,
    setEditMode: canEdit ? setEditMode : () => {},
    canEdit,
  };

  return (
    <EditModeContext.Provider value={value}>
      {children}
    </EditModeContext.Provider>
  );
};