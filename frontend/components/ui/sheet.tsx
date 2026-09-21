"use client"

import * as React from "react"
import { Dialog as SheetPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Sheet(props: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

function SheetTrigger(
  props: React.ComponentProps<typeof SheetPrimitive.Trigger>
) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose(props: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}

// Panel que entra desde la derecha. Radix (Dialog) se ocupa del foco, la tecla
// Esc, el click en el overlay y el bloqueo del scroll del fondo.
function SheetContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content>) {
  return (
    <SheetPrimitive.Portal>
      <SheetPrimitive.Overlay
        data-slot="sheet-overlay"
        className="fixed inset-0 z-50 bg-[#000115]/60 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 motion-reduce:animate-none"
      />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          "fixed inset-y-0 right-0 z-50 h-full w-[min(460px,92vw)] overflow-y-auto border-l border-[#1C1B29] bg-[#0C0C16] px-[26px] pt-7 pb-10 text-white shadow-[-24px_0_60px_rgba(0,0,0,0.45)] outline-none",
          "data-[state=open]:animate-in data-[state=open]:slide-in-from-right data-[state=open]:duration-300",
          "data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=closed]:duration-200",
          "motion-reduce:animate-none",
          className
        )}
        {...props}
      >
        {children}
      </SheetPrimitive.Content>
    </SheetPrimitive.Portal>
  )
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("font-extrabold", className)}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-[#9CA3AF]", className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetDescription,
}
