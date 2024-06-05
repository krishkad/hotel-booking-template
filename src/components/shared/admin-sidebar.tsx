"use client";
import React from 'react'
import Link from "next/link"
import {
    Cable,
    Home,
    LineChart,
    Package,
    Package2,
    Settings,
    ShoppingCart,
    Users2,
} from "lucide-react"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const AdminSidebar = () => {
    const usepathname = usePathname();
    const pathname = usepathname.split('/')[2];
    return (
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                <Link
                    href="#"
                    className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                >
                    <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
                    <span className="sr-only">Acme Inc</span>
                </Link>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="/isadmin/dashboard"
                            className={cn("flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-white hover:bg-primary md:h-8 md:w-8", pathname === 'dashboard' && "bg-primary text-white")}
                        >
                            <Home className="h-5 w-5" />
                            <span className="sr-only">Dashboard</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Dashboard</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="/isadmin/bookings"
                            className={cn("flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-white hover:bg-primary md:h-8 md:w-8", pathname === 'bookings' && "bg-primary text-white")}
                        >
                            <ShoppingCart className="h-5 w-5" />
                            <span className="sr-only">Bookings</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Bookings</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="/isadmin/rooms"
                            className={cn("flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-white hover:bg-primary md:h-8 md:w-8", pathname === 'rooms' && "bg-primary text-white")}
                        >
                            <Package className="h-5 w-5" />
                            <span className="sr-only">Rooms</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Rooms</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="/isadmin/integrations"
                            className={cn("flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-white hover:bg-primary md:h-8 md:w-8", pathname === 'customers' && "bg-primary text-white")}
                        >
                            <Cable className="h-5 w-5" />
                            <span className="sr-only">Integrations</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Integrations</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="/isadmin/analytics"
                            className={cn("flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-white hover:bg-primary md:h-8 md:w-8", pathname === 'analytics' && "bg-primary text-white")}
                        >
                            <LineChart className="h-5 w-5" />
                            <span className="sr-only">Analytics</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Analytics</TooltipContent>
                </Tooltip>
            </nav>
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="/isadmin/settings"
                            className={cn("flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-white hover:bg-primary md:h-8 md:w-8", pathname === 'settings' && "bg-primary text-white")}
                        >
                            <Settings className="h-5 w-5" />
                            <span className="sr-only">Settings</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Settings</TooltipContent>
                </Tooltip>
            </nav>
        </aside>
    )
}

export default AdminSidebar