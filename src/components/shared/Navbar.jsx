import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getUserSession } from "@/lib/core/session";
import { Home, Package, List, LayoutDashboard, User, Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import SignOut from "./SignOut";
import ScrollHeader from "./ScrollHeader";
import WishListIcon from "./WishListIcon";
import { LayoutGroupContext } from "framer-motion";

export default async function Navbar() {
  const user = await getUserSession();

  // Reusable Logo Component with 3xl sizing and gradient styling
  const LogoText = () => (
    <Link href="/" className="text-3xl font-black tracking-tight bg-gradient-to-r from-primary via-indigo-500 to-primary bg-[length:200%_auto] hover:bg-right transition-all duration-500 bg-clip-text text-transparent">
      Resell<span className="text-foreground">.</span>Hub
    </Link>
  );

  return (
    <ScrollHeader className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        
        {/* Left Section: Mobile Trigger & Logo */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden hover:bg-accent rounded-xl transition-all">
                <Menu className="h-6 w-6 text-foreground" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[320px] p-6 flex flex-col gap-8 border-r border-border/50 bg-background/95 backdrop-blur-lg">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              
              <div className="flex flex-col gap-8 mt-4">
                <SheetClose asChild>
                  <div className="w-fit scale-95 origin-left">
                    <LayoutGroupContext />
                  </div>
                </SheetClose>
                
                <nav className="flex flex-col gap-3">
                  <SheetClose asChild>
                    <Link href="/" className="flex items-center gap-4 px-4 py-3 text-lg font-medium text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-xl transition-all group">
                      <Home className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span>Home</span>
                    </Link>
                  </SheetClose>

                  <SheetClose asChild>
                    <Link href="/products" className="flex items-center gap-4 px-4 py-3 text-lg font-medium text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-xl transition-all group">
                      <Package className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span>Products</span>
                    </Link>
                  </SheetClose>

                  <SheetClose asChild>
                    <Link href="/categories" className="flex items-center gap-4 px-4 py-3 text-lg font-medium text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-xl transition-all group">
                      <List className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span>Categories</span>
                    </Link>
                  </SheetClose>

                  {user && (
                    <SheetClose asChild>
                      <Link href={`/dashboard/${user?.role}`} className="flex items-center gap-4 px-4 py-3 text-lg font-medium text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-xl transition-all group">
                        <LayoutDashboard className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        <span>Dashboard</span>
                      </Link>
                    </SheetClose>
                  )}
                </nav>
              </div>
            </SheetContent>
          </Sheet>

          {/* Rendered 3xl Logo */}
          <LogoText />
        </div>

        {/* Navigation (Desktop Style Overhaul) */}
        <nav className="hidden md:flex items-center gap-1 bg-secondary/40 p-1.5 rounded-full border border-border/20">
          <Link href="/" className="flex items-center gap-2 px-5 py-2 text-sm font-semibold text-muted-foreground hover:text-primary rounded-full hover:bg-background transition-all duration-200 shadow-sm hover:shadow-none">
            <Home className="h-4 w-4" />
            <span>Home</span>
          </Link>

          <Link href="/products" className="flex items-center gap-2 px-5 py-2 text-sm font-semibold text-muted-foreground hover:text-primary rounded-full hover:bg-background transition-all duration-200 shadow-sm hover:shadow-none">
            <Package className="h-4 w-4" />
            <span>Products</span>
          </Link>

          <Link href="/categories" className="flex items-center gap-2 px-5 py-2 text-sm font-semibold text-muted-foreground hover:text-primary rounded-full hover:bg-background transition-all duration-200 shadow-sm hover:shadow-none">
            <List className="h-4 w-4" />
            <span>Categories</span>
          </Link>

          {user && (
            <Link href={`/dashboard/${user?.role}`} className="flex items-center gap-2 px-5 py-2 text-sm font-semibold text-muted-foreground hover:text-primary rounded-full hover:bg-background transition-all duration-200 shadow-sm hover:shadow-none">
              <LayoutDashboard className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>
          )}
        </nav>

        {/* Actions/User Section */}
        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-4">
              <div className="hover:scale-105 transition-transform duration-200">
                <WishListIcon />
              </div>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full ring-2 ring-border hover:ring-primary/50 transition-all p-0 overflow-hidden">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={user?.image} alt={user?.name || "User"} />
                      <AvatarFallback className="bg-gradient-to-br from-primary/20 to-secondary"><User className="h-5 w-5 text-primary" /></AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-60 mt-2 p-1.5 rounded-xl border border-border/60 shadow-lg" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal px-2.5 py-2">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-semibold text-foreground leading-none">{user.name || "User"}</p>
                      <p className="text-xs leading-none text-muted-foreground truncate">
                        {user.email || ""}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="my-1" />
                  
                  <DropdownMenuItem asChild className="rounded-lg py-2 cursor-pointer">
                    <Link href={`/dashboard/${user.role}/profile`} className="flex items-center w-full">
                      <User className="mr-2.5 h-4 w-4 text-muted-foreground" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  
                  <DropdownMenuItem asChild className="rounded-lg py-2 cursor-pointer">
                    <Link href={`/dashboard/${user?.role}`} className="flex items-center w-full">
                      <LayoutDashboard className="mr-2.5 h-4 w-4 text-muted-foreground" />
                      <span>Dashboard</span>
                    </Link>
                  </DropdownMenuItem>
                  
                  <DropdownMenuSeparator className="my-1" />
                  <div className="p-1">
                    <SignOut />
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <Link href="/signIn">
              <Button className="rounded-full px-6 shadow-md shadow-primary/10 hover:shadow-none hover:scale-[0.98] transition-all">
                Login
              </Button>
            </Link>
          )}
        </div>
      </div>
    </ScrollHeader>
  );
}