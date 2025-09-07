'use client';

import { useState } from 'react';
import CurationPanel from './components/CurationPanel';
import MainContent from './components/MainContent';

export default function Home() {
  const [curationData, setCurationData] = useState<any>(null);
  const [selectedPipelines, setSelectedPipelines] = useState([
    'PK Parameter Summary',
    'PK Parameter Individual',
    'PK Specimen Summary',
    'PK Drug Summary',
    'PK Population Summary',
    'PK Specimen Individual'
  ]);
  const [pmid, setPmid] = useState('29943508');
  const [isOneClickMode, setIsOneClickMode] = useState(false);

  const handleCuration = () => {
    // Mock data for demonstration
    setCurationData({
      pmid: pmid,
      pkSummary: {
        data: [
          {
            drugName: 'Fentanyl',
            analyte: 'Fentanyl',
            specimen: 'Umbilical vein',
            population: 'Fetus',
            pregnancyStage: 'Delivery',
            pediatricGestationalAge: 'Term',
            subjectN: 20,
            parameterType: 'Mean',
            parameterUnit: 'ng/mL',
            parameterStatistic: 'Mean',
            parameterValue: 0.12,
            variationType: 'SD',
            variationValue: 0.05,
            intervalType: 'CI',
            lowerBound: 0.10,
            upperBound: 0.14,
            pValue: 0.001,
            timeValue: 0,
            timeUnit: 'min'
          },
          {
            drugName: 'Fentanyl',
            analyte: 'Fentanyl',
            specimen: 'Maternal serum',
            population: 'Maternal',
            pregnancyStage: 'Delivery',
            pediatricGestationalAge: 'Term',
            subjectN: 20,
            parameterType: 'Mean',
            parameterUnit: 'ng/mL',
            parameterStatistic: 'Mean',
            parameterValue: 0.15,
            variationType: 'SD',
            variationValue: 0.06,
            intervalType: 'CI',
            lowerBound: 0.12,
            upperBound: 0.18,
            pValue: 0.001,
            timeValue: 0,
            timeUnit: 'min'
          }
        ],
        explanation: "The curated table accurately reflects the data from the source table. All values, including sample sizes, parameter statistics, parameter values, variation types, and P-values, match the source table. There are no discrepancies.",
        suggestedFix: "No changes are needed as the curated table is correct."
      },
      pkSpecimenSummary: {
        data: [
          {
            specimen: 'Blood (Umbilical)',
            sampleN: 20,
            population: 'Fetal',
            pregnancyStage: 'Delivery',
            pediatricGestationalAge: 'Term',
            subjectN: 20,
            sampleTime: 0,
            timeUnit: 'min',
            note: 'Fentanyl concentration for Adrenaline group'
          },
          {
            specimen: 'Blood (Maternal)',
            sampleN: 20,
            population: 'Maternal',
            pregnancyStage: 'Labor',
            pediatricGestationalAge: 'Term',
            subjectN: 20,
            sampleTime: 0,
            timeUnit: 'min',
            note: 'Fentanyl concentration for Control group'
          }
        ],
        explanation: "The curated table contains several inaccuracies in the 'Sample N' and 'Subject N' columns when compared to the source data. Specifically, the sample sizes and subject numbers for the umbilical and maternal blood specimens are mismatched.",
        suggestedFix: ""
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      {/* Left Curation Panel */}
      <div className="lg:w-80 w-full lg:flex-shrink-0">
        <CurationPanel
          selectedPipelines={selectedPipelines}
          setSelectedPipelines={setSelectedPipelines}
          pmid={pmid}
          setPmid={setPmid}
          isOneClickMode={isOneClickMode}
          setIsOneClickMode={setIsOneClickMode}
          onCuration={handleCuration}
        />
      </div>
      
      {/* Main Content Area */}
      <div className="flex-1 lg:min-w-0">
        <MainContent curationData={curationData} />
      </div>
    </div>
  );
}
