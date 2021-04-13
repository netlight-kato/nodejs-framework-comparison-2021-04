import { BundleService } from './bundle.service';
import { CreateBundleDto } from './dto/create-bundle.dto';
export declare class BundleController {
    private readonly bundleService;
    constructor(bundleService: BundleService);
    create(create: CreateBundleDto): any;
    findAll(): any[];
    findOne(id: string): any;
    remove(id: string): void;
}
