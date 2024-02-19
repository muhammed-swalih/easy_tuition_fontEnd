import React, { useMemo } from "react";
import { useMeeting } from "@videosdk.live/react-sdk";
import { MemoizedParticipantGrid } from "./LiveComponents/ParticipantGrid";

function ParticipantsViewer({ isPresenting }) {
  const {
    participants,
    pinnedParticipants,
    activeSpeakerId,
    localParticipant,
    localScreenShareOn,
    presenterId,
  } = useMeeting();

  const participantIds = useMemo(() => {
    const pinnedParticipantId = [...pinnedParticipants.keys()].filter(
      (participantId) => participantId
    );

    const regularParticipantIds = [...participants.keys()].filter(
      (participantId) =>
        ![...pinnedParticipants.keys()].includes(participantId) &&
        participantId !== localParticipant.id
    );

    let ids = [...pinnedParticipantId, ...regularParticipantIds].slice(
      0,
      isPresenting ? 5 : 15
    ); // Adjusted the slice indices as the localParticipant.id is included separately

    if (!ids.includes(localParticipant.id)) {
      ids.unshift(localParticipant.id); // Add localParticipant.id to the beginning of the array if it's not already included
    }

    // Ensure that activeSpeakerId is included in the participantIds array
    if (activeSpeakerId && !ids.includes(activeSpeakerId)) {
      ids.pop(); // Remove the last element
      ids.push(activeSpeakerId); // Add activeSpeakerId to the end
    }

    return ids;
  }, [
    participants,
    activeSpeakerId,
    pinnedParticipants,
    presenterId,
    localScreenShareOn,
    localParticipant,
    isPresenting,
  ]);

  return (
    <MemoizedParticipantGrid
      participantIds={participantIds}
      isPresenting={isPresenting}
    />
  );
}

const MemorizedParticipantView = React.memo(
  ParticipantsViewer,
  (prevProps, nextProps) => {
    return prevProps.isPresenting === nextProps.isPresenting;
  }
);

export default MemorizedParticipantView;
