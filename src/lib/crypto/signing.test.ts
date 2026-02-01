import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  requestRemoteSigning,
  fetchTrustedSigner,
  getSigningEngine,
  toUint8Array,
  formatForAnchor,
  SigningServiceError,
} from './signing';

describe('crypto/signing', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-01-28T12:00:00Z'));
    
    // Mock fetch
    global.fetch = vi.fn();
  });

  it('toUint8Array converts number array to Uint8Array', () => {
    const arr = [1, 2, 3, 255];
    const result = toUint8Array(arr);
    expect(result).toBeInstanceOf(Uint8Array);
    expect(Array.from(result)).toEqual(arr);
  });

  it('formatForAnchor formats decision correctly', () => {
    const decision = {
      assetId: 'SOL/USD',
      riskScore: 50,
      isBlocked: false,
      confidenceRatio: 0.5,
      publisherCount: 10,
      timestamp: Date.now(),
      decisionHash: [1, 2, 3],
      signature: [4, 5, 6],
      signerPublicKey: [7, 8, 9],
      signerBase58: 'abc123',
    };

    const formatted = formatForAnchor(decision);
    
    expect(formatted.assetId).toBe('SOL/USD');
    expect(formatted.decisionHash).toBeInstanceOf(Uint8Array);
    expect(formatted.signature).toBeInstanceOf(Uint8Array);
    expect(formatted.signerPubkey).toBeInstanceOf(Uint8Array);
  });

  it('SigningServiceError has correct properties', () => {
    const error = new SigningServiceError('TEST_ERROR', true);
    expect(error.code).toBe('TEST_ERROR');
    expect(error.retryable).toBe(true);
    expect(error.name).toBe('SigningServiceError');
  });

  it('getSigningEngine returns engine with required methods', () => {
    const engine = getSigningEngine();
    expect(engine.getPublicKey).toBeDefined();
    expect(engine.sign).toBeDefined();
    expect(typeof engine.getPublicKey).toBe('function');
    expect(typeof engine.sign).toBe('function');
  });
});
