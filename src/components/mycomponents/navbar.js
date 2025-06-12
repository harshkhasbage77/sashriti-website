"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronRight, User2, BarChart3, Info, Clock, TrendingUp, Mail } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const mainNavItems = [
  { 
    href: '#quickstats', 
    label: 'Quick Stats',
    description: 'Key metrics and achievements',
    icon: BarChart3,
    featured: true
  },
  { 
    href: '#about', 
    label: 'About',
    description: 'Our mission and vision',
    icon: Info
  },
  { 
    href: '#whynow', 
    label: 'Why Now',
    description: 'Timing and market opportunity',
    icon: Clock
  },
  { 
    href: '#impact', 
    label: 'Impact',
    description: 'Environmental and social impact',
    icon: TrendingUp
  },
];

const resourceItems = [
  { 
    href: '#solution', 
    label: 'Solution',
    description: 'Our cryogenic PCB recycling technology'
  },
  { 
    href: '#technology', 
    label: 'Technology',
    description: 'Innovative approach to e-waste management'
  },
  { 
    href: '#impact', 
    label: 'Impact',
    description: 'Environmental and economic benefits'
  },
];

const ListItem = ({ className, title, href, children, description, icon: Icon, featured, ...props }) => {
  return (
    <div className="list-none">
      <NavigationMenuLink asChild>
        <a
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-white text-gray-400 font-semibold",
            featured && "bg-white/5 border border-white/10 h-full",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2">
            {Icon && <Icon className="w-4 h-4" />}
            <div className="text-sm font-semibold leading-none text-white">{title}</div>
          </div>
          {description && (
            <p className="line-clamp-2 font-medium text-sm leading-snug text-gray-400 mt-1 tracking-wide">
              {description}
            </p>
          )}
          {children}
        </a>
      </NavigationMenuLink>
    </div>
  );
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/30 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/brahmi.png"
                alt="Sashriti Logo"
                width={40}
                height={40}
                className="h-10 w-auto rounded"
                priority
              />
              <span className="ml-2 text-white font-bold text-xl">Sashriti</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-gray-400 hover:text-white hover:bg-white/10 font-semibold">
                    Home
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 w-[600px] gap-3 p-2 bg-black/30 backdrop-blur-md">
                      <div className="col-span-1 grid">
                        <ListItem
                          href={mainNavItems[0].href}
                          title={mainNavItems[0].label}
                          description={mainNavItems[0].description}
                          icon={mainNavItems[0].icon}
                          featured={mainNavItems[0].featured}
                        />
                        
                      </div>
                      <div className="col-span-1 grid gap-3 ">
                        {mainNavItems.slice(1).map((item) => (
                          <ListItem
                            key={item.href}
                            href={item.href}
                            title={item.label}
                            description={item.description}
                            icon={item.icon}
                          />
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-gray-400 hover:text-white hover:bg-white/10 font-semibold">
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-3 p-2 bg-black/30 backdrop-blur-md">
                      {resourceItems.map((item) => (
                        <ListItem
                          key={item.href}
                          href={item.href}
                          title={item.label}
                          description={item.description}
                        />
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#team"
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent text-gray-400 hover:text-white hover:bg-white/10 font-semibold"
                    )}
                  >
                    Team
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#investors"
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent text-gray-400 hover:text-white hover:bg-white/10 font-semibold"
                    )}
                  >
                    Investors
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Button
                    asChild
                    className="bg-white text-black hover:bg-gray-100 transition-colors rounded-full font-semibold px-6"
                  >
                    <Link href="#contact" className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-yellow-500" />
                      Contact Us
                    </Link>
                  </Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-gray-400 hover:text-white hover:bg-white/10 font-semibold">
                    Menu
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-3 p-2 bg-black/30 backdrop-blur-md fixed right-4 top-16 max-h-[calc(100vh-4rem)] overflow-y-auto">
                      <li className="font-bold text-white mb-2">Home</li>
                      {mainNavItems.map((item) => (
                        <ListItem
                          key={item.href}
                          href={item.href}
                          title={item.label}
                          description={item.description}
                          icon={item.icon}
                          featured={item.featured}
                        />
                      ))}
                      <li className="font-bold text-white mb-2 mt-4">Resources</li>
                      {resourceItems.map((item) => (
                        <ListItem
                          key={item.href}
                          href={item.href}
                          title={item.label}
                          description={item.description}
                        />
                      ))}
                      <ListItem href="#team" title="Team" />
                      <ListItem href="#investors" title="Investors" />
                      <li className="mt-4">
                        <Button
                          asChild
                          className="w-full bg-white text-black hover:bg-gray-100 transition-colors rounded-full font-semibold"
                        >
                          <Link href="#contact" className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-yellow-500" />
                            Contact Us
                          </Link>
                        </Button>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
    </nav>
  );
} 