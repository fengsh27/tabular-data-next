'use client';

import { useState } from 'react';

interface CurationPanelProps {
  selectedPipelines: string[];
  setSelectedPipelines: (pipelines: string[]) => void;
  pmid: string;
  setPmid: (pmid: string) => void;
  isOneClickMode: boolean;
  setIsOneClickMode: (mode: boolean) => void;
  onCuration: () => void;
}

const pipelineOptions = [
  'PK Parameter Summary',
  'PK Parameter Individual',
  'PK Specimen Summary',
  'PK Drug Summary',
  'PK Population Summary',
  'PK Specimen Individual',
  'PK Drug Individual',
  'PK Population Individual',
  'PE/CT Study Information',
  'PE/CT Study Outcome'
];

export default function CurationPanel({
  selectedPipelines,
  setSelectedPipelines,
  pmid,
  setPmid,
  isOneClickMode,
  setIsOneClickMode,
  onCuration
}: CurationPanelProps) {
  const [openSections, setOpenSections] = useState<Set<string>>(new Set(['one-click-curation']));

  const handlePipelineToggle = (pipeline: string) => {
    if (selectedPipelines.includes(pipeline)) {
      setSelectedPipelines(selectedPipelines.filter(p => p !== pipeline));
    } else {
      setSelectedPipelines([...selectedPipelines, pipeline]);
    }
  };

  const toggleSection = (sectionKey: string) => {
    const newOpenSections = new Set(openSections);
    if (newOpenSections.has(sectionKey)) {
      newOpenSections.delete(sectionKey);
    } else {
      newOpenSections.add(sectionKey);
    }
    setOpenSections(newOpenSections);
  };

  const accordionSections = [
    {
      key: 'one-click-curation',
      title: 'One-Click Curation',
      content: (
        <div className="p-3 space-y-4">
          <div>
            <p className="text-sm text-gray-700 mb-4">One click curation for the article.</p>
            
            {/* Select Curation Mode */}
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-900 mb-3">Select Curation Mode</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="curationMode"
                    checked={isOneClickMode}
                    onChange={() => setIsOneClickMode(true)}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-700">One Click Mode</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="curationMode"
                    checked={!isOneClickMode}
                    onChange={() => setIsOneClickMode(false)}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-700">Customize Mode</span>
                </label>
              </div>
              {!isOneClickMode && (
                <div className="mt-2 p-2 bg-blue-50 border border-blue-200 rounded-md">
                  <p className="text-xs text-blue-700">
                    Customize Mode: Select specific pipeline types (with multi-agent) to run. Only the selected pipelines will be executed.
                  </p>
                </div>
              )}
            </div>

            {/* Select Pipeline Types (only in customize mode) */}
            {!isOneClickMode && (
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Select Pipeline Types</h3>
                <div className="space-y-2">
                  {pipelineOptions.map((pipeline) => (
                    <label key={pipeline} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedPipelines.includes(pipeline)}
                        onChange={() => handlePipelineToggle(pipeline)}
                        className="mr-2"
                      />
                      <span className="text-sm text-gray-700">{pipeline}</span>
                    </label>
                  ))}
                </div>
                <div className="mt-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Selected {selectedPipelines.length} pipeline type(s)
                  </span>
                </div>
              </div>
            )}

            {/* PMID Input and Curation Button */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Please enter the PMID or PMCID of the article.
              </label>
              <input
                type="text"
                value={pmid}
                onChange={(e) => setPmid(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-3"
                placeholder="PMID or PMCID"
              />
              <button
                onClick={onCuration}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Curation
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      key: 'access-article',
      title: 'Access Article',
      content: (
        <div className="p-3">
          <p className="text-sm text-gray-600">Access Article functionality will be implemented here.</p>
          <div className="mt-3 p-3 bg-gray-50 rounded-md">
            <p className="text-xs text-gray-500">Mock panel - Article access features coming soon</p>
          </div>
        </div>
      )
    },
    {
      key: 'curation-settings',
      title: 'Curation Settings',
      content: (
        <div className="p-3">
          <p className="text-sm text-gray-600">Curation Settings functionality will be implemented here.</p>
          <div className="mt-3 p-3 bg-gray-50 rounded-md">
            <p className="text-xs text-gray-500">Mock panel - Advanced curation settings coming soon</p>
          </div>
        </div>
      )
    },
    {
      key: 'follow-up-chat',
      title: 'Follow-up Chat',
      content: (
        <div className="p-3">
          <p className="text-sm text-gray-600">Follow-up Chat functionality will be implemented here.</p>
          <div className="mt-3 p-3 bg-gray-50 rounded-md">
            <p className="text-xs text-gray-500">Mock panel - Interactive chat features coming soon</p>
          </div>
        </div>
      )
    },
    {
      key: 'manage-record',
      title: 'Manage Record',
      content: (
        <div className="p-3">
          <p className="text-sm text-gray-600">Manage Record functionality will be implemented here.</p>
          <div className="mt-3 p-3 bg-gray-50 rounded-md">
            <p className="text-xs text-gray-500">Mock panel - Record management features coming soon</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="w-full bg-white border-r border-gray-200 p-6 overflow-y-auto h-screen lg:h-screen">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Curation Panel</h2>
      
      {/* Custom Accordion */}
      <div className="space-y-2">
        {accordionSections.map((section) => (
          <div key={section.key} className="border border-gray-200 rounded-lg">
            <button
              onClick={() => toggleSection(section.key)}
              className="w-full px-4 py-3 text-left flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors rounded-lg"
            >
              <span className="font-medium text-gray-900">{section.title}</span>
              <svg
                className={`w-5 h-5 transform transition-transform ${
                  openSections.has(section.key) ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openSections.has(section.key) && (
              <div className="border-t border-gray-200">
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
