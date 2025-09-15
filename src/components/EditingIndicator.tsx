import { Edit } from "lucide-react";
import { useEditMode } from "@/hooks/useEditMode";

const EditingIndicator = () => {
  const { editMode, canEdit } = useEditMode();
  
  if (!canEdit || !editMode) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-primary/20 text-sm text-primary animate-pulse">
      <div className="flex items-center gap-2">
        <Edit className="w-4 h-4" />
        <span>Edit Mode Active - Hover over sections to edit</span>
      </div>
    </div>
  );
};

export default EditingIndicator;