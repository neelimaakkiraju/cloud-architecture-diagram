export const initialElements = [
    { id: '1', type: 'custom', data: { label: 'Region' }, position: { x: 250, y: 0 } },
    { id: '2', type: 'custom', data: { label: 'Availability Zone' }, position: { x: 100, y: 100 } },
    { id: '3', type: 'custom', data: { label: 'VPC' }, position: { x: 400, y: 100 } },
    { id: '4', type: 'custom', data: { label: 'Amazon S3' }, position: { x: 250, y: 200 } },
    { id: '5', type: 'custom', data: { label: 'Amazon EC2' }, position: { x: 550, y: 300 } },
    { id: 'e1-2', source: '1', target: '2', animated: true, type: 'smoothstep' },
    { id: 'e2-3', source: '2', target: '3', animated: true, type: 'smoothstep' },
    { id: 'e3-4', source: '3', target: '4', animated: true, type: 'smoothstep' },
    { id: 'e4-5', source: '4', target: '5', animated: true, type: 'smoothstep' },
  ];
  