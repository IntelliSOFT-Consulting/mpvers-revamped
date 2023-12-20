export const aefi = [
  {
    section_id: 1,
    section: 'Patient Details',
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
    section_id: 1,
    section: 'Type of AEFI (Select at least one)',
    question_id: 'bcg',
    question: 'BCG Lymphadenitis',
    answer_type: 'checkbox',
  },
  {
    section_id: 1,
    question_id: 'convulsion',
    question: 'Convulsion',
    answer_type: 'checkbox',
  },
  {
    section_id: 1,
    question_id: 'urticaria',
    question: 'Generalized urticaria (hives)',
    answer_type: 'checkbox',
  },
  {
    section_id: 1,
    question_id: 'high_fever',
    question: 'High Fever',
    answer_type: 'checkbox',
  },
  {
    section_id: 1,
    question_id: 'abscess',
    question: 'Injection site abscess',
    answer_type: 'checkbox',
  },
  {
    section_id: 1,
    question_id: 'local_reaction',
    question: 'Severe Local Reaction',
    answer_type: 'checkbox',
  },
  {
    section_id: 1,
    question_id: 'anaphylaxis',
    question: 'Anaphylaxis',
    answer_type: 'checkbox',
  },
  {
    section_id: 1,
    question_id: 'meningitis',
    question: 'Encephalopathy,Encephalitis/Meningitis',
    answer_type: 'checkbox',
  },
  {
    section_id: 1,
    question_id: 'paralysis',
    question: 'Paralysis',
    answer_type: 'checkbox',
  },
  {
    section_id: 1,
    question_id: 'toxic_shock',
    question: 'Toxic Shock',
    answer_type: 'checkbox',
  },
  {
    section_id: 1,
    question_id: 'complaint_other',
    question: 'Other (type answer)',
    answer_type: 'checkbox',
  },
  {
    section_id: 1,
    question_id: 'complaint_other_specify',
    question_linked: 'complaint_other',
    question: '',
    answer_type: 'text',
  },
  {
    section_id: 2,
    question_id: 'AefiDescription',
    question: 'AEFI Signs & Symptoms',
    answer_type: 'multitext',
    options: [{question_id: 'description'}],
  },
  {
    section_id: 3,
    section: 'Suspected vaccine(s)',
    question_id: 'AefiListOfVaccine',
    question: '',
    answer_type: 'table',
    required: true,
    headers: 2,
    options: [
      {1: 'Name of Vaccine', 2: ''},
      {1: 'Dose No.', 2: ''},
      {1: 'Date Vaccinated', 2: ''},
      {1: 'Time Vaccinated', 2: ''},
      {1: 'Route of vaccination', 2: ''},
      {1: 'Site of vaccination', 2: ''},
      {1: 'Details of Vaccine', 2: 'Lot/Batch No.'},
      {1: '', 2: 'Manufacturer’s Name'},
      {1: '', 2: 'Expiry Date'},
      {1: 'Details of Diluents', 2: 'Lot/Batch No.'},
      {1: '', 2: 'Manufacturer’s Name'},
      {1: '', 2: 'Expiry Date'},
      {1: 'Action', 2: ''},
    ],
    table_form: [
      {
        order_id: 1,
        question_id: 'vaccine_name',
        question: 'Name of Vaccine(e.g. BCG,DPT-Hib-HeB)',
        answer_type: 'text',
        required: true,
        search: 'vaccines',
        search_url: 'vaccines',
      },
      {
        order_id: 2,
        question_id: 'dosage',
        question: 'Dose No.',
        answer_type: 'text',
      },
      {
        order_id: 3,
        question_id: 'vaccination_date',
        question: 'Date Vaccinated',
        answer_type: 'date',
        options: ['max'],
        required: true,
      },
      {
        order_id: 4,
        question_id: 'vaccination_time',
        question: 'Time Vaccinated',
        answer_type: 'time',
        required: true,
      },
      {
        order_id: 5,
        question_id: 'vaccination_route',
        question: 'Route of vaccination (i.m.,s.c.)',
        answer_type: 'dropdown',
        options: [
          {label: 'Intramascular', value: 'Intramascular'},
          {label: 'Subcutaneous', value: 'Subcutaneous'},
          {label: 'Intradermal', value: 'Intradermal'},
        ],
      },
      {
        order_id: 6,
        question_id: 'vaccination_site',
        question: 'Site of vaccination',
        answer_type: 'text',
      },
      {
        order_id: 7,
        section: 'Details of Vaccine',
        question_id: 'batch_number',
        question: 'Lot/Batch No.',
        answer_type: 'text',
      },
      {
        order_id: 8,
        question_id: 'vaccine_manufacturer',
        question: 'Manufacturer’s Name',
        answer_type: 'text',
      },
      {
        order_id: 9,
        question_id: 'expiry_date',
        question: 'Expiry Date',
        answer_type: 'date',
      },
      {
        order_id: 10,
        section: 'Details of Diluents',
        question_id: 'diluent_batch_number',
        question: 'Lot/Batch No.',
        answer_type: 'text',
      },
      {
        order_id: 11,
        question_id: 'diluent_manufacturer',
        question: 'Manufacturer’s Name',
        answer_type: 'text',
      },
      {
        order_id: 12,
        question_id: 'diluent_expiry_date',
        question: 'Expiry Date',
        answer_type: 'date',
      },
    ],
  },
  {
    section_id: 4,
    section: 'Serious',
    question_id: 'serious',
    question: 'AEFI Serious',
    answer_type: 'radiobox',
    options: [
      {name: 'Yes', value: 'Yes'},
      {name: 'No', value: 'No'},
    ],
    required: true,
  },
  {
    section_id: 4,
    section: 'If Yes',
    question_id: 'serious_yes',
    question_linked: 'serious',
    question: 'Select AEFI seriousness',
    answer_type: 'dropdown',
    options: [
      {label: 'Select Seriousness', value: ''},
      {label: 'Death', value: 'Death'},
      {label: 'Life threatening', value: 'Life threatening'},
      {
        label: 'Persistent or significant disability',
        value: 'Persistent or significant disability',
      },
      {
        label: 'Hospitalization or prolongation of existing hospitalization',
        value: 'Hospitalization or prolongation of existing hospitalization',
      },
      {label: 'Congenital anomaly', value: 'Congenital anomaly'},
      {
        label: 'Other important medical event',
        value: 'Other important medical event',
      },
    ],
  },
  {
    section_id: 4,
    question_id: 'serious_other',
    question: 'Other important medical event',
    answer_type: 'text',
  },
  {
    section_id: 5,
    section: 'AEFI Outcome',
    question_id: 'outcome',
    question: 'Select AEFI Outcome',
    answer_type: 'radiobox',
    options: [
      {name: 'Recovered/Resolved', value: 'Recovered/Resolved'},
      {name: 'Recovering/Resolving', value: 'Recovering/Resolving'},
      {
        name: 'Not recovered/Not resolved/Ongoing',
        value: 'Not recovered/Not resolved/Ongoing',
      },
      {
        name: 'Recovered/Resolved with sequelae',
        value: 'Recovered/Resolved with sequelae',
      },
      {name: 'Unknown', value: 'Unknown'},
      {name: 'Fatal', value: 'Fatal'},
    ],
    required: true,
  },
  {
    section_id: 5,
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
];
