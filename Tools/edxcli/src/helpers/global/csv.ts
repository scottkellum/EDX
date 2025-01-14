const createCsvWriter = require('csv-writer').createObjectCsvWriter;
import path from 'node:path';

export default class CSV {
  callingOperation: string;
  csvWriter: any;
  formattedDate: string;
  outputDirectory: string;
  path: string;

  constructor(
    formattedDate: string,
    outputDirectory: string,
    callingOperation: string,
    headers: CsvHeaders[],
  ) {
    this.formattedDate = formattedDate;
    this.outputDirectory = outputDirectory;
    this.callingOperation = callingOperation;
    this.path = path.join(
      outputDirectory,
      `${this.callingOperation}_${this.formattedDate}.csv`,
    );
    this.csvWriter = createCsvWriter({
      path: this.path,
      // create map of csv headers to json elements
      header: headers,
    });
  }

  async write(data: any): Promise<string> {
    const message = await this.csvWriter.writeRecords(data).then(() => {
      return `${this.callingOperation} data written to ${this.path}`;
    });
    return message;
  }
}

interface CsvHeaders {
  id: string;
  title: string;
}
