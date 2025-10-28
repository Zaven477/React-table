export interface Address {
  city: string;
  street: string;
}

export interface Company {
  id: number;
  name: string;
  industry: string;
  email: string;
  phone: string;
  address: Address;
  employees: number;
  revenue: number;
  status: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  progress: number;
}
