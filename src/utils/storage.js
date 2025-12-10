const STORAGE_KEY = 'yacht_bookings';

export const getBookings = () => {
    const bookings = localStorage.getItem(STORAGE_KEY);
    return bookings ? JSON.parse(bookings) : [];
};

export const addBooking = (booking) => {
    const bookings = getBookings();
    const newBooking = {
        id: Date.now().toString(),
        status: 'pending',
        timestamp: new Date().toISOString(),
        ...booking
    };
    bookings.push(newBooking);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
    return newBooking;
};

export const updateBookingStatus = (id, status) => {
    const bookings = getBookings();
    const updatedBookings = bookings.map(b =>
        b.id === id ? { ...b, status } : b
    );
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBookings));
    return updatedBookings;
};
