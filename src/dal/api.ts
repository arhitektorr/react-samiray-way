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
      headers: {
        // 'api-key': '5d63a8bd-090b-4072-88bf-f7b14b9121c2',
      },
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

export const getTracks = () => {
  const promise: Promise<GetTrackListOutput> = fetch(
    'https://musicfun.it-incubator.app/api/1.0/playlists/tracks',
    {
      headers: {
        // 'api-key': '5d63a8bd-090b-4072-88bf-f7b14b9121c2',
      },
    },
  ).then((res) => res.json());

  return promise;
};
