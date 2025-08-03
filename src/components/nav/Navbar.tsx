"use client";

import { ChevronDown, Menu, GraduationCap, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-slate-800 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-white hover:bg-slate-700"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-80 bg-slate-800 text-white border-slate-700"
            >
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="h-6 w-6" />
                <span className="font-bold text-lg">EduPortal</span>
              </div>
              <div className="grid gap-2">
                <Link
                  href="/"
                  className="flex w-full items-center py-3 px-2 text-sm font-medium hover:bg-slate-700 rounded-md transition-colors"
                  onClick={() => setOpen(false)}
                >
                  HOME
                </Link>

                <Link
                  href="/about"
                  className="flex w-full items-center py-3 px-2 text-sm font-medium hover:bg-slate-700 rounded-md transition-colors"
                  onClick={() => setOpen(false)}
                >
                  ABOUT US
                </Link>

                <Collapsible className="grid gap-2">
                  <CollapsibleTrigger className="flex w-full items-center justify-between py-3 px-2 text-sm font-medium hover:bg-slate-700 rounded-md transition-colors [&[data-state=open]>svg]:rotate-180">
                    ACADEMIC{" "}
                    <ChevronDown className="h-4 w-4 transition-transform" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="ml-4 grid gap-1">
                      <Link
                        href="/academic/teachers"
                        className="block py-2 px-3 text-sm text-slate-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                      >
                        Teacher Information
                      </Link>
                      <Link
                        href="/academic/students"
                        className="block py-2 px-3 text-sm text-slate-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                      >
                        Student Information
                      </Link>
                      <Link
                        href="/academic/routine"
                        className="block py-2 px-3 text-sm text-slate-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                      >
                        Routine
                      </Link>
                      <Link
                        href="/academic/syllabus"
                        className="block py-2 px-3 text-sm text-slate-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                      >
                        Syllabus
                      </Link>
                      <Link
                        href="/academic/rules"
                        className="block py-2 px-3 text-sm text-slate-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                      >
                        Rules & Regulations
                      </Link>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible className="grid gap-2">
                  <CollapsibleTrigger className="flex w-full items-center justify-between py-3 px-2 text-sm font-medium hover:bg-slate-700 rounded-md transition-colors [&[data-state=open]>svg]:rotate-180">
                    DEPARTMENTS{" "}
                    <ChevronDown className="h-4 w-4 transition-transform" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="ml-4 grid gap-1">
                      <Link
                        href="/departments/cse"
                        className="block py-2 px-3 text-sm text-slate-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                      >
                        Computer Science
                      </Link>
                      <Link
                        href="/departments/eee"
                        className="block py-2 px-3 text-sm text-slate-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                      >
                        Electrical Engineering
                      </Link>
                      <Link
                        href="/departments/civil"
                        className="block py-2 px-3 text-sm text-slate-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                      >
                        Civil Engineering
                      </Link>
                      <Link
                        href="/departments/business"
                        className="block py-2 px-3 text-sm text-slate-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                      >
                        Business Administration
                      </Link>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                <Link
                  href="/notices"
                  className="flex w-full items-center py-3 px-2 text-sm font-medium hover:bg-slate-700 rounded-md transition-colors"
                  onClick={() => setOpen(false)}
                >
                  NOTICES
                </Link>

                <Collapsible className="grid gap-2">
                  <CollapsibleTrigger className="flex w-full items-center justify-between py-3 px-2 text-sm font-medium hover:bg-slate-700 rounded-md transition-colors [&[data-state=open]>svg]:rotate-180">
                    PAYMENT{" "}
                    <ChevronDown className="h-4 w-4 transition-transform" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="ml-4 grid gap-1">
                      <Link
                        href="/payment/tuition"
                        className="block py-2 px-3 text-sm text-slate-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                      >
                        Tuition Fees
                      </Link>
                      <Link
                        href="/payment/hostel"
                        className="block py-2 px-3 text-sm text-slate-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                      >
                        Hostel Fees
                      </Link>
                      <Link
                        href="/payment/library"
                        className="block py-2 px-3 text-sm text-slate-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                      >
                        Library Fees
                      </Link>
                      <Link
                        href="/payment/history"
                        className="block py-2 px-3 text-sm text-slate-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                      >
                        Payment History
                      </Link>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible className="grid gap-2">
                  <CollapsibleTrigger className="flex w-full items-center justify-between py-3 px-2 text-sm font-medium hover:bg-slate-700 rounded-md transition-colors [&[data-state=open]>svg]:rotate-180">
                    RESULTS{" "}
                    <ChevronDown className="h-4 w-4 transition-transform" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="ml-4 grid gap-1">
                      <Link
                        href="/results/semester"
                        className="block py-2 px-3 text-sm text-slate-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                      >
                        Semester Results
                      </Link>
                      <Link
                        href="/results/final"
                        className="block py-2 px-3 text-sm text-slate-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                      >
                        Final Results
                      </Link>
                      <Link
                        href="/results/transcript"
                        className="block py-2 px-3 text-sm text-slate-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                      >
                        Transcript
                      </Link>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                <Link
                  href="/contact"
                  className="flex w-full items-center py-3 px-2 text-sm font-medium hover:bg-slate-700 rounded-md transition-colors"
                  onClick={() => setOpen(false)}
                >
                  CONTACT
                </Link>

                <Separator className="my-4 bg-slate-600" />

                <Button
                  variant="outline"
                  className="w-full border-slate-600 text-white hover:bg-slate-700 bg-transparent"
                  onClick={() => setOpen(false)}
                >
                  <User className="h-4 w-4 mr-2" />
                  LOGIN
                </Button>
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8" />
            <span className="font-bold text-xl hidden sm:block">Kutubpur High School</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-700 focus:bg-slate-700 focus:outline-none"
                  >
                    HOME
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/about"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-700 focus:bg-slate-700 focus:outline-none"
                  >
                    ABOUT US
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-slate-700 focus:bg-slate-700 data-[active]:bg-slate-700 data-[state=open]:bg-slate-700">
                  ACADEMIC
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 bg-white">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/academic/teachers"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100"
                      >
                        <div className="text-sm font-medium leading-none text-slate-900">
                          Teacher Information
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-slate-600">
                          Faculty profiles and contact details
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/academic/students"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100"
                      >
                        <div className="text-sm font-medium leading-none text-slate-900">
                          Student Information
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-slate-600">
                          Student portal and academic records
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/academic/routine"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100"
                      >
                        <div className="text-sm font-medium leading-none text-slate-900">
                          Routine
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-slate-600">
                          Class schedules and timetables
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/academic/syllabus"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100"
                      >
                        <div className="text-sm font-medium leading-none text-slate-900">
                          Syllabus
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-slate-600">
                          Course curriculum and syllabus
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/academic/rules"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100"
                      >
                        <div className="text-sm font-medium leading-none text-slate-900">
                          Rules & Regulations
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-slate-600">
                          Academic policies and guidelines
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-slate-700 focus:bg-slate-700 data-[active]:bg-slate-700 data-[state=open]:bg-slate-700">
                  DEPARTMENTS
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[500px] grid-cols-2 gap-3 p-4 bg-white">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/departments/cse"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100"
                      >
                        <div className="text-sm font-medium leading-none text-slate-900">
                          Computer Science
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-slate-600">
                          CSE Department
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/departments/eee"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100"
                      >
                        <div className="text-sm font-medium leading-none text-slate-900">
                          Electrical Engineering
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-slate-600">
                          EEE Department
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/departments/civil"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100"
                      >
                        <div className="text-sm font-medium leading-none text-slate-900">
                          Civil Engineering
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-slate-600">
                          Civil Department
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/departments/business"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100"
                      >
                        <div className="text-sm font-medium leading-none text-slate-900">
                          Business Administration
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-slate-600">
                          BBA Department
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/notices"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-700 focus:bg-slate-700 focus:outline-none"
                  >
                    NOTICES
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-slate-700 focus:bg-slate-700 data-[active]:bg-slate-700 data-[state=open]:bg-slate-700">
                  PAYMENT
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 bg-white">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/payment/tuition"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100"
                      >
                        <div className="text-sm font-medium leading-none text-slate-900">
                          Tuition Fees
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-slate-600">
                          Pay semester fees online
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/payment/hostel"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100"
                      >
                        <div className="text-sm font-medium leading-none text-slate-900">
                          Hostel Fees
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-slate-600">
                          Accommodation fee payment
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/payment/library"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100"
                      >
                        <div className="text-sm font-medium leading-none text-slate-900">
                          Library Fees
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-slate-600">
                          Library and lab fees
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/payment/history"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100"
                      >
                        <div className="text-sm font-medium leading-none text-slate-900">
                          Payment History
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-slate-600">
                          View payment records
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-slate-700 focus:bg-slate-700 data-[active]:bg-slate-700 data-[state=open]:bg-slate-700">
                  RESULTS
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 bg-white">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/results/semester"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100"
                      >
                        <div className="text-sm font-medium leading-none text-slate-900">
                          Semester Results
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-slate-600">
                          View semester exam results
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/results/final"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100"
                      >
                        <div className="text-sm font-medium leading-none text-slate-900">
                          Final Results
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-slate-600">
                          Final examination results
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/results/transcript"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100"
                      >
                        <div className="text-sm font-medium leading-none text-slate-900">
                          Transcript
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-slate-600">
                          Download official transcript
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contact"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-700 focus:bg-slate-700 focus:outline-none"
                  >
                    CONTACT
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Login Button */}
          <Button
            variant="outline"
            size="sm"
            className="hidden lg:flex border-slate-600 text-white hover:bg-slate-700 hover:text-white bg-transparent"
          >
            <User className="h-4 w-4 mr-2" />
            LOGIN
          </Button>

          {/* Mobile Login */}
          <Button
            variant="outline"
            size="sm"
            className="lg:hidden border-slate-600 text-white hover:bg-slate-700 hover:text-white bg-transparent"
          >
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
