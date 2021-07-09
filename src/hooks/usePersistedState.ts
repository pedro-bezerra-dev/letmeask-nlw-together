/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useEffect, Dispatch } from 'react';

type UsePersistedStateTypes = [
  state: any,
  setState: Dispatch<any>,
]

export function usePersistedState(key: string, defaultValue: any): UsePersistedStateTypes {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);

    if (storageValue) {
      return JSON.parse(storageValue);
    }
    return defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
