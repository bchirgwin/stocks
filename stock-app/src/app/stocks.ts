interface Stock {
  symbol: string;
  name: string;
  closing: number
}

export const stocks: Stock[] =
  [
    {
      symbol: 'F',
      name: 'Ford',
      closing: 15.437298734982
    },
    {
      symbol: 'TSLA',
      name: 'Tesla Inc',
      closing: 155
    },
    {
      symbol: 'GM',
      name: 'General Motors Company',
      closing: 2.5
    }
  ];
