export interface DataType {
  lat?: number;
  lng?: number;
  ip?: string;
  dataIp: string;
  provider: string;
  city: string;
  utc: string;
  country: string;
  postalCode: string;
  error?: string | null;
}
