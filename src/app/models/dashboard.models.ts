import { Timestamp } from 'rxjs';

export class Dashboard {
  id : number;
  peopleTested : number;
  positiveCases : number;
  peopleRecovered : number;
  totalMortality : number;
  timestamp: Date;
}
