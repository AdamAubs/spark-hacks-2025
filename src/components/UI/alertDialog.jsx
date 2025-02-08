import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import Button from "./button";

export default function AlertDialog({open, setOpen, title, description, confirmLabel, onConfirm}) {
  return (
    <AlertDialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <AlertDialogPrimitive.Portal>
        {/* Dark background overlay */}
        <AlertDialogPrimitive.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

        {/* Popup Content (Increased Size) */}
        <AlertDialogPrimitive.Content
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          bg-white p-8 rounded-lg shadow-lg w-3/4 md:w-1/2 lg:w-1/2 max-w-screen-md h-4/5 md:h-2/3 lg:h-1/2 flex flex-col"
        >
          <AlertDialogPrimitive.Title className="text-2xl font-bold">{title}</AlertDialogPrimitive.Title>
          <AlertDialogPrimitive.Description className="mt-4 text-gray-600 flex-grow">
            {description}
          </AlertDialogPrimitive.Description>

          <div className="mt-6 flex justify-end space-x-4">
            <AlertDialogPrimitive.Cancel asChild>
              <Button variant="outline">Cancel</Button>
            </AlertDialogPrimitive.Cancel>
            <AlertDialogPrimitive.Action asChild>
              <Button variant="solid" onClick={onConfirm}>
                {confirmLabel}
              </Button>
            </AlertDialogPrimitive.Action>
          </div>
        </AlertDialogPrimitive.Content>
      </AlertDialogPrimitive.Portal>
    </AlertDialogPrimitive.Root>
  );
}
