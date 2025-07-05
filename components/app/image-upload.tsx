"use client";

import type React from "react";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ImageUploadProps {
  currentImage: string | null;
  onImageChange: (image: string | null) => void;
}

/**
 * Image upload component with drag & drop functionality
 * Features:
 * - Click to upload or drag & drop
 * - Image preview with remove option
 * - Smooth animations
 * - File type validation
 * - Responsive design
 * - Only dotted border for upload area (as requested)
 */
export function ImageUpload({ currentImage, onImageChange }: ImageUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onImageChange(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.currentTarget.classList.add("border-primary", "bg-primary/5");
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.currentTarget.classList.remove("border-primary", "bg-primary/5");
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.currentTarget.classList.remove("border-primary", "bg-primary/5");

    const files = e.dataTransfer.files;
    if (files.length > 0 && files[0].type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onImageChange(e.target?.result as string);
      };
      reader.readAsDataURL(files[0]);
    }
  };

  if (currentImage) {
    return (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-center">Your Photo</h3>
        <Card className="relative max-w-md mx-auto overflow-hidden group shadow-floating no-border">
          <img
            src={currentImage || "/placeholder.svg"}
            alt="Preview"
            className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          <Button
            variant="destructive"
            size="sm"
            className="absolute top-3 right-3 rounded-full w-8 h-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-floating"
            onClick={() => onImageChange(null)}
          >
            ×
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-center">Upload Your Photo</h3>
      <label
        className="block border-2 border-dashed border-border hover:border-primary cursor-pointer transition-all duration-300 hover:bg-primary/5 hover:shadow-lg rounded-xl"
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        htmlFor="file-input"
      >
        <div className="p-12 text-center space-y-4">
          <div className="text-6xl animate-bounce">📸</div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Drop your photo here</h4>
            <p className="text-muted-foreground">or click to browse files</p>
          </div>
          <div className="text-sm text-muted-foreground">
            Supports JPG, PNG, GIF up to 10MB
          </div>
        </div>
        <input
          id="file-input"
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
      </label>
    </div>
  );
}
