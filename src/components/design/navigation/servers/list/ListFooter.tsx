// @ts-nocheck

import { Plus } from "@styled-icons/boxicons-regular";
import { Compass } from "@styled-icons/boxicons-solid";
import React from "react";
import styled, { css } from "styled-components/macro";

import { useLink } from "../../../../../lib";

import { Avatar } from "../../../atoms";
import { Tooltip } from "../../../atoms/indicators/Tooltip";
import { ItemContainer } from "./Item";

import ConditionalLink from ""

// import ConnectionStatus from  "../../../../../../../../external/components/src/components/navigation/items/ConnectionStatus"   // "../../../../../../../../src/components/navigation/items/ConnectionStatus" ;
import ConditionalLink from "../../../../../../../../external/components/src/lib/ConditionalLink";
import { isTouchscreenDevice } from "../../../../../../../../external/components/src/lib/isTouchscreenDevice" // "../../../lib/isTouchscreenDevice";
import { Text } from "preact-i18n";
import { GenericSidebarBase, GenericSidebarList } from "../../../../../../../../external/components/src/components/navigation/SidebarBase"  // "F:\cyber\cyberim-revite\src\components\navigation\SidebarBase.tsx";
import ButtonItem, { ChannelButton } from "../items/ButtonItem";
export interface FooterProps {
    createServer: () => void;
    showDiscover?: boolean;
}

/**
 * Buttons at the bottom of the list, including "create new server" and "discovery".
 */

 const Navbar = styled.div`
    display: flex;
    align-items: center;
    padding: 0 14px;
    font-weight: 600;
    flex-shrink: 0;
    height: 48px;

 ${() =>
     isTouchscreenDevice &&
     css`
         height: 56px;
     `}
`;


export function ListFooter({ createServer, showDiscover }: FooterProps) {
    const Link = useLink();

    return (
        <>
            {/* <a onClick={createServer}>
                <ItemContainer>
                    <Tooltip content="Add a server" div right>
                        <Avatar
                            size={42}
                            fallback={<Plus color="var(--accent)" size={24} />}
                            interactive
                        />
                    </Tooltip>
                </ItemContainer>
            </a>
            {showDiscover && (
                <Link to="/discover">
                    <ItemContainer>
                        <Tooltip content="Discover Revolt" div right>
                            <Avatar
                                size={42}
                                fallback={
                                    <Compass color="var(--accent)" size={24} />
                                }
                                interactive
                            />
                        </Tooltip>
                    </ItemContainer>
                </Link>
            )} */}

        <GenericSidebarBase mobilePadding>
            <Navbar>
                <Text id="app.home.directs" />
            </Navbar>
            <ConnectionStatus />
            <GenericSidebarList>
                <ConditionalLink active={pathname === "/"} to="/">
                    <ButtonItem active={pathname === "/"}>
                        <Home size={20} />
                        <span>
                            <Text id="app.navigation.tabs.home" />
                        </span>
                    </ButtonItem>
                </ConditionalLink>
                {!isTouchscreenDevice && (
                    <>
                        <ConditionalLink
                            active={pathname === "/friends"}
                            to="/friends">
                            <ButtonItem
                                active={pathname === "/friends"}
                                alert={
                                    incoming.length > 0 ? "mention" : undefined
                                }
                                alertCount={incoming.length}>
                                <UserDetail size={20} />
                                <span>
                                    <Text id="app.navigation.tabs.friends" />
                                </span>
                            </ButtonItem>
                        </ConditionalLink>
                    </>
                )}
                {/* <ConditionalLink
                    active={channel?.channel_type === "SavedMessages"}
                    to="/open/saved">
                    <ButtonItem
                        active={channel?.channel_type === "SavedMessages"}>
                        <Notepad size={20} />
                        <span>
                            <Text id="app.navigation.tabs.saved" />
                        </span>
                    </ButtonItem>
                </ConditionalLink> */}
                {/* {import.meta.env.DEV && (
                    <Link to="/dev">
                        <ButtonItem active={pathname === "/dev"}>
                            <Wrench size={20} />
                            <span>
                                <Text id="app.navigation.tabs.dev" />
                            </span>
                        </ButtonItem>
                    </Link>
                )} */}
                <Category>
                    {/* <Text id="app.main.categories.conversations" /> */}
                    <IconButton
                        onClick={() =>
                            modalController.push({
                                type: "create_group",
                            })
                        }>
                        <Plus size={16} />
                    </IconButton>
                </Category>
                {channels.length === 0 && (
                    <img src={placeholderSVG} loading="eager" />
                )}
                {channels.map((channel) => {
                    let user;
                    if (channel.channel_type === "DirectMessage") {
                        if (!channel.active) return null;
                        user = channel.recipient;

                        if (!user) return null;
                    }

                    const isUnread = channel.isUnread(state.notifications);
                    const mentionCount = channel.getMentions(
                        state.notifications,
                    ).length;

                    return (
                        <ConditionalLink
                            key={channel._id}
                            active={channel._id === channel_id}
                            to={`/channel/${channel._id}`}>
                            <ChannelButton
                                user={user}
                                channel={channel}
                                alert={
                                    mentionCount > 0
                                        ? "mention"
                                        : isUnread
                                        ? "unread"
                                        : undefined
                                }
                                alertCount={mentionCount}
                                active={channel._id === channel_id}
                            />
                        </ConditionalLink>
                    );
                })}
                <PaintCounter />
            </GenericSidebarList>
        </GenericSidebarBase>

        </>
    );
}
