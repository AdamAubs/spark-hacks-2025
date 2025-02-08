import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import {X} from "lucide-react"; // Import close icon
import Button from "./button";

export default function AlertDialog({open, setOpen, title, description, confirmLabel, onConfirm}) {
  return (
    <AlertDialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <AlertDialogPrimitive.Portal>
        {/* Dark Background Overlay */}
        <AlertDialogPrimitive.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

        {/* Popup Content - Spaced from Navbar & Bottom */}
        <AlertDialogPrimitive.Content
          className="fixed top-20 bottom-8 left-1/2 transform -translate-x-1/2 
          bg-white shadow-lg flex flex-col w-11/12 max-w-screen-lg rounded-lg overflow-hidden"
        >
          {/* Header with Close Button */}
          <div className="flex justify-between items-center px-6 py-4 border-b">
            <h2 className="text-2xl font-bold">{title}</h2>
            <button onClick={() => setOpen(false)} className="p-2 rounded-md hover:bg-gray-200">
              <X size={24} />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-auto p-6">{description}</div>

          {/* Footer with Action Buttons */}
          <div className="flex justify-end px-6 py-4 border-t">
            <Button variant="solid" onClick={onConfirm} className="ml-4">
              {confirmLabel}
            </Button>
          </div>
        </AlertDialogPrimitive.Content>
      </AlertDialogPrimitive.Portal>
    </AlertDialogPrimitive.Root>
  );
}
