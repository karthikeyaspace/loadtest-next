import { Card, CardTitle } from "./ui/card";

export default function DataPage({ users }: { users: any }) {
    return (
        <Card className="mt-20">
            <p>Data component - with suspense and fallback, server side rendered</p>
            <CardTitle>Users</CardTitle>
            <ul>
                {users.map((user: any) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </Card>
    )
}