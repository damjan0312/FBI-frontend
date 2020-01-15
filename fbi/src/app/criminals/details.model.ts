import { Criminal } from './criminals.model';

export interface Details {
    criminal: Criminal,
    prisons: string,
    crimes: string,
    agent: string;

}