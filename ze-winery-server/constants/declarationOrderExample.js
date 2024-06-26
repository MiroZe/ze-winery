const desiredOrder = [
  'KindOfDeclaration',
  'TypeOfDeclaration',
  'IsCorrectionDeclaration',
  'IsDelayedReporting',
  'PreparationDate',
  'CustomsOffice',
  'TotalAmountOfExciseDuty',
  'Customer',
  'Declarer',
  'ReportingPeriod',
  'AppliedDocuments',
  'ExciseGoods', // This will be handled specially
  'LegalEntity',
  'SIC',
  'ExciseNumber',
  'Name',
  'Egn',
  'TaxPeriod',
  'Start',
  'End',
  'AppliedDocument',
  'DocumentType',
  'Description',
  'DocumentNumber',
  'DocumentDate',
];

const goodsOrder = [
  'SequenceNumber',
  'BrandName',
  'Trademark',
  'APCode',
  'CNCode',
  'Measure',
  'AdditionalCode',
  'QuantityOfGoods',
  'IntendedUseOfProduct',
  'Purpose',
  'DutyAmount',
  'Payment',
  'PaidDuty',
  'Pieces',
  'NumberOfPackages',
  'TaxBase',
  'ExciseDuty'
];

module.exports = { desiredOrder, goodsOrder };
