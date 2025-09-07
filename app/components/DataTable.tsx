'use client';

interface DataTableProps {
  data: any[];
}

export default function DataTable({ data }: DataTableProps) {
  if (!data || data.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No data available
      </div>
    );
  }

  // Get all unique keys from the data objects
  const allKeys = Array.from(new Set(data.flatMap(item => Object.keys(item))));
  
  // Define column headers with proper labels
  const columnHeaders: { [key: string]: string } = {
    drugName: 'Drug name',
    analyte: 'Analyte',
    specimen: 'Specimen',
    population: 'Population',
    pregnancyStage: 'Pregnancy stage',
    pediatricGestationalAge: 'Pediatric/Gestational age',
    subjectN: 'Subject N',
    parameterType: 'Parameter type',
    parameterUnit: 'Parameter unit',
    parameterStatistic: 'Parameter statistic',
    parameterValue: 'Parameter value',
    variationType: 'Variation type',
    variationValue: 'Variation value',
    intervalType: 'Interval type',
    lowerBound: 'Lower bound',
    upperBound: 'Upper bound',
    pValue: 'P value',
    timeValue: 'Time value',
    timeUnit: 'Time unit',
    sampleN: 'Sample N',
    sampleTime: 'Sample time',
    note: 'Note'
  };

  return (
    <div className="overflow-x-auto border border-gray-200 rounded-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {allKeys.map((key) => (
              <th
                key={key}
                className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap border-r border-gray-200 last:border-r-0"
              >
                {columnHeaders[key] || key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50">
              {allKeys.map((key) => (
                <td
                  key={key}
                  className="px-3 py-2 text-sm text-gray-900 whitespace-nowrap border-r border-gray-200 last:border-r-0"
                >
                  {row[key] !== undefined && row[key] !== null ? row[key].toString() : '-'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
