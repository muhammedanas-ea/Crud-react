

function UserList() {
  return (
    <div className="p-5 h-screen">
        <h1 className="w-full text-xl text-gray-900 pb-3 text-start">User List</h1>
        <table className="w-full">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
                <tr>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">No</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Name</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Number</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Email</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Password</th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-gray-50">
                    <td className="p-3 text-sm text-gray-700 text-left">1</td>
                    <td className="p-3 text-sm text-gray-700 text-left">muhammed anas</td>
                    <td className="p-3 text-sm text-gray-700 text-left">Number</td>
                    <td className="p-3 text-sm text-gray-700 text-left">Email</td>
                    <td className="p-3 text-sm text-gray-700 text-left">Password</td>
                </tr>
            </tbody>
        </table>
    </div>
  );
}

export default UserList;
