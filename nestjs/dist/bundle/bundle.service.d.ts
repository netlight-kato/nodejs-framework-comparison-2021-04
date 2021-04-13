import { BundleDto } from './dto/bundle.dto';
import { CreateBundleDto } from './dto/create-bundle.dto';
export declare class BundleService {
    private store;
    create(create: CreateBundleDto): BundleDto;
    findAll(): BundleDto[];
    findOne(id: string): BundleDto;
    remove(id: string): void;
    private toDto;
}
