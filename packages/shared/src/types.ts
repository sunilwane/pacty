export type UserRole = "USER" | "ADMIN";

export type PredictionStatus =
  | "DRAFT"
  | "ACTIVE"
  | "CLOSED"
  | "RESOLVED"
  | "CANCELLED";

export type PredictionVisibility = "PUBLIC" | "PRIVATE" | "GROUP";

export interface User {
  id: string;
  email: string;
  username: string;
  walletAddress: string | null;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export interface Prediction {
  id: string;
  question: string;
  description: string | null;
  creatorId: string;
  status: PredictionStatus;
  visibility: PredictionVisibility;
  contractPredictionId: string | null;
  deadline: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}
