import { CurrencyService } from './currency.service';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { UpdateCurrencyDto } from './dto/update-currency.dto';
export declare class CurrencyController {
    private readonly currencyService;
    constructor(currencyService: CurrencyService);
    create(createCurrencyDto: CreateCurrencyDto): Promise<{
        id: number;
        name: string;
        rate: string;
    }>;
    findAll(): Promise<{
        id: number;
        name: string;
        rate: string;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        name: string;
        rate: string;
    }>;
    update(id: string, updateCurrencyDto: UpdateCurrencyDto): Promise<{
        id: number;
        name: string;
        rate: string;
    }>;
    remove(id: string): Promise<{
        id: number;
        name: string;
        rate: string;
    }>;
}
