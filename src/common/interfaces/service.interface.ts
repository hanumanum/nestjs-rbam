import { PageOptionsDto } from '../dtos';
import { TypeErrorOrPageDtoTuple } from '../dtos/page.dto';

export type TupleErrorOrData<T> = Promise<[Error | null, T, string?]>;

export interface IService {
	list(PageOptionsDto: PageOptionsDto): TypeErrorOrPageDtoTuple<any>;
	create(createDto: any): TupleErrorOrData<any>;
	one(id: string): TupleErrorOrData<any>;
	update(id: string, updateDto: any): TupleErrorOrData<any>;
	remove?(id: string): TupleErrorOrData<boolean>;
}
