import { vi, describe, it, expect } from 'vitest';
import { supabase } from '../supabase/client';
import { signupWithOTP, verifyEmail } from '../utils/AuthRequest';
import { User, Session, AuthResponse, AuthOtpResponse } from '@supabase/supabase-js';

vi.mock('../supabase/client', () => ({
  supabase: {
    auth: {
      signInWithOtp: vi.fn(),
      verifyOtp: vi.fn(),
    },
  },
}));

describe('Auth Requests', () => {
  it('should sign up with OTP', async () => {
    const email = 'test@example.com';
    const mockResponse: AuthOtpResponse = { 
      data: { 
        user: null,
        session: null,
        messageId: 'mock-message-id'
      }, 
      error: null 
    };

    vi.mocked(supabase.auth.signInWithOtp).mockResolvedValue(mockResponse);

    const result = await signupWithOTP(email);

    expect(supabase.auth.signInWithOtp).toHaveBeenCalledWith({ email });
    expect(result).toEqual(mockResponse);
  });

  it('should verify email with OTP', async () => {
    const email = 'test@example.com';
    const token = '123456';
    
    const mockUser: User = {
      id: 'fd6058e5-af8f-42d8-8684-fe4fbc3f4fa5',
      aud: 'authenticated',
      role: 'authenticated',
      email: 'test@example.com',
      email_confirmed_at: '2025-01-18T13:14:33.580218Z',
      phone: '',
      confirmation_sent_at: '2025-01-18T13:14:11.077923Z',
      confirmed_at: '2025-01-18T13:14:33.580218Z',
      last_sign_in_at: '2025-01-18T13:14:33.584311Z',
      app_metadata: { provider: 'email', providers: ['email'] },
      user_metadata: {},
      identities: [{
        identity_id: 'ba1ed93c-13df-4418-9b61-ae34dc61da5c',
        id: 'fd6058e5-af8f-42d8-8684-fe4fbc3f4fa5',
        user_id: 'fd6058e5-af8f-42d8-8684-fe4fbc3f4fa5',
        identity_data: { 
          email: 'test@example.com', 
          email_verified: true, 
          phone_verified: false, 
          sub: 'fd6058e5-af8f-42d8-8684-fe4fbc3f4fa5' 
        },
        provider: 'email',
        last_sign_in_at: '2025-01-18T13:14:11.070357Z',
        created_at: '2025-01-18T13:14:11.070409Z',
        updated_at: '2025-01-18T13:14:11.070409Z'
      }],
      created_at: '2025-01-18T13:14:11.064061Z',
      updated_at: '2025-01-28T16:32:44.424937Z'
    };

    const mockSession: Session = {
      access_token: 'mock-access-token',
      token_type: 'bearer',
      expires_in: 3600,
      refresh_token: 'mock-refresh-token',
      user: mockUser,
      expires_at: Math.floor(Date.now() / 1000) + 3600
    };

    const mockResponse: AuthResponse = { 
      data: {
        session: mockSession,
        user: mockUser
      },
      error: null 
    };

    vi.mocked(supabase.auth.verifyOtp).mockResolvedValue(mockResponse);

    const result = await verifyEmail(email, token);

    expect(supabase.auth.verifyOtp).toHaveBeenCalledWith({
      email,
      token,
      type: 'email',
    });

    const expectedResponse = {
        session: mockSession,
        error: null
      };
    expect(result).toEqual(expectedResponse);
  });
});