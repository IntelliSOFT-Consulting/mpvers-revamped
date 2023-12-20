export const medication = [
  {
    section_id: 1,
    question_id: 'date_of_event',
    question: 'Date of Event',
    answer_type: 'date',
    options: ['max'],
    required: true,
  },
  {
    section_id: 1,
    question_id: 'time_of_event',
    question: 'Time of Event',
    answer_type: 'time',
    options: ['max'],
    required: true,
  },
  {
    section_id: 1,
    question_id: 'name_of_institution',
    question: 'Name of institution/Organization',
    answer_type: 'text',
    search: 'institute',
    search_url: 'facility_codes',
    required: true,
  },
  {
    section_id: 1,
    question_id: 'institution_code',
    question: 'Institution Code',
    answer_type: 'text',
    search: 'institute',
    search_url: 'facility_codes',
  },
  {
    section_id: 1,
    question_id: 'institution_contact',
    question: ' Institution Contact',
    answer_type: 'text',
  },
  {
    section_id: 1,
    question_id: 'county_id',
    question: 'County',
    answer_type: 'dropdown',
    options: 'counties',
    required: true,
  },
  {
    section_id: 2,
    section: 'Patient Information',
    question_id: 'patient_name',
    question: "Patient's Initials",
    answer_type: 'text',
    required: true,
  },
  {
    section_id: 2,
    question_id: 'date_of_birth',
    question: 'Date of Birth',
    answer_type: 'date',
    options: ['max'],
  },
  {
    section_id: 2,
    section: 'OR',
    question_id: 'age_years',
    question: 'Age Group',
    answer_type: 'dropdown',
    options: [
      {label: 'Select Age Group', value: ''},
      {label: 'neonate ( 0 - 1 month)', value: 'neonate'},
      {label: 'infant (1 month -1 year)', value: 'infant'},
      {label: 'child (1 - 11 years)', value: 'child'},
      {label: 'adolescent ( 12-17 years)', value: 'adolescent'},
      {label: 'adult (18-64 years)', value: 'adult'},
      {label: 'elderly (>65 years)', value: 'elderly'},
    ],
  },
  {
    section_id: 2,
    question_id: 'gender',
    question: 'Gender',
    answer_type: 'radiobox',
    options: [
      {name: 'Male', value: 'Male'},
      {name: 'Female', value: 'Female'},
      {name: 'Unknown', value: 'Unknown'},
    ],
    required: true,
  },
  {
    section_id: 2,
    question_id: 'pregnancy_status',
    question_linked: 'gender',
    answer_expect: 'Male',
    question: 'Pregnancy Status',
    answer_type: 'radiobox',
    options: [
      {name: 'Not Applicable', value: 'Not Applicable'},
      {name: 'Not pregnant', value: 'Not pregnant'},
      {name: '1st Trimester', value: '1st Trimester'},
      {name: '2nd Trimester', value: '2nd Trimester'},
      {name: '3rd Trimester', value: '3rd Trimester'},
    ],
  },
  {
    section_id: 3,
    section: 'Location Event',
    question_id: 'ward',
    question: 'Ward (Specify: medical, paeds, ortho)',
    answer_type: 'text',
  },
  {
    section_id: 3,
    question_id: 'clinic',
    question: 'Clinic (Specify: outpatient, dental, specialist) ',
    answer_type: 'text',
  },
  {
    section_id: 3,
    question_id: 'pharmacy',
    question: 'Pharmacy (paeds, main, inpatient, outpatient) ',
    answer_type: 'text',
  },
  {
    section_id: 3,
    question_id: 'accident',
    question: 'Accident & Emergency/Casualty',
    answer_type: 'text',
  },
  {
    section_id: 3,
    question_id: 'location_other',
    question: 'Others (specify)',
    answer_type: 'text',
  },
  {
    section_id: 4,
    question_id: 'description_of_error',
    question:
      'Please describe the error. Include description/ sequence of events and work environment (e.g. change of shift, short staffing, during peak hours). ',
    answer_type: 'text',
    required: true,
  },
  {
    section_id: 5,
    question_id: 'process_occur',
    question: 'In which process did the error occur?',
    answer_type: 'radiobox',
    options: [
      {name: 'Prescribing', value: 'Prescribing'},
      {
        name: 'Dispensing (includes filling)',
        value: 'Dispensing (includes filling)',
      },
      {name: 'Administration', value: 'Administration'},
      {name: 'Transcribing', value: 'Transcribing'},
      {name: 'Other', value: 'Other'},
    ],
    required: true,
  },
  {
    section_id: 5,
    section_linked: 'Other',
    question_id: 'process_occur_specify',
    question_linked: 'process_occur',
    question: 'Others (specify)',
    answer_type: 'text',
  },
  {
    section_id: 5,
    question_id: 'reach_patient',
    question: 'Did the error reach the patient?',
    answer_type: 'radiobox',
    options: [
      {name: 'Yes', value: 'Yes'},
      {name: 'No', value: 'No'},
    ],
    required: true,
  },
  {
    section_id: 5,
    question_id: 'direct_result',
    question:
      'Describe the direct result on the patient (e.g. death, type of harm, additional patient monitoring e.g. BP, heart rate, glucose level etc)',
    answer_type: 'text',
  },
  {
    section_id: 6,
    section:
      'Please tick the appropriate Error Outcome Category (Tick one appropriate box below) \n NO ERROR',
    question_id: 'outcome',
    question: '',
    answer_type: 'radiobox',
    options: [
      {
        name: 'Potential error, circumstances/events have potential to cause incident',
        value:
          'Potential error, circumstances/events have potential to cause incident',
      },
    ],
  },
  {
    section_id: 6,
    section: 'ERROR, HARM',
    question_id: 'outcome',
    question: '',
    answer_type: 'radiobox',
    options: [
      {
        name: 'Treatment /intervention required-caused temporary harm',
        value: 'Treatment /intervention required-caused temporary harm',
      },
      {
        name: 'Initial/prolonged hospitalization-caused temporary harm',
        value: 'Initial/prolonged hospitalization-caused temporary harm',
      },
      {
        name: 'Caused permanent harm',
        value: 'Caused permanent harm',
      },
      {
        name: 'Near death event',
        value: 'Near death event',
      },
    ],
  },
  {
    section_id: 6,
    section: 'ERROR, NO HARM',
    question_id: 'outcome',
    question: '',
    answer_type: 'radiobox',
    options: [
      {
        name: 'Actual error-did not reach patient',
        value: 'Actual error-did not reach patient',
      },
      {
        name: 'Actual error-caused no harm',
        value: 'Actual error-caused no harm',
      },
      {
        name: 'Additional monitoring required-caused no harm',
        value: 'Additional monitoring required-caused no harm',
      },
    ],
  },
  {
    section_id: 6,
    section: 'ERROR, DEATH',
    question_id: 'outcome',
    question: '',
    answer_type: 'radiobox',
    options: [
      {
        name: 'Death',
        value: 'Death',
      },
    ],
  },

  {
    section_id: 7,
    section:
      'Indicate the possible error cause(s) and contributing factor(s) below (Tick the appropriate box(es) \n Staff factors',
    question_id: 'error_cause_inexperience',
    question: 'Inexperienced personnel',
    answer_type: 'checkbox',
  },
  {
    section_id: 7,
    question_id: 'error_cause_knowledge',
    question: 'Inadequate knowledge',
    answer_type: 'checkbox',
  },
  {
    section_id: 7,
    question_id: 'error_cause_distraction',
    question: 'Distraction ',
    answer_type: 'checkbox',
  },
  {
    section_id: 7,
    section: 'Medication related',
    question_id: 'error_cause_sound',
    question: 'Sound alike medication ',
    answer_type: 'checkbox',
  },
  {
    section_id: 7,
    question_id: 'error_cause_medication',
    question: 'Look alike medication  ',
    answer_type: 'checkbox',
  },
  {
    section_id: 7,
    question_id: 'error_cause_packaging',
    question: 'Look alike packaging  ',
    answer_type: 'checkbox',
  },
  {
    section_id: 7,
    section: 'Work and environment',
    question_id: 'error_cause_workload',
    question: 'Heavy workload ',
    answer_type: 'checkbox',
  },
  {
    section_id: 7,
    question_id: 'error_cause_peak',
    question: 'Peak hour ',
    answer_type: 'checkbox',
  },
  {
    section_id: 7,
    question_id: 'error_cause_stock',
    question: 'Stock arrangements/storage problem ',
    answer_type: 'checkbox',
  },

  {
    section_id: 8,
    section: 'Task and technology',
    question_id: 'error_cause_procedure',
    question: 'Failure to adhere to work procedure ',
    answer_type: 'checkbox',
  },
  {
    section_id: 8,
    question_id: 'error_cause_abbreviations',
    question: 'Use of abbreviations ',
    answer_type: 'checkbox',
  },
  {
    section_id: 8,
    question_id: 'error_cause_illegible',
    question: 'Illegible prescriptions ',
    answer_type: 'checkbox',
  },
  {
    section_id: 8,
    question_id: 'error_cause_inaccurate',
    question: 'Patient information/record unavailable/ inaccurate ',
    answer_type: 'checkbox',
  },
  {
    section_id: 8,
    question_id: 'error_cause_labelling',
    question:
      'Wrong labelling/instruction on dispensing envelope or bottle/container ',
    answer_type: 'checkbox',
  },
  {
    section_id: 8,
    question_id: 'error_cause_computer',
    question: 'Incorrect computer entry ',
    answer_type: 'checkbox',
  },
  {
    section_id: 8,
    question_id: 'error_cause_other',
    question: 'Others: ',
    answer_type: 'checkbox',
  },
  {
    section_id: 8,
    question_id: 'error_cause_specify',
    question_linked: 'error_cause_other',
    question: 'Specify',
    answer_type: 'text',
  },
  {
    section_id: 9,
    section:
      'Product details: Please complete the following for products involved. Click Add for additional products',
    question_id: 'MedicationProduct',
    question: '',
    answer_type: 'table',
    headers: 1,
    options: [
      {1: 'Generic Name(Intended)'},
      {1: 'Brand Name(Intended)'},
      {1: 'Dosage (Intended)'},
      {1: 'Dose, frequency, duration, route (Intended)'},
      {1: 'Manufacturer (Intended)'},
      {1: 'Strength/concentration (Intended)'},
      {1: 'Type and size of container (Intended)'},
      {1: 'Generic Name (Error)'},
      {1: 'Brand Name (Error)'},
      {1: 'Dosage (Error)'},
      {1: 'Dose, frequency, duration, route (Error)'},
      {1: 'Manufacturer (Error)'},
      {1: 'Strength/concentration (Error)'},
      {1: 'Type and size of container (Error)'},
      {1: 'Action'},
    ],
    table_form: [
      {
        order_id: 1,
        question_id: 'generic_name_i',
        question: 'Generic name (active ingredient) No. 1 (intended)',
        answer_type: 'text',
        required: true,
      },
      {
        order_id: 2,
        question_id: 'product_name_i',
        question: 'Brand/ Product Name No. 1 (intended)',
        answer_type: 'text',
        required: true,
      },
      {
        order_id: 3,
        question_id: 'dosage_form_i',
        question: 'Dosage formulation No. 1 (intended)',
        answer_type: 'text',
        required: true,
      },
      {
        order_id: 4,
        question_id: 'dosage_i',
        question: 'Dose, frequency, duration, route No. 1 (intended)',
        answer_type: 'text',
        required: true,
      },
      {
        order_id: 5,
        question_id: 'manufacturer_i',
        question: 'Manufacturer No. 1 (intended)',
        answer_type: 'text',
        required: true,
      },
      {
        order_id: 6,
        question_id: 'strength_i',
        question: 'Strength/concentration No. 1 (intended)',
        answer_type: 'text',
        required: true,
      },
      {
        order_id: 7,
        question_id: 'container_i',
        question: 'Type and size of container No. 1 (intended)',
        answer_type: 'text',
        required: true,
      },
      {
        order_id: 8,
        question_id: 'generic_name_ii',
        question: 'Generic name (active ingredient) No. 2 (error) ',
        answer_type: 'text',
        required: true,
      },
      {
        order_id: 9,
        question_id: 'product_name_ii',
        question: 'Brand/ Product Name No. 2 (error) ',
        answer_type: 'text',
      },
      {
        order_id: 10,
        question_id: 'dosage_form_ii',
        question: 'Dosage formulation No. 2 (error) ',
        answer_type: 'text',
      },
      {
        order_id: 11,
        question_id: 'dosage_ii',
        question: 'Dose, frequency, duration, route No. 2 (error) ',
        answer_type: 'text',
      },
      {
        order_id: 12,
        question_id: 'manufacturer_ii',
        question: 'Manufacturer No. 2 (error) ',
        answer_type: 'text',
      },
      {
        order_id: 13,
        question_id: 'strength_ii',
        question: 'Strength/concentration No. 2 (error) ',
        answer_type: 'text',
      },
      {
        order_id: 14,
        question_id: 'container_ii',
        question: 'Type and size of container No. 2 (error) ',
        answer_type: 'text',
      },
    ],
  },
  {
    section_id: 10,
    section: 'Incident Information',
    question_id: 'recommendations',
    question:
      'Suggest any recommendations, or describe policies or procedures you instituted or plan to institute to prevent future similar errors. If available, kindly attach an investigational report e.g. Root Cause Analysis (RCA)',
    answer_type: 'text',
    required: true,
  },
  {
    section_id: 11,
    question_id: 'Attachment',
    question:
      'Do you have pictures or documents that you would like to send to PPB? click on the button to add them',
    answer_type: 'multiple_image',
    options: [
      {question_id: 'file'},
      {question_id: 'filename'},
      {question_id: 'description'},
    ],
  },
  {
    section_id: 11,
    section: 'Reporter Details',
    question_id: 'reporter_name',
    question: 'Name of Person Reporting',
    answer_type: 'text',
    required: true,
  },
  {
    section_id: 11,
    question_id: 'reporter_email',
    question: 'Email',
    answer_type: 'email-address',
    required: true,
  },
  {
    section_id: 11,
    question_id: 'designation_id',
    question: 'Designation',
    answer_type: 'dropdown',
    options: 'designations',
    required: true,
  },
  {
    section_id: 11,
    question_id: 'reporter_phone',
    question: 'Phone Number',
    answer_type: 'phone-pad',
    required: true,
  },
  {
    section_id: 11,
    question_id: 'reporter_date',
    question: 'Reporting date',
    answer_type: 'date',
    required: true,
  },

  {
    section_id: 11,
    section: 'Is the person submitting different from reporter?',
    question_id: 'person_submitting',
    question: 'Reporter different?',
    answer_type: 'radiobox',
    options: [
      {name: 'Yes', value: 'Yes'},
      {name: 'No', value: 'No'},
    ],
    required: true,
  },
  {
    section_id: 11,
    question_id: 'reporter_name_diff',
    question: 'Name',
    answer_type: 'text',
  },
  {
    section_id: 11,
    question_id: 'reporter_email_diff',
    question: 'Email Address',
    answer_type: 'email-address',
  },
  {
    section_id: 11,
    question_id: 'reporter_designation_diff',
    question: 'Designation',
    answer_type: 'dropdown',
    options: 'designations',
  },
  {
    section_id: 11,
    question_id: 'reporter_phone_diff',
    question: 'Phone Number',
    answer_type: 'phone-pad',
  },
  {
    section_id: 11,
    question_id: 'reporter_date_diff',
    question: 'Date',
    answer_type: 'date',
  },
];