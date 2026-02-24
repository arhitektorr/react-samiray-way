import { useState } from 'react';

export function useTrackSelected() {
  const [trackId, setTrackId] = useState<string | null>(null);

  return {
    trackId,
    setTrackId,
  };
}
