export default function Table({headers, data}) {
  return (
    <div className="overflow-x-auto shadow-md rounded-lg">
      <table className="min-w-full border border-gray-300 rounded-lg">
        {/* Table Header */}
        <thead className="bg-gray-100 border-b">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="px-4 py-2 text-left font-bold text-gray-700">
                {header}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b hover:bg-gray-50">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-4 py-2 text-gray-600">
                    {cell}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={headers.length} className="px-4 py-2 text-center text-gray-500">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
