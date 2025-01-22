'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/src/components/ui/button';
import { Card, CardContent } from '@/src/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/src/components/ui/accordion';
import { Alert, AlertDescription, AlertTitle } from '@/src/components/ui/alert';
import { Avatar, AvatarFallback, } from '@/src/components/ui/avatar';
import { Badge } from '@/src/components/ui/badge';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/src/components/ui/hover-card';
import { ScrollArea } from '@/src/components/ui/scroll-area';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/src/components/ui/sheet';
import { Skeleton } from '@/src/components/ui/skeleton';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/src/components/ui/table';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/src/components/ui/tooltip';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/src/components/ui/dropdown-menu';



const Text2 = "image"
const Idx = 10;

export default function HybridPage() {
  return (
    <main className="min-h-screen">
      <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-lg z-50">
        <div className="container mx-auto px-4 py-4 flex justify-start items-center">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:text-gray-200">
              Home
            </Button>
          </Link>
          <Link href="/shad">
            <Button variant="ghost" className="text-white hover:text-gray-200">
              Shadcn
            </Button>
          </Link>
          <Link href="/hybrid">
            <Button variant="ghost" className="text-white hover:text-gray-200">
              Hybrid
            </Button>
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 pt-24 pb-12">




        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="p-6 space-y-4">

              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Accordion</AccordionTrigger>
                  <AccordionContent>Content here</AccordionContent>
                </AccordionItem>
              </Accordion>
              <Alert>
                <AlertTitle>Alert Title</AlertTitle>
                <AlertDescription>Alert description</AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex space-x-4">
                <Avatar>
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Badge>Badge</Badge>
              </div>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link">Hover me</Button>
                </HoverCardTrigger>
                <HoverCardContent>Hover content</HoverCardContent>
              </HoverCard>
              <ScrollArea className="h-20">
                <div className="p-4">Scrollable content</div>
              </ScrollArea>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button>Open Sheet</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Sheet Title</SheetTitle>
                    <SheetDescription>Sheet Description</SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
              <div className="space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Head</TableHead>
                    <TableHead>Head</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Cell</TableCell>
                    <TableCell>Cell</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button>Hover for tooltip</Button>
                  </TooltipTrigger>
                  <TooltipContent>Tooltip content</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button>Dropdown</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Item</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col gap-10">
          {Array.from({ length: Idx }, (_, index) => (
            <div
              key={index}
              className="grid grid-cols-2 gap-4"
            >
              <Image
                width={800}
                height={600}
                src={`/test/${Text2}${index + 1}.jpg`}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}