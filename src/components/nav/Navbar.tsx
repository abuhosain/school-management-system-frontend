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
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const navigationItems = [
  { label: "NOTICES", href: "/notices" },
   { label: "PAYMENT", href: "/payment" },
  { label: "RESULTS", href: "/result" },
  { label: "ABOUT US", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

const academicItems = [
  {
    label: "Teacher Information",
    href: "/academic/teachers",
    description: "Faculty profiles and contact details",
  },
  {
    label: "Student Information",
    href: "/academic/students",
    description: "Student portal and academic records",
  },
];

const departments = [
  { label: "Science Department", tagline: "Explore, Discover, Innovate" },
  { label: "Humanities Department", tagline: "Understand, Reflect, Connect" },
  { label: "Arts Department", tagline: "Create, Imagine, Perform" },
  { label: "Commerce Department", tagline: "Learn, Lead, Succeed" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleMobileNavClick = () => {
    setOpen(false);
  };

  return (
    <header className="w-full bg-slate-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-white hover:bg-slate-700 focus:bg-slate-700"
                aria-label="Open navigation menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-80 bg-slate-800 text-white border-slate-700 p-0"
            >
              <SheetTitle className="sr-only">
                Mobile Navigation Menu
              </SheetTitle>

              {/* Mobile Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-700">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-blue-400" />
                  <span className="font-bold text-lg">
                    Kutubpur High School
                  </span>
                </div>
              </div>

              {/* Mobile Navigation */}
              <div className="p-6 space-y-2">
                {navigationItems.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="block px-3 py-2 text-sm font-medium text-white hover:bg-slate-700 rounded-md transition-colors"
                    onClick={handleMobileNavClick}
                  >
                    {label}
                  </Link>
                ))}

                {/* Mobile Academic Dropdown */}
                <Collapsible className="space-y-2">
                  <CollapsibleTrigger className="flex w-full items-center justify-between px-3 py-2 text-sm font-medium text-white hover:bg-slate-700 rounded-md transition-colors [&[data-state=open]>svg]:rotate-180">
                    ACADEMIC
                    <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-1">
                    {academicItems.map(({ label, href }) => (
                      <Link
                        key={href}
                        href={href}
                        className="block px-6 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                        onClick={handleMobileNavClick}
                      >
                        {label}
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>

                {/* Mobile Departments Dropdown */}
                <Collapsible className="space-y-2">
                  <CollapsibleTrigger className="flex w-full items-center justify-between px-3 py-2 text-sm font-medium text-white hover:bg-slate-700 rounded-md transition-colors [&[data-state=open]>svg]:rotate-180">
                    DEPARTMENTS
                    <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-1">
                    {departments.map(({ label }, idx) => (
                      <Link
                        key={idx}
                        href="/department"
                        className="block px-6 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                        onClick={handleMobileNavClick}
                      >
                        {label}
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>

                <Separator className="my-4 bg-slate-600" />

                {/* Mobile Login Button */}
                <Button
                  variant="outline"
                  className="w-full border-slate-600 text-white hover:bg-slate-700 bg-transparent transition-colors"
                  onClick={handleMobileNavClick}
                >
                  <User className="h-4 w-4 mr-2" />
                  LOGIN
                </Button>
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <GraduationCap className="h-8 w-8 text-blue-400" />
            <span className="font-bold text-xl hidden sm:block">
              Kutubpur High School
            </span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href={"/"}
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black focus:bg-white focus:text-balck focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    {"HOME"}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Academic Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black focus:bg-white focus:text-black focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white data-[state=open]:bg-white">
                  ACADEMIC
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 bg-white shadow-lg rounded-md">
                    {academicItems.map(({ label, href, description }) => (
                      <NavigationMenuLink key={href} asChild>
                        <Link
                          href={href}
                          className="group grid h-auto w-full items-start justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-slate-50 focus:bg-slate-50 focus:outline-none"
                        >
                          <div className="text-sm font-medium text-slate-900 group-hover:text-slate-800">
                            {label}
                          </div>
                          <p className="text-sm text-slate-600 leading-snug">
                            {description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Departments Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black focus:bg-white focus:text-black focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white data-[state=open]:bg-white">
                  DEPARTMENTS
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[500px] grid-cols-2 gap-3 p-4 bg-white shadow-lg rounded-md">
                    {departments.map(({ label, tagline }, idx) => (
                      <NavigationMenuLink key={idx} asChild>
                        <Link
                          href="/department"
                          className="group grid h-auto w-full items-start justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-slate-50 focus:bg-slate-50 focus:outline-none"
                        >
                          <div className="text-sm font-medium text-slate-900 group-hover:text-slate-800">
                            {label}
                          </div>
                          <p className="text-sm text-slate-600 leading-snug">
                            {tagline}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {navigationItems.map(({ label, href }) => (
                <NavigationMenuItem key={href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={href}
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black focus:bg-white focus:text-balck focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    >
                      {label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop Login Button */}
          <Button
            variant="outline"
            size="sm"
            className="hidden lg:flex border-slate-600 text-white hover:bg-slate-700 bg-transparent transition-colors focus:bg-slate-700"
          >
            <User className="h-4 w-4 mr-2" />
            LOGIN
          </Button>

          {/* Mobile Login Button */}
          <Button
            variant="outline"
            size="sm"
            className="lg:hidden border-slate-600 text-white hover:bg-slate-700 bg-transparent transition-colors focus:bg-slate-700"
            aria-label="Login"
          >
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
