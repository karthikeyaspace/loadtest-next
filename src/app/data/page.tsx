import DataPage from "@/src/components/Data";
import React from "react";

interface User {
    id: number;
    name: string;
    email: string;
}

async function getUsers() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!res.ok) {
            throw new Error('Failed to fetch users');
        }
        const users: User[] = await res.json();
        return users;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const dynamic = "force-dynamic";

export default async function HomePage() {
    const users: User[] = await getUsers();

    return (
        <DataPage users={users} />
    );
}