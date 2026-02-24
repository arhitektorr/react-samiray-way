import { TrackLists } from './TrackLists';
import { TrackDetails } from './TrackDetails';
import { useTrackSelected } from '../bll/useTrackSelected';

export const MainPage = () => {
  const { trackId, setTrackId } = useTrackSelected();

  const handleTrackSelect = (id: string | null): void => {
    setTrackId(id);
  };
  return (
    <div>
      <div style={{ display: 'flex', gap: '50px' }}>
        <TrackLists
          selectedTrackId={trackId}
          onTrackSelect={handleTrackSelect}
        />
        <TrackDetails trackId={trackId} />
      </div>
    </div>
  );
};
