import { Card, CardTitle } from "@/src/components/ui/card";
import React from "react";

interface User {
    id: number;
    name: string;
    email: string
}

async function getUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await res.json();
    return users;
}

export const dynamic = "force-dynamic"

export default async function HomePage() {
    const users: User[] = await getUsers();

    return (
        <Card>
            <p>Data component - with suspense and fallback, server side rendered</p>
            <CardTitle>Users</CardTitle>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </Card>
    );
}