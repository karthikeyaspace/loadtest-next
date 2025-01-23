import Heavy from "@/src/components/Heavy";

async function fetchData() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return Array.from({ length: 10000 }, (_, i) => ({ id: i, value: `Item ${i}` }));
}

export default async function HeavyPage() {
    const data = await fetchData();
    return (
        <Heavy data={data} />
    )
}