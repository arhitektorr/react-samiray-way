import clsx from 'clsx';
import type { TrackListItemOutput } from '../dal/api';
import styles from './trackItem.module.css';
type Props = {
  isSelected: boolean;
  onSelect: (trackId: string) => void;
  track: TrackListItemOutput;
};

export function TrackItem({ onSelect, track, isSelected }: Props) {
  const handleClick = () => onSelect?.(track.id);

  const classname = clsx({
    [styles.track]: true,
    [styles.selected]: isSelected,
  });
  return (
    <li className={classname} key={track.id}>
      <div onClick={handleClick}>{track.attributes.title}</div>
      <audio src={track.attributes.attachments[0].url} controls></audio>
    </li>
  );
}
