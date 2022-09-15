import { observer } from "mobx-react-lite";
import React from "react";

import type { UserStatus as Interface } from "cyberhi-api";
import type { User } from "cyberhi.js";

export type Props = {
    /**
     * User we are dealing with
     */
    user?: User;
};

const mappings: Record<Interface["presence"] & string, string> = {
    Online: "online",
    Idle: "away",
    Busy: "busy",
    Invisible: "invisible",
};

/**
 * Overlays user status in current SVG
 */
export const UserStatus = observer(({ user }: Props) => {
    return (
        <circle
            cx="27"
            cy="27"
            r="5"
            fill={`var(--status-${
                mappings[
                    user?.status?.presence ??
                        (user?.online ? "Online" : "Invisible")
                ]
            })`}
        />
    );
});
