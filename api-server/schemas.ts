import { z } from 'zod';

export const DecisionPayloadSchema = z.object({
  assetId: z.string().min(1).max(20),
  price: z.number().positive(),
  timestamp: z.number().int().positive(),
  confidenceRatio: z.number().min(0).max(100),
  riskScore: z.number().min(0).max(100),
  isBlocked: z.boolean(),
  publisherCount: z.number().int().min(0),
  nonce: z.number().int(),
});

export type ValidatedDecisionPayload = z.infer<typeof DecisionPayloadSchema>;
