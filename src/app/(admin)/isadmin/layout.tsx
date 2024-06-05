
import { TooltipProvider } from '@/components/ui/tooltip'
import { ReactNode } from "react"
import AdminNavbar from "@/components/shared/admin-navbar"
import AdminSidebar from "@/components/shared/admin-sidebar"

const IsAdminLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='w-full'>
            <TooltipProvider>
                <main className="w-full">
                    <div className="flex min-h-screen w-full flex-col bg-muted/40">
                        <AdminSidebar />
                        <div className="flex flex-col sm:gap-4 sm:pt-4 sm:pl-14">
                            <AdminNavbar />
                            {children}
                        </div>
                    </div>
                </main>
            </TooltipProvider>
        </div>
    )
}

export default IsAdminLayout