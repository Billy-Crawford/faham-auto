"use client"

import { useState } from "react"

export function useMessages() {

    const [unreadCount, setUnreadCount] = useState(3) // mock

    return {
        unreadCount,
        setUnreadCount,
    }
}

