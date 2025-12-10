import React, { useState, useEffect } from 'react';
import { getBookings, updateBookingStatus } from '../utils/storage';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const [bookings, setBookings] = useState([]);
    const [activeTab, setActiveTab] = useState('requests');
    const navigate = useNavigate();

    useEffect(() => {
        const isAdmin = localStorage.getItem('isAdmin');
        if (!isAdmin) {
            navigate('/admin');
            return;
        }
        setBookings(getBookings());
    }, [navigate]);

    const handleStatusUpdate = (id, status) => {
        const updated = updateBookingStatus(id, status);
        setBookings(updated);
    };

    const pendingBookings = bookings.filter(b => b.status === 'pending');
    const historyBookings = bookings.filter(b => b.status !== 'pending');

    const renderBookingCard = (booking, isRequest = false) => (
        <div key={booking.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-4">
            <div className="flex justify-between items-start">
                <div>
                    <h4 className="font-heading text-lg text-deep-blue">{booking.yachtName}</h4>
                    <p className="text-sm text-gray-500 mb-2">Booked by: <span className="font-semibold text-gray-700">{booking.name}</span></p>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-600">
                        <div>📅 {booking.date}</div>
                        <div>👥 {booking.guests} Guests</div>
                        <div>📧 {booking.email}</div>
                        <div>🕒 {new Date(booking.timestamp).toLocaleDateString()}</div>
                    </div>
                </div>
                {isRequest ? (
                    <div className="flex flex-col space-y-2">
                        <button
                            onClick={() => handleStatusUpdate(booking.id, 'accepted')}
                            className="px-4 py-2 bg-green-500 text-white text-sm font-bold rounded hover:bg-green-600 transition-colors"
                        >
                            Accept
                        </button>
                        <button
                            onClick={() => handleStatusUpdate(booking.id, 'rejected')}
                            className="px-4 py-2 bg-red-500 text-white text-sm font-bold rounded hover:bg-red-600 transition-colors"
                        >
                            Reject
                        </button>
                    </div>
                ) : (
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${booking.status === 'accepted' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                        {booking.status}
                    </span>
                )}
            </div>
        </div>
    );

    const renderCalendar = () => {
        // Simple list view sorted by date for "Calendar"
        const sortedBookings = [...bookings]
            .filter(b => b.status === 'accepted')
            .sort((a, b) => new Date(a.date) - new Date(b.date));

        return (
            <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-700 mb-4">Upcoming Schedule</h3>
                {sortedBookings.length === 0 ? (
                    <p className="text-gray-500">No upcoming accepted bookings.</p>
                ) : (
                    sortedBookings.map(b => (
                        <div key={b.id} className="flex items-center p-4 bg-white border-l-4 border-deep-blue shadow-sm rounded-r">
                            <div className="mr-6 text-center">
                                <span className="block text-2xl font-bold text-deep-blue">{new Date(b.date).getDate()}</span>
                                <span className="block text-xs uppercase text-gray-500">{new Date(b.date).toLocaleString('default', { month: 'short' })}</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800">{b.yachtName}</h4>
                                <p className="text-sm text-gray-600">{b.name} ({b.guests} ppl)</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <div className="w-64 bg-deep-blue text-white p-6">
                <h1 className="text-xl font-heading mb-10 tracking-widest">Admin Panel</h1>
                <nav className="space-y-4">
                    <button
                        onClick={() => setActiveTab('requests')}
                        className={`w-full text-left px-4 py-3 rounded ${activeTab === 'requests' ? 'bg-white/10' : 'hover:bg-white/5'}`}
                    >
                        Booking Requests
                        {pendingBookings.length > 0 && (
                            <span className="ml-2 px-2 py-0.5 bg-accent-gold text-deep-blue text-xs font-bold rounded-full">
                                {pendingBookings.length}
                            </span>
                        )}
                    </button>
                    <button
                        onClick={() => setActiveTab('calendar')}
                        className={`w-full text-left px-4 py-3 rounded ${activeTab === 'calendar' ? 'bg-white/10' : 'hover:bg-white/5'}`}
                    >
                        Calendar
                    </button>
                    <button
                        onClick={() => setActiveTab('history')}
                        className={`w-full text-left px-4 py-3 rounded ${activeTab === 'history' ? 'bg-white/10' : 'hover:bg-white/5'}`}
                    >
                        History
                    </button>
                    <button
                        onClick={() => {
                            localStorage.removeItem('isAdmin');
                            navigate('/admin');
                        }}
                        className="w-full text-left px-4 py-3 rounded text-red-300 hover:text-red-100 mt-auto"
                    >
                        Logout
                    </button>
                </nav>
            </div>

            {/* Content */}
            <div className="flex-1 p-10 overflow-y-auto">
                <header className="mb-8">
                    <h2 className="text-3xl font-heading text-gray-800 capitalize">{activeTab}</h2>
                </header>

                {activeTab === 'requests' && (
                    <div className="max-w-3xl">
                        {pendingBookings.length === 0 ? (
                            <p className="text-gray-500 italic">No pending booking requests.</p>
                        ) : (
                            pendingBookings.map(b => renderBookingCard(b, true))
                        )}
                    </div>
                )}

                {activeTab === 'history' && (
                    <div className="max-w-3xl">
                        {historyBookings.length === 0 ? (
                            <p className="text-gray-500 italic">No booking history available.</p>
                        ) : (
                            historyBookings.map(b => renderBookingCard(b))
                        )}
                    </div>
                )}

                {activeTab === 'calendar' && (
                    <div className="max-w-3xl">
                        {renderCalendar()}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
