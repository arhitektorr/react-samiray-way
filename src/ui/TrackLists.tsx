import { useTracks } from '../bll/useTracks';
import { TrackItem } from './TrackItem';
import styles from './trackItem.module.css';
type Props = {
  selectedTrackId: string | null;
  onTrackSelect: (id: string | null) => void;
};

export const TrackLists = ({ selectedTrackId, onTrackSelect }: Props) => {
  const { tracks } = useTracks();

  if (tracks === null) {
    return (
      <div>
        <span> Loading ...</span>
      </div>
    );
  }

  if (tracks.length === 0) {
    return (
      <div>
        <span>No tracks</span>
      </div>
    );
  }
  const handleReset = () => {
    onTrackSelect?.(null);
  };

  const handleClick = (trackId: string) => {
    onTrackSelect?.(trackId);
  };

  return (
    <div>
      <button onClick={handleReset}>reset</button>
      <ul className={styles.tracks}>
        {tracks.map((track) => {
          return (
            <TrackItem
              key={track.id}
              track={track}
              isSelected={track.id === selectedTrackId}
              onSelect={handleClick}
            />
          );
        })}
      </ul>
    </div>
  );
};
