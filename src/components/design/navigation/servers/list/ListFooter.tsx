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
// import ConditionalLink from "../../../../../../../../external/components/src/lib/ConditionalLink";
// import { isTouchscreenDevice } from "../../../../../lib/isTouchscreenDevice" // "../../../lib/isTouchscreenDevice";
import { Text } from "preact-i18n";
// import { GenericSidebarBase, GenericSidebarList } from "../../../../../../../../external/components/src/components/navigation/SidebarBase"  // "F:\cyber\cyberim-revite\src\components\navigation\SidebarBase.tsx";
// import ButtonItem, { ChannelButton } from "../items/ButtonItem";
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
    //  isTouchscreenDevice &&
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

        

        </>
    );
}
