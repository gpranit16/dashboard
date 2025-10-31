import { UserButton, SignedIn, SignedOut } from "@clerk/clerk-react";
        import { Button } from "@/components/ui/button";
        import { Footprints } from "lucide-react";
        import { Link } from "react-router-dom";
        
        export function Header() {
          return (
            <header className="w-full p-4 flex justify-between items-center border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <Link to="/" className="flex items-center gap-2">
                <Footprints className="h-6 w-6 text-emerald-400" />
                <h1 className="text-xl font-bold text-foreground">SmartFoot</h1>
              </Link>
              <div>
                <SignedIn>
                  <UserButton afterSignOutUrl="/" />
                </SignedIn>
                <SignedOut>
                  <div className="flex items-center gap-2">
                    <Link to="/dashboard">
                      <Button variant="outline">Sign In</Button>
                    </Link>
                    <Link to="/dashboard">
                      <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">Sign Up</Button>
                    </Link>
                  </div>
                </SignedOut>
              </div>
            </header>
          );
        }
