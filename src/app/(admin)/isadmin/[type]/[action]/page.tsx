import CreateRoom from '@/components/shared/create-room'
import EditRoom from '@/components/shared/edit-room'
import React from 'react'


export default function AdminActionPage({ params: { action } }: { params: { action: 'edit-room' | 'add-room' } }) {
    return (
        <main className="w-full space-y-5">
            {action === 'edit-room' ? <EditRoom /> : action === 'add-room' ? <CreateRoom /> : "none"}
        </main>
    )
}

