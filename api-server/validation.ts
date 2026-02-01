import { z } from 'zod';

// Schema Zod para validação alternativa (mais strict)
export const DecisionPayloadSchema = z.object({
  assetId: z.string().min(1).max(16),
  price: z.number().positive(),
  timestamp: z.number().int(),
  confidenceRatio: z.number().int().min(0).max(10000),
  riskScore: z.number().int().min(0).max(100),
  isBlocked: z.boolean(),
  publisherCount: z.number().int().min(0),
  nonce: z.number().int(),
});

// Função auxiliar para validar com Zod
export function validateWithZod(data: unknown) {
  return DecisionPayloadSchema.safeParse(data);
}
