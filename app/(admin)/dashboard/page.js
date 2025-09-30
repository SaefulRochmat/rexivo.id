const Index = () => {
  return (
    <div>
        {/* Content cards as examples */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-lg border bg-white p-4 shadow-sm">
                <p className="text-sm text-gray-500">Total Users</p>
                <p className="mt-1 text-2xl font-semibold">2,345</p>
            </div>
            <div className="rounded-lg border bg-white p-4 shadow-sm">
                <p className="text-sm text-gray-500">Revenue</p>
                <p className="mt-1 text-2xl font-semibold">$12,840</p>
            </div>
            <div className="rounded-lg border bg-white p-4 shadow-sm">
                <p className="text-sm text-gray-500">Orders</p>
                <p className="mt-1 text-2xl font-semibold">487</p>
            </div>
            <div className="rounded-lg border bg-white p-4 shadow-sm">
                <p className="text-sm text-gray-500">Conversion</p>
                <p className="mt-1 text-2xl font-semibold">3.7%</p>
            </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className="rounded-lg border bg-white p-4 shadow-sm lg:col-span-2">
                <h2 className="mb-3 text-base font-semibold">Overview</h2>
                <div className="h-48 w-full rounded-md bg-gray-100" />
            </div>
            <div className="rounded-lg border bg-white p-4 shadow-sm">
                <h2 className="mb-3 text-base font-semibold">Recent Activity</h2>
                <ul className="space-y-2 text-sm text-gray-700">
                    <li>New user registered</li>
                    <li>Order #1234 completed</li>
                    <li>Product updated</li>
                </ul>
            </div>
        </div>
    </div>
    );
}

export default Index;