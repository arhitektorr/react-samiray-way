export type TrackListItemResource = {
  id: string;
  attributes: {
    title: string;
    lyrics: string | null;
  };
};

type GetTrackDetailsOutput = {
  data: TrackListItemResource;
};

export const getTrack = (trackId: string) => {
  const promise: Promise<GetTrackDetailsOutput> = fetch(
    `https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${trackId}`,
    {
      headers: prepareHeaders(),
    },
  ).then((res) => res.json());

  return promise;
};

type TrackAttachmentDto = {
  url: string;
};

type TrackListItemResourceAttributes = {
  title: string;
  attachments: Array<TrackAttachmentDto>;
};

export type TrackListItemOutput = {
  id: string;
  attributes: TrackListItemResourceAttributes;
};

type GetTrackListOutput = {
  data: Array<TrackListItemOutput>;
};
const prepareHeaders = () => {
  const apiKey = import.meta.env.VITE_API_KEY;

  if (!apiKey) return undefined;

  return {
    'api-key': apiKey,
  };
};
export const getTracks = () => {
  const promise: Promise<GetTrackListOutput> = fetch(
    'https://musicfun.it-incubator.app/api/1.0/playlists/tracks',
    {
      headers: prepareHeaders(),
    },
  ).then((res) => res.json());

  return promise;
};
