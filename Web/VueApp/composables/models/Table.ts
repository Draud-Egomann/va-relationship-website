export class TableData {
  tableHeadings: string[];
  tableRows: { model: string; data: number[] }[];

  constructor(
    headings: string[],
    rows: { model: string; data: number[] }[]
  ) {
    this.tableHeadings = headings;
    this.tableRows = rows;

    // Validate that the length of each row's data matches the number of headings
    rows.forEach((row) => {
      if (row.data.length !== headings.length - 1) {
        throw new Error(
          `Invalid data length for model "${row.model}". Expected ${headings.length - 1
          }, got ${row.data.length}.`
        );
      }
    });
  }
}