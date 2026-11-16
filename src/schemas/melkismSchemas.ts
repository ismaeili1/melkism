import { z } from 'zod';

export const propertySchema = z.object({
  title: z.string().min(3).max(150),
  price: z.coerce.number().positive(),
  area: z.coerce.number().positive(),
  province: z.string().min(2),
  city: z.string().min(2),
  address: z.string().optional(),
  description: z.string().max(3000).optional(),
  imageUrl: z.string().url().optional().or(z.literal('')),
  gallery: z.array(z.string().url()).optional(),
});

export const escrowStatusSchema = z.object({
  transactionId: z.string().cuid(),
  status: z.enum(['PENDING_DEPOSIT', 'DEPOSITED_IN_ESCROW', 'UNDER_INSPECTION', 'RELEASED', 'REFUNDED', 'DISPUTED']),
  note: z.string().max(500).optional(),
});

export type PropertyInput = z.infer<typeof propertySchema>;
export type EscrowStatusInput = z.infer<typeof escrowStatusSchema>;