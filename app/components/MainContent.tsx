'use client';

import DataTable from './DataTable';

interface CurationData {
  pmid: string;
  pkSummary: {
    data: any[];
    explanation: string;
    suggestedFix: string;
  };
  pkSpecimenSummary: {
    data: any[];
    explanation: string;
    suggestedFix: string;
  };
}

interface MainContentProps {
  curationData: CurationData | null;
}

export default function MainContent({ curationData }: MainContentProps) {
  return (
    <div className="flex-1 flex flex-col h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">m</span>
            </div>
            <h1 className="text-xl font-semibold text-gray-900">
              Tabular Curation Tool v0.2.15
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-50">
        {curationData ? (
          <div className="space-y-8">
            {/* One Click Curation Result */}
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h2 className="text-lg font-medium text-gray-900 mb-2">
                One Click Curation Result
              </h2>
              <p className="text-sm text-gray-600">PMID: {curationData.pmid}</p>
            </div>

            {/* PK Summary Section */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">pk_summary</h3>
              </div>
              <div className="p-6">
                <DataTable data={curationData.pkSummary.data} />
                <div className="mt-6 space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Explanation & Suggested Fix</h4>
                    <div className="bg-gray-50 rounded-md p-4">
                      <p className="text-sm text-gray-700 mb-2">
                        <strong>Explanation:</strong> {curationData.pkSummary.explanation}
                      </p>
                      <p className="text-sm text-gray-700">
                        <strong>Suggested Fix:</strong> {curationData.pkSummary.suggestedFix}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PK Specimen Summary Section */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">pk_specimen_summary</h3>
              </div>
              <div className="p-6">
                <DataTable data={curationData.pkSpecimenSummary.data} />
                <div className="mt-6 space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Explanation & Suggested Fix</h4>
                    <div className="bg-gray-50 rounded-md p-4">
                      <p className="text-sm text-gray-700 mb-2">
                        <strong>Explanation:</strong> {curationData.pkSpecimenSummary.explanation}
                      </p>
                      <p className="text-sm text-gray-700">
                        <strong>Suggested Fix:</strong> {curationData.pkSpecimenSummary.suggestedFix || 'No suggested fix available.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No Curation Data</h3>
              <p className="text-gray-500">Enter a PMID/PMCID and click "Curation" to begin.</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
