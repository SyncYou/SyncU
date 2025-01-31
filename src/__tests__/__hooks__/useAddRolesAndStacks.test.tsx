import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import useAddRolesAndStacks from '../../hooks/useAddRolesAndStacks';

describe('useAddRolesAndStacks', () => {
  it('should initialize with empty arrays', () => {
    const { result } = renderHook(() => useAddRolesAndStacks());
    
    expect(result.current.roles).toEqual([]);
    expect(result.current.stacks).toEqual([]);
    expect(result.current.typedRole).toBe('');
    expect(result.current.typedStack).toBe('');
  });

  it('should add and remove roles', () => {
    const { result } = renderHook(() => useAddRolesAndStacks());

    act(() => {
      result.current.addRole('Frontend Developer');
    });

    expect(result.current.roles).toEqual(['Frontend Developer']);
    expect(result.current.typedRole).toBe('');

    act(() => {
      result.current.addRole('Backend Developer');
    });

    expect(result.current.roles).toEqual(['Frontend Developer', 'Backend Developer']);

    act(() => {
      result.current.removeRole('Frontend Developer');
    });

    expect(result.current.roles).toEqual(['Backend Developer']);
  });

  it('should add and remove stacks', () => {
    const { result } = renderHook(() => useAddRolesAndStacks());

    act(() => {
      result.current.addStack('React');
    });

    expect(result.current.stacks).toEqual(['React']);
    expect(result.current.typedStack).toBe('');

    act(() => {
      result.current.addStack('Node.js');
    });

    expect(result.current.stacks).toEqual(['React', 'Node.js']);

    act(() => {
      result.current.removeStack('React');
    });

    expect(result.current.stacks).toEqual(['Node.js']);
  });

  it('should handle typed role changes', () => {
    const { result } = renderHook(() => useAddRolesAndStacks());

    act(() => {
      result.current.handleTypedRole({ target: { value: 'New Role' } } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.typedRole).toBe('New Role');
  });

  it('should handle typed stack changes', () => {
    const { result } = renderHook(() => useAddRolesAndStacks());

    act(() => {
      result.current.handleTypedStack({ target: { value: 'New Stack' } } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.typedStack).toBe('New Stack');
  });
});