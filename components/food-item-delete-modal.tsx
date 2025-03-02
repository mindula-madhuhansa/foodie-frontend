"use client";

import { toast } from "sonner";
import { useState } from "react";
import { Trash2Icon } from "lucide-react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { deleteFoodItem } from "@/actions";

export default function FoodItemDeleteModal({
  foodItem,
}: {
  foodItem: FoodItem;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = async () => {
    try {
      await deleteFoodItem(foodItem.id);
      setIsModalOpen(false);
      toast.success("Food item deleted successfully");
    } catch (error) {
      console.error("Failed to delete food item:", error);
      toast.error("Failed to delete food item");
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTrigger asChild>
        <Button variant="destructive" className="text-sm" onClick={() => {}}>
          <Trash2Icon />
          <span>Delete</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete{" "}
            <strong>{foodItem.name.toUpperCase()}</strong>.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>

          <Button variant="destructive" onClick={handleDelete}>
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
