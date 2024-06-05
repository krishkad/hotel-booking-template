import AdminBookings from "@/components/shared/admin-bookings";
import AdminRoom from "@/components/shared/admin-room";
import Dashboard from "@/components/shared/dashboard";
import Integrations from "@/components/shared/integration";

export default function DashboardPage({ params }: { params: { type: 'dashboard' | 'bookings' | 'rooms' | 'integrations' | 'analytics' } }) {
  return (
    <main className="w-full space-y-5">
      {params.type === 'dashboard' ? <Dashboard /> : params.type === 'rooms' ? <AdminRoom /> : params.type === 'bookings' ? <AdminBookings /> : params.type === 'integrations' ? <Integrations /> : params.type === 'analytics' ? <h1>analytics</h1> : params.type === 'settings' ? <h1>settings</h1> : <h1>no found</h1>}
    </main>
  );
};
