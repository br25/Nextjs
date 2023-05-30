async function getData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        // Handle the error appropriately
        console.error(error);
        throw error;
    }
}

export default async function Page() {
    try {
        const userData = await getData();

        const displayedData = userData.slice(0, 2); // Limiting to the first 5 entries

        return (
            <main>
                <div>
                    {displayedData.map((getInfo) => (
                        <div className="mb-8" key={getInfo.id}>
                            <h2 className="text-2xl font-bold mb-6">User Details</h2>
                            <p>ID: {getInfo.id}</p>
                            <p className="text-2xl font-bold mb-6">Name: {getInfo.name}</p>
                            <p>Username: {getInfo.username}</p>
                            <p>Email: {getInfo.email}</p>
                            {getInfo.address && (
                                <div className="ml-4">
                                    <h3 className="text-xl mb-2">Address</h3>
                                    <p>Suite: {getInfo.address.suite}</p>
                                    <p>City: {getInfo.address.city}</p>
                                    <p>Zipcode: {getInfo.address.zipcode}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </main>
        );
    } catch (error) {
        // Handle the error appropriately
        console.error(error);
        // Render an error message or fallback UI
        return <div>Error: Failed to fetch data</div>;
    }
}
