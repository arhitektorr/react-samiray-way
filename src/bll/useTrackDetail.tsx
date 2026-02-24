import { useEffect, useState } from 'react';
import { getTrack, type TrackListItemResource } from '../dal/api';

export function useTrackDetail(trackId: string | null) {
  const [trackDetails, setTrackDetails] =
    useState<TrackListItemResource | null>(null);

  useEffect(() => {
    if (!trackId) {
      setTrackDetails(null);
      return;
    }

    getTrack(trackId).then((json) => setTrackDetails(json.data));
  }, [trackId]);

  return { trackDetails };
}
