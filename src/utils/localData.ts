// Local data management system to replace Supabase
// This uses localStorage for persistence and provides similar APIs

export interface User {
  id: string;
  email: string;
  fullName: string;
  isAdmin: boolean;
  createdAt: string;
}

export interface Booking {
  id: string;
  bookingReference: string;
  serviceName: string;
  bookingDate: string;
  bookingTime: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  address: string;
  totalAmount?: number;
  bookingStatus: 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled';
  paymentStatus: 'pending' | 'processing' | 'completed' | 'failed' | 'refunded';
  createdAt: string;
}

export interface Payment {
  id: string;
  paymentReference: string;
  bookingReference: string;
  amount: number;
  paymentMethod: string;
  paymentStatus: 'pending' | 'processing' | 'completed' | 'failed' | 'refunded';
  createdAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  createdAt: string;
}

export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  customerType: 'residential' | 'commercial';
  createdAt: string;
}

class LocalDataManager {
  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  private generateReference(prefix: string): string {
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.random().toString(36).substr(2, 4).toUpperCase();
    return `${prefix}-${timestamp}-${random}`;
  }

  // Authentication
  async login(email: string, password: string): Promise<{ user: User | null; error?: string }> {
    const users = this.getUsers();
    const user = users.find(u => u.email === email);
    
    if (!user) {
      return { user: null, error: 'User not found' };
    }

    // For demo purposes, accept any password for existing users
    // In production, you'd check hashed passwords
    const storedPasswords = JSON.parse(localStorage.getItem('user_passwords') || '{}');
    if (storedPasswords[user.id] !== password) {
      return { user: null, error: 'Invalid password' };
    }

    // Set current session
    localStorage.setItem('current_user', JSON.stringify(user));
    return { user };
  }

  async register(email: string, password: string, fullName: string, isAdmin: boolean = false): Promise<{ user: User | null; error?: string }> {
    const users = this.getUsers();
    
    if (users.find(u => u.email === email)) {
      return { user: null, error: 'User already exists' };
    }

    const user: User = {
      id: this.generateId(),
      email,
      fullName,
      isAdmin,
      createdAt: new Date().toISOString()
    };

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Store password separately (in production, this would be hashed)
    const passwords = JSON.parse(localStorage.getItem('user_passwords') || '{}');
    passwords[user.id] = password;
    localStorage.setItem('user_passwords', JSON.stringify(passwords));

    return { user };
  }

  getCurrentUser(): User | null {
    const userStr = localStorage.getItem('current_user');
    return userStr ? JSON.parse(userStr) : null;
  }

  logout(): void {
    localStorage.removeItem('current_user');
  }

  // Users
  getUsers(): User[] {
    return JSON.parse(localStorage.getItem('users') || '[]');
  }

  // Bookings
  getBookings(): Booking[] {
    return JSON.parse(localStorage.getItem('bookings') || '[]');
  }

  async createBooking(bookingData: Omit<Booking, 'id' | 'bookingReference' | 'createdAt'>): Promise<Booking> {
    const bookings = this.getBookings();
    const booking: Booking = {
      ...bookingData,
      id: this.generateId(),
      bookingReference: this.generateReference('BK'),
      createdAt: new Date().toISOString()
    };

    bookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(bookings));
    return booking;
  }

  async updateBooking(id: string, updates: Partial<Booking>): Promise<void> {
    const bookings = this.getBookings();
    const index = bookings.findIndex(b => b.id === id);
    if (index !== -1) {
      bookings[index] = { ...bookings[index], ...updates };
      localStorage.setItem('bookings', JSON.stringify(bookings));
    }
  }

  // Payments
  getPayments(): Payment[] {
    return JSON.parse(localStorage.getItem('payments') || '[]');
  }

  async createPayment(paymentData: Omit<Payment, 'id' | 'paymentReference' | 'createdAt'>): Promise<Payment> {
    const payments = this.getPayments();
    const payment: Payment = {
      ...paymentData,
      id: this.generateId(),
      paymentReference: this.generateReference('PAY'),
      createdAt: new Date().toISOString()
    };

    payments.push(payment);
    localStorage.setItem('payments', JSON.stringify(payments));
    return payment;
  }

  // Contact Messages
  getContactMessages(): ContactMessage[] {
    return JSON.parse(localStorage.getItem('contact_messages') || '[]');
  }

  async createContactMessage(messageData: Omit<ContactMessage, 'id' | 'createdAt' | 'status'>): Promise<ContactMessage> {
    const messages = this.getContactMessages();
    const message: ContactMessage = {
      ...messageData,
      id: this.generateId(),
      status: 'new',
      createdAt: new Date().toISOString()
    };

    messages.push(message);
    localStorage.setItem('contact_messages', JSON.stringify(messages));
    return message;
  }

  // Customers
  getCustomers(): Customer[] {
    return JSON.parse(localStorage.getItem('customers') || '[]');
  }

  async createCustomer(customerData: Omit<Customer, 'id' | 'createdAt'>): Promise<Customer> {
    const customers = this.getCustomers();
    const customer: Customer = {
      ...customerData,
      id: this.generateId(),
      createdAt: new Date().toISOString()
    };

    customers.push(customer);
    localStorage.setItem('customers', JSON.stringify(customers));
    return customer;
  }

  // Dashboard Stats
  getDashboardStats() {
    const bookings = this.getBookings();
    const payments = this.getPayments();
    const customers = this.getCustomers();
    const messages = this.getContactMessages();

    return {
      total_customers: customers.length,
      total_bookings: bookings.length,
      pending_bookings: bookings.filter(b => b.bookingStatus === 'pending').length,
      total_revenue: payments
        .filter(p => p.paymentStatus === 'completed')
        .reduce((sum, p) => sum + p.amount, 0),
      new_messages: messages.filter(m => m.status === 'new').length
    };
  }

  // Initialize with sample data if empty
  initializeData(): void {
    if (this.getUsers().length === 0) {
      // Create default admin user
      this.register('admin@sparkclean.co.uk', 'admin123', 'Admin User', true);
      
      // Create sample data
      const sampleCustomers: Customer[] = [
        {
          id: this.generateId(),
          firstName: 'John',
          lastName: 'Smith',
          email: 'john@example.com',
          phone: '01234567890',
          customerType: 'residential',
          createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
        },
        {
          id: this.generateId(),
          firstName: 'Sarah',
          lastName: 'Johnson',
          email: 'sarah@example.com',
          phone: '01234567891',
          customerType: 'commercial',
          createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString()
        }
      ];

      const sampleBookings: Booking[] = [
        {
          id: this.generateId(),
          bookingReference: this.generateReference('BK'),
          serviceName: 'Regular House Cleaning',
          bookingDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          bookingTime: '09:00',
          customerName: 'John Smith',
          customerEmail: 'john@example.com',
          customerPhone: '01234567890',
          address: '123 Main Street, London, SW1A 1AA',
          totalAmount: 120,
          bookingStatus: 'confirmed',
          paymentStatus: 'pending',
          createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString()
        },
        {
          id: this.generateId(),
          bookingReference: this.generateReference('BK'),
          serviceName: 'Office Deep Clean',
          bookingDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          bookingTime: '14:00',
          customerName: 'Sarah Johnson',
          customerEmail: 'sarah@example.com',
          customerPhone: '01234567891',
          address: '456 Business Park, Manchester, M1 2AB',
          totalAmount: 300,
          bookingStatus: 'pending',
          paymentStatus: 'pending',
          createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
        }
      ];

      const samplePayments: Payment[] = [
        {
          id: this.generateId(),
          paymentReference: this.generateReference('PAY'),
          bookingReference: sampleBookings[0].bookingReference,
          amount: 120,
          paymentMethod: 'stripe',
          paymentStatus: 'completed',
          createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
        }
      ];

      const sampleMessages: ContactMessage[] = [
        {
          id: this.generateId(),
          name: 'Emma Wilson',
          email: 'emma@example.com',
          phone: '01234567892',
          subject: 'Cleaning Service Inquiry',
          message: 'I would like to inquire about your regular cleaning services for my home.',
          status: 'new',
          createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
        }
      ];

      localStorage.setItem('customers', JSON.stringify(sampleCustomers));
      localStorage.setItem('bookings', JSON.stringify(sampleBookings));
      localStorage.setItem('payments', JSON.stringify(samplePayments));
      localStorage.setItem('contact_messages', JSON.stringify(sampleMessages));
    }
  }
}

export const localData = new LocalDataManager();

// Initialize data on first load
if (typeof window !== 'undefined') {
  localData.initializeData();
}